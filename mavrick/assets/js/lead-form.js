// Enquiry form -> glint-email-relay Lambda (same request body as the old /api/sendEmail).
// Include with: <script src="/assets/js/lead-form.js" data-subject="Hygex Website Enquiry" defer></script>
// The form posted to /main/sendEnquery, which never existed on the static site.
(function () {
  var script = document.currentScript;
  var subject = (script && script.getAttribute('data-subject')) || 'Website Enquiry';
  var ENDPOINT = 'https://psdiw5luaqoyb3pcxljybzw6j40sqgve.lambda-url.ap-south-1.on.aws/';
  var TEMPLATE = 'https://glintcloudshopuploads.s3.ap-south-1.amazonaws.com/templates/Ennvintemplate.html';

  function wire(form) {
    form.setAttribute('action', '#');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var val = function (id) { var el = form.querySelector('#' + id); return el ? el.value.trim() : ''; };
      var btn = form.querySelector('[type=submit]');
      if (btn) { btn.disabled = true; btn.dataset.label = btn.innerHTML; btn.innerHTML = 'Sending...'; }
      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipientEmail: 'info@ennwin.in',
          subject: subject + ' (' + location.hostname + location.pathname + ')',
          templateURl: TEMPLATE,
          templateData: { fullName: val('name'), mobileNumber: val('number'), email: val('email'), message: val('message') }
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

  var forms = document.querySelectorAll('form#enquery_request3, form[action="/main/sendEnquery"]');
  for (var i = 0; i < forms.length; i++) wire(forms[i]);
})();
