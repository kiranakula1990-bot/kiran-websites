/* Marvel Consultants v2 — nav, menus, forms, CTA tracking (no dependencies) */
(function () {
  'use strict';
  function track(label) {
    try { if (typeof gtag === 'function') gtag('event', 'cta_click', { cta_label: label, page_path: location.pathname }); } catch (e) {}
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-cta]');
    if (a) track(a.getAttribute('data-cta'));
  });

  // mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }
  // dropdowns
  document.querySelectorAll('.has-menu > button').forEach(function (btn) {
    var li = btn.parentElement;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = li.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.querySelectorAll('.has-menu.open').forEach(function (o) { if (o !== li) { o.classList.remove('open'); o.querySelector('button').setAttribute('aria-expanded', 'false'); } });
    });
  });
  document.addEventListener('click', function () {
    document.querySelectorAll('.has-menu.open').forEach(function (o) { o.classList.remove('open'); o.querySelector('button').setAttribute('aria-expanded', 'false'); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') document.querySelectorAll('.has-menu.open').forEach(function (o) { o.classList.remove('open'); });
  });

  // enquiry forms → existing Glint email API (same endpoint the v1 site uses)
  document.querySelectorAll('form[data-enquiry]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.status');
      var hp = form.querySelector('input[name="website"]');
      if (hp && hp.value) return; // honeypot
      var f = function (n) { var el = form.querySelector('[name="' + n + '"]'); return el ? el.value.trim() : ''; };
      var inline = form.getAttribute('data-success') === 'inline';
      if (inline) { // email dialog: name, email and message are required; mobile is optional
        if (!f('name') || !f('message')) { status.className = 'status err'; status.textContent = 'Please add your name and a message.'; return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f('email'))) { status.className = 'status err'; status.textContent = 'Please enter a valid email address so we can reply.'; return; }
      }
      var mobileEl = form.querySelector('[name="mobile"]');
      var mobile = f('mobile').replace(/\D/g, '');
      if (mobileEl && (mobileEl.required || mobile) && mobile.length < 10) { status.className = 'status err'; status.textContent = 'Please enter a 10-digit mobile number.'; return; }
      var lines = [];
      if (f('customerType')) lines.push('I am: ' + f('customerType'));
      if (f('service')) lines.push('Need help with: ' + f('service'));
      if (f('location')) lines.push('Property/business location: ' + f('location'));
      if (f('message')) lines.push('Details: ' + f('message'));
      lines.push('Source page: ' + location.href);
      var payload = {
        recipientEmail: 'info@marvelconsultants.co.in',
        subject: form.getAttribute('data-enquiry') || 'Marvel Website Enquiry',
        htmlS3FileId: 0,
        templateURl: 'https://glintcloudshopuploads.s3.ap-south-1.amazonaws.com/templates/Marveltemplate.html',
        templateData: { fullName: f('name'), email: f('email') || 'not provided', mobileNumber: f('mobile'), message: lines.join('\n') }
      };
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true; status.className = 'status'; status.textContent = 'Sending…';
      fetch('https://psdiw5luaqoyb3pcxljybzw6j40sqgve.lambda-url.ap-south-1.on.aws/', {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'x-tenant': 'default-t' }, body: JSON.stringify(payload)
      }).then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        track('form_submit_' + (form.getAttribute('data-form') || 'enquiry'));
        if (inline) {
          form.reset(); btn.disabled = false; status.className = 'status ok';
          status.textContent = 'Thank you — your email has been sent. We will reply the same working day.';
          return;
        }
        location.href = '/contact/thank-you/';
      }).catch(function () {
        btn.disabled = false; status.className = 'status err';
        status.textContent = 'We could not send this just now. Please call +91 91875 98642 or WhatsApp us — or try again in a minute.';
      });
    });
  });

  // "Email us" side button → on-page email form (falls back to mailto where <dialog> is unsupported)
  var dlg = document.getElementById('mail-dialog');
  if (dlg && typeof dlg.showModal === 'function') {
    document.addEventListener('click', function (e) {
      var opener = e.target.closest('[data-open-mail]');
      if (!opener) return;
      e.preventDefault();
      var st = dlg.querySelector('.status'); if (st) { st.className = 'status full'; st.textContent = ''; }
      dlg.showModal();
      var first = dlg.querySelector('#md-name'); if (first) first.focus();
    });
    dlg.querySelector('.md-close').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); }); // click on backdrop
  }
})();
