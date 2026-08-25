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
      var mobile = f('mobile').replace(/\D/g, '');
      if (mobile.length < 10) { status.className = 'status err'; status.textContent = 'Please enter a 10-digit mobile number.'; return; }
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
      fetch('https://test.glintcloudshops.com/api/sendEmail', {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'x-tenant': 'default-t' }, body: JSON.stringify(payload)
      }).then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        track('form_submit_' + (form.getAttribute('data-form') || 'enquiry'));
        location.href = '/contact/thank-you/';
      }).catch(function () {
        btn.disabled = false; status.className = 'status err';
        status.textContent = 'We could not send this just now. Please call +91 91875 98642 or WhatsApp us — or try again in a minute.';
      });
    });
  });
})();
