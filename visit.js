// Counts page visits for yaglot.com: page, device type and where the visitor came from.
// No cookies, nothing stored on the device and nothing that identifies a person.
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

  var page = location.pathname.replace(/\.html$/, '').replace(/\/index$/, '/').replace(/(.)\/$/, '$1') || '/';
  var body = new URLSearchParams({ form: 'visit', page: page, device: deviceType(), referrer: referrerName() });
  var url = 'https://script.google.com/macros/s/AKfycbzfAgURxVnNx_jh8BH5Tt2B6gXhl66O7gOMsZhp74ebgQ_dG4Kw8W4I3dPXg3pexwOg9A/exec';
  try {
    if (navigator.sendBeacon && navigator.sendBeacon(url, body)) return;
  } catch (err) {}
  fetch(url, { method: 'POST', mode: 'no-cors', keepalive: true, body: body }).catch(function () {});
})();
