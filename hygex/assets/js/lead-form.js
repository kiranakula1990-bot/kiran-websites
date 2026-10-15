// Enquiry forms -> glint-email-relay Lambda (same request body as the old /api/sendEmail).
// Include with: <script src="/assets/js/lead-form.js" data-subject="Hygex Website Enquiry" defer></script>
// Handles the "Get A Quote" modal (#enquery_request3, which posted to /main/sendEnquery that never existed)
// and the contact page form (.row.gx-3, whose fields have no names so it only reloaded the page).
(function () {
  var script = document.currentScript;
  var subject = (script && script.getAttribute('data-subject')) || 'Website Enquiry';
  var ENDPOINT = '/api/contact';
  var TEMPLATE = 'https://glintcloudshopuploads.s3.ap-south-1.amazonaws.com/templates/Ennvintemplate.html';

  // Read fields by type/placeholder, since one of the forms has no name/id attributes.
  function collect(form) {
    var d = { fullName: '', mobileNumber: '', email: '', message: '' }, extra = [];
    var fields = form.querySelectorAll('input, textarea, select');
    for (var i = 0; i < fields.length; i++) {
      var el = fields[i], v = (el.value || '').trim();
      var key = ((el.id || '') + ' ' + (el.name || '') + ' ' + (el.placeholder || '')).toLowerCase();
      if (!v || el.type === 'submit' || el.type === 'hidden' || el.type === 'button') continue;
      if (el.type === 'email' || /email/.test(key)) d.email = v;
      else if (el.type === 'tel' || /mobile|phone|number/.test(key)) d.mobileNumber = v;
      else if (el.tagName === 'TEXTAREA' || /message/.test(key)) d.message = v;
      else if (!d.fullName && /name/.test(key) && !/business|company/.test(key)) d.fullName = v;
      else extra.push((el.placeholder || el.name || 'Field') + ': ' + v);
    }
    if (extra.length) d.message = extra.join(' | ') + (d.message ? '\n\n' + d.message : '');
    return d;
  }

  function wire(form) {
    form.setAttribute('action', '#');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('[type=submit], button:not([type=button])');
      if (btn) { btn.disabled = true; btn.dataset.label = btn.innerHTML; btn.innerHTML = 'Sending...'; }
      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipientEmail: 'info@ennwin.in',
          subject: subject + ' (' + location.hostname + location.pathname + ')',
          templateURl: TEMPLATE,
          templateData: collect(form)
        })
      }).then(function (r) {
        if (!r.ok) throw new Error(r.status);
        alert('Thank you! Your enquiry has been sent. We will get back to you shortly.');
        form.reset();
      }).catch(function () {
        alert('Sorry, your enquiry could not be sent. Please call us or email info@ennwin.in.');
      }).then(function () {
        if (btn) { btn.disabled = false; btn.innerHTML = btn.dataset.label; }
      });
    });
  }

  var forms = document.querySelectorAll('form#enquery_request3, form[action="/main/sendEnquery"], form.row.gx-3');
  for (var i = 0; i < forms.length; i++) wire(forms[i]);
})();
