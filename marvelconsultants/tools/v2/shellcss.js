// Derive shell-only stylesheets (header/nav/footer/CTA/buttons) from v2.css and m.css so legacy pages keep their own
// article styles untouched. Only whitelisted selectors survive; media queries are filtered the same way.
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');

function parse(css) {
  // returns [{sel, body, media}] flattening one level of @media
  const out = [];
  let i = 0;
  const readBlock = () => { let depth = 0, start = i; for (; i < css.length; i++) { if (css[i] === '{') depth++; else if (css[i] === '}') { depth--; if (depth === 0) { i++; return css.slice(start, i); } } } return css.slice(start); };
  while (i < css.length) {
    const rest = css.slice(i);
    const ws = rest.match(/^\s+/); if (ws) { i += ws[0].length; continue; }
    const cm = rest.match(/^\/\*[\s\S]*?\*\//); if (cm) { i += cm[0].length; continue; }
    const selEnd = css.indexOf('{', i); if (selEnd < 0) break;
    const sel = css.slice(i, selEnd).trim(); i = selEnd;
    const block = readBlock();
    if (sel.startsWith('@media')) {
      const inner = block.slice(1, -1);
      for (const r of parse(inner)) out.push({ sel: r.sel, body: r.body, media: sel });
    } else out.push({ sel, body: block, media: null });
  }
  return out;
}
function keep(sel, allow) {
  return sel.split(',').map(s => s.trim()).every(s => allow.some(a => s === a || s.startsWith(a + ' ') || s.startsWith(a + '.') || s.startsWith(a + ':') || s.startsWith(a + '>') || s.startsWith(a + '[')));
}
function build(src, allow, extra) {
  const rules = parse(fs.readFileSync(path.join(ROOT, 'assets', 'css', src), 'utf8'));
  const kept = rules.filter(r => keep(r.sel, allow));
  const plain = kept.filter(r => !r.media).map(r => r.sel + r.body).join('\n');
  const byMedia = {};
  for (const r of kept.filter(r => r.media)) (byMedia[r.media] = byMedia[r.media] || []).push(r.sel + r.body);
  const media = Object.entries(byMedia).map(([m, rs]) => `${m}{${rs.join('')}}`).join('\n');
  return `/* Shell-only stylesheet derived from ${src} — header, nav, footer, CTA band, buttons. Legacy article styles untouched. */\n${plain}\n${media}\n${extra}\n`;
}
const DESKTOP_ALLOW = [':root', ':focus-visible', '.sr', '.wrap', '.btn', '.btn-primary', '.btn-ink', '.btn-outline', '.btn-wa', '.btn-sm', '.arrow', '.topbar', '.site-header', '.brand', '.nav', '.menu', '.has-menu', '.nav-cta', '.nav-toggle', '.site-footer', '.mobile-bar', '.side-cta', '.mail-dialog', '.cta-band', '.eyebrow'];
const MOBILE_ALLOW = [':root', ':focus-visible', '.btn', '.btn-primary', '.btn-outline', '.btn-wa', '.btn-sm', '.actions', '.arrow', '.m-header', '.m-menu', '.cta-band', '.m-footer', '.mobile-bar', '.side-cta', '.mail-dialog', '.eyebrow'];
const DESKTOP_EXTRA = `
/* shell resets — defend against bare element rules in legacy stylesheets (style.css, blog.min.css, bootstrap) */
.site-header *,.topbar *,.site-footer *,.cta-band *,.mobile-bar *{box-sizing:border-box}
.site-header,.topbar,.site-footer,.cta-band,.mobile-bar,.site-header *,.topbar *,.site-footer *,.cta-band *,.mobile-bar *{font-family:var(--sans)!important;font-weight:400;line-height:1.5;text-align:left}
.site-header{background:var(--paper)!important;position:sticky;top:0;z-index:50;transition:none;padding:0;box-shadow:none;border-bottom:1px solid var(--rule)}
.topbar{position:relative;z-index:51;text-align:left}
.brand img{height:52px!important;width:auto!important;box-shadow:none!important;margin:0}
.nav a,.nav button{font-weight:500}
.nav li,.menu li,.site-footer li,.topbar li{margin:0}
.nav a{background:none;position:static;padding:.6rem .8rem}
.nav-cta .btn-primary{color:#fff!important;background:var(--plum)!important;padding:.55rem .95rem;display:inline-flex}
.nav-cta .btn-primary:hover,.nav-cta .btn-primary:focus-visible{background:var(--plum-dk)!important}
.site-header ul,.site-footer ul{margin:0;padding:0}
.site-footer{font-size:.92rem;margin-top:0;color:var(--slate);padding:3rem 0 5rem}
.site-footer h4{font-family:var(--mono)!important;font-size:.76rem;color:var(--plum);margin:0 0 .8rem;font-weight:500;text-transform:uppercase;letter-spacing:.08em}
.site-footer p,.site-footer address{color:var(--slate);margin:0 0 .5rem;font-size:.92rem;line-height:1.55;display:block;max-width:none;width:auto!important;padding:0;font-style:normal}
.site-footer a{color:var(--slate);padding:0;display:inline;background:none;position:static}
.site-footer .legal p{font-size:.82rem;color:var(--muted)}
.cta-band{text-align:left}
.cta-band h2{border:0;padding:0;margin:0 0 .4rem;font-family:var(--serif)!important;font-weight:400;color:#fff;font-size:clamp(1.55rem,2.6vw,2.1rem)}
.cta-band p{color:#DCE3EF;margin:0;font-size:1rem;width:auto!important;max-width:60ch;display:block;padding:0;line-height:1.6}
.cta-band .btn{display:inline-flex}
.btn,.btn:hover{text-decoration:none!important;position:static}
.mobile-bar a{padding:.6rem .4rem}
.side-cta *{box-sizing:border-box}
.side-cta a{font-family:var(--sans)!important;text-decoration:none!important;color:#fff!important;margin:0}
.side-cta span{color:#fff!important}
.mail-dialog *{box-sizing:border-box}
.mail-dialog p,.mail-dialog label,.mail-dialog .md-title{text-align:left;letter-spacing:normal;text-transform:none}
.mail-dialog .md-title{font-family:var(--serif)!important;border:0;padding:0}
.mail-dialog .md-title::before,.mail-dialog .md-title::after{content:none}
.mail-dialog .md-send{font-family:var(--sans)!important}
.legacy-page{min-height:40vh}
@media (max-width:760px){body{padding-bottom:70px}}`;
const MOBILE_EXTRA = `
.m-header *,.m-menu *,.m-footer *,.cta-band *,.mobile-bar *{box-sizing:border-box}
.m-header,.m-menu,.m-footer,.cta-band,.mobile-bar,.m-header *,.m-menu *,.m-footer *,.cta-band *,.mobile-bar *{font-family:var(--sans)!important;font-weight:400;line-height:1.5;text-align:left}
.m-header{background:var(--paper)!important;position:sticky;top:0;z-index:50;transition:none;box-shadow:none}
.m-header img{height:42px!important;width:auto!important;box-shadow:none!important;margin:0}
.m-header a.call{color:#fff!important;background:var(--ink)!important;display:inline-flex;padding:0 .7rem}
.m-menu a,.m-footer a{padding:.6rem 0 .6rem .8rem;background:none;position:static;display:block;color:var(--slate)}
.m-menu>a{padding:.9rem 0;color:var(--ink);font-weight:600}
.m-menu .contact .btn{padding:.7rem 1rem;display:flex;color:#fff!important}
.m-menu li,.m-footer li{margin:0}
.m-footer{margin-top:0;text-align:left;color:var(--slate)}
.m-footer address,.m-footer p{color:var(--slate);margin:0 0 .6rem;font-size:.9rem;line-height:1.5;display:block;max-width:none;width:auto!important;padding:0;font-style:normal}
.m-footer summary{padding:.75rem 0;color:var(--plum);font-family:var(--mono)!important}
.m-footer .legal p{font-size:.78rem;color:var(--muted)}
.cta-band h2{border:0;padding:0;margin:0 0 .4rem;font-family:var(--serif)!important;font-weight:400;color:#fff;font-size:1.35rem}
.cta-band p{color:#DCE3EF;margin:0 0 .9rem;font-size:.95rem;width:auto!important;max-width:none;display:block;padding:0}
.btn,.btn:hover{text-decoration:none!important;position:static}
.mobile-bar a{padding:0 .4rem;color:#fff!important}
.side-cta *{box-sizing:border-box}
.side-cta a{text-decoration:none!important;color:#fff!important;margin:0;padding:0}
.mail-dialog *{box-sizing:border-box}
.mail-dialog p,.mail-dialog label,.mail-dialog .md-title{text-align:left;letter-spacing:normal;text-transform:none}
.mail-dialog .md-title{font-family:var(--serif)!important;border:0;padding:0}
.mail-dialog .md-title::before,.mail-dialog .md-title::after{content:none}
body{padding-bottom:76px;margin:0}
.legacy-page img{max-width:100%;height:auto}
.legacy-page{overflow-x:hidden}`;
fs.writeFileSync(path.join(ROOT, 'assets', 'css', 'shell.css'), build('v2.css', DESKTOP_ALLOW, DESKTOP_EXTRA));
fs.writeFileSync(path.join(ROOT, 'assets', 'css', 'm-shell.css'), build('m.css', MOBILE_ALLOW, MOBILE_EXTRA));
if (require.main === module) console.log('shell.css', fs.statSync(path.join(ROOT, 'assets/css/shell.css')).size, 'm-shell.css', fs.statSync(path.join(ROOT, 'assets/css/m-shell.css')).size);
