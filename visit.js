// Counts page visits for yaglot.com: page, device type, where the visitor came from, the campaign
// name in the link, time on the page, how far down it was scrolled and which FAQs were opened.
// No cookies, nothing stored on the device and nothing that identifies a person. The visit id is
// random, made fresh on every page load and kept only in memory, so it only links the visit row to
// its own later updates.
// Skipped on test copies of the site and when the browser asks not to be tracked.
(function () {
  if (!/^(www\.)?yaglot\.com$/.test(location.hostname)) return;
  if (navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true) return;

        function deviceType() {
          var ua = navigator.userAgent || '';
          var shortSide = Math.min(screen.width, screen.height);
          var isTablet = /iPad|Tablet/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua)) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
          if (isTablet) return 'tablet';
          if (/Mobi|iPhone|iPod/i.test(ua) || (window.matchMedia('(pointer: coarse)').matches && shortSide < 600)) return 'phone';
          return 'computer';
        }

        // Where the visitor came from, worked out when they sign up (nothing is stored on their device)
        function referrerName() {
          var params = new URLSearchParams(location.search);
          if (params.get('utm_source')) return params.get('utm_source').toLowerCase();
          var ua = navigator.userAgent || '';
          var apps = [
            [/LinkedInApp/i, 'linkedin'], [/Instagram/i, 'instagram'], [/Barcelona/i, 'threads'],
            [/MessengerForiOS|Orca-Android/i, 'messenger'], [/FBAN|FBAV|FB_IAB/i, 'facebook'],
            [/TwitterAndroid|Twitter for/i, 'x'], [/musical_ly|BytedanceWebview|TikTok/i, 'tiktok'],
            [/Snapchat/i, 'snapchat'], [/Pinterest/i, 'pinterest'], [/ Line\//i, 'line'],
            [/MicroMessenger/i, 'wechat'], [/Telegram/i, 'telegram'], [/YouTube/i, 'youtube']
          ];
          for (var i = 0; i < apps.length; i++) if (apps[i][0].test(ua)) return apps[i][1];
          if (!document.referrer) return 'direct';
          var host = new URL(document.referrer).hostname.replace(/^(www|m|l|lm|mobile)\./, '');
          if (host === location.hostname.replace(/^www\./, '')) return 'direct';
          var sites = [
            [/(^|\.)linkedin\.com$|^lnkd\.in$/, 'linkedin'], [/(^|\.)instagram\.com$/, 'instagram'],
            [/(^|\.)threads\.(net|com)$/, 'threads'], [/(^|\.)facebook\.com$|^fb\.me$/, 'facebook'],
            [/(^|\.)messenger\.com$/, 'messenger'], [/^(t\.co|x\.com|twitter\.com)$/, 'x'],
            [/(^|\.)youtube\.com$|^youtu\.be$/, 'youtube'], [/(^|\.)tiktok\.com$/, 'tiktok'],
            [/(^|\.)reddit\.com$/, 'reddit'], [/(^|\.)pinterest\./, 'pinterest'],
            [/(^|\.)google\./, 'google'], [/(^|\.)bing\.com$/, 'bing'], [/(^|\.)duckduckgo\.com$/, 'duckduckgo'],
            [/(^|\.)yahoo\./, 'yahoo'], [/(^|\.)line\.me$/, 'line'], [/(^|\.)whatsapp\.com$/, 'whatsapp']
          ];
          for (var j = 0; j < sites.length; j++) if (sites[j][0].test(host)) return sites[j][1];
          // Any other site: just its name, for example github.com → github, bbc.co.uk → bbc
          var parts = host.split('.');
          if (parts.length > 2 && /^(co|com|org|net|gov|ac|edu)$/.test(parts[parts.length - 2]) && parts[parts.length - 1].length === 2) parts.pop();
          return parts.length > 1 ? parts[parts.length - 2] : host;
        }

  var url = 'https://script.google.com/macros/s/AKfycbzfAgURxVnNx_jh8BH5Tt2B6gXhl66O7gOMsZhp74ebgQ_dG4Kw8W4I3dPXg3pexwOg9A/exec';

  function send(body) {
    try {
      if (navigator.sendBeacon && navigator.sendBeacon(url, body)) return;
    } catch (err) {}
    try {
      fetch(url, { method: 'POST', mode: 'no-cors', keepalive: true, body: body }).catch(function () {});
    } catch (err) {}
  }

  // A random id for this page load only: 12 base36 characters, never stored
  function randomId() {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    var bytes = new Uint8Array(12);
    var out = '';
    if (window.crypto && crypto.getRandomValues) crypto.getRandomValues(bytes);
    else for (var k = 0; k < 12; k++) bytes[k] = Math.floor(Math.random() * 256);
    for (var i = 0; i < 12; i++) out += chars.charAt(bytes[i] % 36);
    return out;
  }

  var page = location.pathname.replace(/\.html$/, '').replace(/\/index$/, '/').replace(/(.)\/$/, '$1') || '/';
  var campaign = (new URLSearchParams(location.search).get('utm_campaign') || '').toLowerCase().slice(0, 60);
  var id = randomId();

  send(new URLSearchParams({ form: 'visit', page: page, device: deviceType(), referrer: referrerName(), campaign: campaign, id: id }));

  // Time on the page: only while it is visible
  var visibleMs = 0;
  var visibleSince = document.visibilityState === 'visible' ? Date.now() : null;
  function pause() {
    if (visibleSince !== null) { visibleMs += Date.now() - visibleSince; visibleSince = null; }
  }
  function resume() {
    if (visibleSince === null && document.visibilityState === 'visible') visibleSince = Date.now();
  }
  function seconds() {
    var ms = visibleMs + (visibleSince !== null ? Date.now() - visibleSince : 0);
    return Math.min(86400, Math.round(ms / 1000));
  }

  // Furthest scroll depth: 25, 50, 75 or 100 per cent of the page height (0 below 25)
  var scroll = 0;
  var scrollQueued = false;
  function measureScroll() {
    scrollQueued = false;
    var doc = document.documentElement;
    var height = Math.max(doc.scrollHeight, document.body ? document.body.scrollHeight : 0);
    if (!height) return;
    var seen = (window.scrollY || doc.scrollTop || 0) + window.innerHeight;
    var depth = seen >= height - 2 ? 100 : seen / height >= 0.75 ? 75 : seen / height >= 0.5 ? 50 : seen / height >= 0.25 ? 25 : 0;
    if (depth > scroll) scroll = depth;
  }
  window.addEventListener('scroll', function () {
    if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(measureScroll); }
  }, { passive: true });
  window.addEventListener('load', measureScroll);
  measureScroll();

  // FAQs opened (FAQs page only): a short slug of each question, joined with '|'
  var faqs = [];
  if (page === '/faqs') {
    document.addEventListener('toggle', function (event) {
      var item = event.target;
      if (!item || item.tagName !== 'DETAILS' || !item.open) return;
      var summary = item.querySelector('summary');
      var slug = item.id || (summary ? summary.textContent : '');
      slug = slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40).replace(/-+$/, '');
      if (!slug || faqs.indexOf(slug) !== -1) return;
      if (faqs.concat(slug).join('|').length > 300) return;
      faqs.push(slug);
    }, true);
  }

  // Send the latest totals whenever the page is hidden or left. It may be sent several times.
  var lastSent = '';
  function sendUpdate() {
    measureScroll();
    var body = new URLSearchParams({ form: 'visit-update', id: id, seconds: String(seconds()), scroll: String(scroll), faqs: faqs.join('|') });
    var text = body.toString();
    if (text === lastSent) return;
    lastSent = text;
    send(body);
  }
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') { pause(); sendUpdate(); }
    else resume();
  });
  window.addEventListener('pagehide', function () { pause(); sendUpdate(); });
  window.addEventListener('pageshow', function (event) { if (event.persisted) resume(); });
})();
