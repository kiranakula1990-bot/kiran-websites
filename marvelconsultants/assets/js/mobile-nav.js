/* Marvel Consultants — mobile bottom nav injector
 * Adds a fixed bottom tab bar on mobile only.
 * No-op if already present. Path-aware for /blog/ subdir.
 */
(function () {
  if (document.querySelector('.mc-bottom-nav')) return;

  var inBlogDir = /\/blog\//.test(location.pathname);
  var p = inBlogDir ? '../' : '';

  var items = [
    { href: p + 'index.html',  icon: 'fa-house',                label: 'Home',  match: ['index.html'],            isHome: true },
    { href: p + 'gst.html',    icon: 'fa-file-invoice-dollar', label: 'GST',   match: ['gst.html', 'gst-'] },
    { href: p + 'bbmp.html',   icon: 'fa-building',             label: 'BBMP',  match: ['bbmp.html', 'bbmp-'] },
    { href: p + 'blog.html',   icon: 'fa-newspaper',            label: 'Blog',  match: ['blog.html', '/blog/'] },
    { href: 'tel:+919187598642', icon: 'fa-phone',              label: 'Call',  match: [] }
  ];

  var path = location.pathname;
  var fileName = path.split('/').pop() || '';
  var isRoot = path === '/' || path === '' || fileName === '' || fileName === 'index.html';

  var nav  = document.createElement('nav');
  nav.className = 'mc-bottom-nav';
  nav.setAttribute('aria-label', 'Mobile quick navigation');

  var html = '';
  for (var i = 0; i < items.length; i++) {
    var it = items[i];
    var active = false;
    if (it.isHome) {
      active = isRoot;
    } else {
      for (var m = 0; m < it.match.length; m++) {
        if (fileName.indexOf(it.match[m]) > -1 || path.indexOf(it.match[m]) > -1) {
          active = true; break;
        }
      }
    }

    html += '<a href="' + it.href + '"' + (active ? ' class="is-active" aria-current="page"' : '') +
            ' aria-label="' + it.label + '">' +
              '<i class="fa-solid ' + it.icon + '" aria-hidden="true"></i>' +
              '<span>' + it.label + '</span>' +
            '</a>';
  }
  nav.innerHTML = html;

  function append() { document.body.appendChild(nav); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', append);
  } else {
    append();
  }
})();
