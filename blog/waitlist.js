// The waitlist form at the end of each blog article. Same fields and Apps Script as the home page.
(function () {
    // Handle waitlist form submission
    const waitlistForm = document.getElementById('waitlist-form-article');
    if (waitlistForm) {
      waitlistForm.querySelector('input[type="email"]').addEventListener('input', function () {
        this.removeAttribute('aria-invalid');
        document.getElementById('waitlist-error').hidden = true;
      });
      waitlistForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const btn = waitlistForm.querySelector('.btn-notify');
        // While sending the button is aria-disabled (it keeps focus), so further presses do nothing
        if (!btn || btn.getAttribute('aria-disabled') === 'true') return;

        // Check the email before sending and show a warning if it's missing or wrong
        const emailInput = waitlistForm.querySelector('input[type="email"]');
        const email = (emailInput.value || '').trim();
        const problem = !email ? 'Please enter your email address.'
          : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ? 'Please enter a valid email address, like name@example.com.' : '';
        const errorBox = document.getElementById('waitlist-error');
        if (problem) {
          errorBox.textContent = problem;
          errorBox.hidden = false;
          emailInput.setAttribute('aria-invalid', 'true');
          // Moving focus to the box reads its warning once (through aria-describedby).
          // If the cursor is already there, leave and come back so it is read again
          if (document.activeElement === emailInput) emailInput.blur();
          emailInput.focus();
          return;
        }
        errorBox.hidden = true;
        emailInput.removeAttribute('aria-invalid');

        // Show 'Sending…' on the button and tell screen readers, and hide any earlier failure message
        const statusBox = document.getElementById('waitlist-status');
        const failBox = document.getElementById('waitlist-fail');
        failBox.hidden = true;
        failBox.textContent = '';
        // Keep the button's width so the email box does not jump while 'Sending…' shows
        btn.style.minWidth = btn.offsetWidth + 'px';
        btn.setAttribute('aria-disabled', 'true');
        btn.textContent = 'Sending…';
        statusBox.textContent = 'Sending…';

        // Which kind of device the visitor signed up on (sent as 'device')
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

                // Details sent with each sign-up (no personal data beyond the email)
        var details = new URLSearchParams({
          email: email,
          device: deviceType(),
          referrer: referrerName(),
          language: navigator.language || '',
          region: (Intl.DateTimeFormat().resolvedOptions().timeZone) || '',
          consent: 'privacy-v26.7'
        });

        // POST to Google Apps Script. With 'no-cors' the answer cannot be read, so only a network
        // failure or no answer within 15 seconds counts as a failed send
        const controller = window.AbortController ? new AbortController() : null;
        let timer;
        const timeout = new Promise(function(resolve, reject) {
          timer = setTimeout(function() {
            if (controller) controller.abort();
            reject(new Error('timeout'));
          }, 15000);
        });
        const send = fetch('https://script.google.com/macros/s/AKfycbxpdgMwzmGheJ5_FYKvUatwxpVBFXUQw73wv3AthCnG-nVErawYSsOxXh8_ges5jt53fw/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: details.toString(),
          signal: controller ? controller.signal : undefined
        });
        // Show the result after about one second at the earliest, so 'Sending…' does not flash
        const atLeastOneSecond = new Promise(function(resolve) { setTimeout(resolve, 1000); });

        // Wait for both, even when the send fails at once
        const sent = Promise.race([send, timeout]).then(function() { return true; }, function() { return false; });
        Promise.all([sent, atLeastOneSecond]).then(function(results) {
          clearTimeout(timer);
          statusBox.textContent = '';
          if (!results[0]) return showFailure();
          waitlistForm.innerHTML = `
            <div class="waitlist-thanks">
              <h3 tabindex="-1">You're in!</h3>
              <p>We'll let you know as soon as we're ready.</p>
            </div>
          `;
          // Move focus to the heading so screen readers read the thank-you once
          waitlistForm.querySelector('h3').focus();
        });

        // Nothing reached us: keep the form and the email, let them try again and say what to do
        function showFailure() {
          btn.removeAttribute('aria-disabled');
          btn.textContent = 'Join the waitlist';
          btn.style.minWidth = '';
          failBox.innerHTML = 'Something went wrong. Please try again or email us at&nbsp;<a href="mailto:hello@yaglot.com">hello@yaglot.com</a>.';
          failBox.hidden = false;
          // Bring the message into view if it is below the screen, without sliding under reduced motion
          const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          failBox.scrollIntoView({ block: 'nearest', behavior: still ? 'auto' : 'smooth' });
        }
      });
    }
})();
