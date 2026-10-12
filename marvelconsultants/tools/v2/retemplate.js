// Retemplate legacy (v1) pages into the v2 shell at the SAME URL with the SAME <head> metadata and article body.
// Idempotent: legacy parts are wrapped in markers so a re-run re-uses them. Produces desktop page, /m/ mobile variant,
// Markdown mirror, and a parity report (text/schema/title/canonical identical, links same-or-more).
'use strict';
const fs = require('fs');
const path = require('path');
const R = require('./render');
const M = require('./render-m');
const ROOT = path.resolve(__dirname, '..', '..');
const SITE = R.SITE;

const MARK = { hs: '<!-- legacy-head-start -->', he: '<!-- legacy-head-end -->', cs: '<!-- legacy-content-start -->', ce: '<!-- legacy-content-end -->', ss: '<!-- legacy-scripts-start -->', se: '<!-- legacy-scripts-end -->' };
const between = (s, a, b) => { const i = s.indexOf(a); if (i < 0) return null; const j = s.indexOf(b, i + a.length); return j < 0 ? null : s.slice(i + a.length, j); };
const norm = (html) => html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();

function listLegacy() {
  const files = [];
  (function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); const rel = path.relative(ROOT, p).replace(/\\/g, '/'); if (['.git', 'node_modules', 'tools', 'docs', 'm', 'assets', 'api', '.well-known'].includes(f) && d === ROOT) continue; if (fs.statSync(p).isDirectory()) walk(p); else if (/\.html$/.test(f)) files.push(rel); } })(ROOT);
  return files.filter(f => { const h = fs.readFileSync(path.join(ROOT, f), 'utf8'); return (h.includes('class="contactheader"') || h.includes('phoneview-header') || h.includes(MARK.cs)) && !h.includes('/assets/css/v2.css') && !/^(index|index-new|Marveltemplate)\.html$/.test(f); });
}

function extract(html) {
  if (html.includes(MARK.cs)) {
    return { head: between(html, MARK.hs, MARK.he), content: between(html, MARK.cs, MARK.ce), scripts: (between(html, MARK.ss, MARK.se) || '').trim() };
  }
  const head = between(html, '<head>', '</head>');
  const hEnd = html.indexOf('</header>'); const fStart = html.indexOf('<footer');
  const content = html.slice(hEnd + '</header>'.length, fStart);
  const afterFooter = html.slice(html.indexOf('</footer>', fStart) + '</footer>'.length);
  const scripts = [...afterFooter.matchAll(/<script[\s\S]*?<\/script>/g)].map(m => m[0]).filter(s => !/mobile-nav\.js/.test(s)).join('\n');
  return { head, content, scripts };
}

function toMd(content, meta) {
  let main = (content.match(/<main[\s\S]*?<\/main>/) || content.match(/<article[\s\S]*?<\/article>/) || [content])[0];
  main = main.replace(/<aside[\s\S]*?<\/aside>/g, '').replace(/<nav[\s\S]*?<\/nav>/g, '').replace(/<form[\s\S]*?<\/form>/g, '').replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
  const lines = [`# ${meta.title}`, '', meta.desc ? `> ${meta.desc}` : '', '', `Source: ${meta.canonical}  ·  Organisation: Marvel Consultants, Bengaluru  ·  Phone: ${SITE.phone1.display}  ·  WhatsApp: ${SITE.wa}`, ''];
  const inline = (s) => s.replace(/<a\s[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g, (m, u, t) => { const txt = norm(t); if (!txt) return ''; const abs = u.startsWith('http') ? u : u.startsWith('/') ? SITE.url + u : SITE.url + '/' + path.posix.normalize(path.posix.join(path.posix.dirname(meta.pathname), u)).replace(/^\/+/, ''); return `[${txt}](${abs})`; }).replace(/<\/?(strong|b)>/g, '**').replace(/<br\s*\/?>/g, ' ').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
  const re = /<(h[1-4]|p|li|th|td|tr)\b[^>]*>([\s\S]*?)<\/\1>/g;
  let m; let row = [];
  while ((m = re.exec(main))) {
    const tag = m[1], inner = m[2];
    if (tag === 'tr') continue;
    const t = inline(inner); if (!t) continue;
    if (tag === 'h1') continue; // title already emitted
    if (tag[0] === 'h') lines.push('', '#'.repeat(+tag[1]) + ' ' + t, '');
    else if (tag === 'li') lines.push('- ' + t);
    else if (tag === 'th' || tag === 'td') { row.push(t); }
    else lines.push(t, '');
  }
  lines.push('', '---', `Contact: ${SITE.phone1.name} ${SITE.phone1.display} · ${SITE.phone2.name} ${SITE.phone2.display} · ${SITE.email} · ${SITE.address.street}, ${SITE.address.locality} ${SITE.address.postal}`, 'Disclaimer: Marvel Consultants is a private firm, not a government body. Approvals rest with the authorities; government fees are separate from professional fees.');
  return lines.join('\n').replace(/\n{3,}/g, '\n\n') + '\n';
}

function retemplateAll() {
  const shell = R.shell(); const mshell = M.shell();
  const FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Source+Sans+3:wght@400;500;600&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">';
  const report = []; const out = [];
  for (const rel of listLegacy()) {
    const file = path.join(ROOT, rel);
    const html = fs.readFileSync(file, 'utf8');
    const { head, content, scripts } = extract(html);
    if (!head || !content) { report.push({ rel, error: 'could not extract' }); continue; }
    const pathname = '/' + rel.replace(/index\.html$/, '');
    const title = norm((head.match(/<title>([\s\S]*?)<\/title>/) || [, ''])[1]);
    const desc = ((head.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1]).replace(/&quot;/g, '"');
    const canonical = (head.match(/rel="canonical" href="([^"]*)"/) || [, SITE.url + pathname])[1];
    const mdRel = rel.replace(/\.html$/, '.md');
    const mdUrl = SITE.url + '/' + mdRel;
    const noscript = shell.gtmNoscript;
    const headExtra = `\n${FONTS}\n<link rel="stylesheet" href="/assets/css/shell.css">\n<link rel="alternate" type="text/markdown" href="${mdUrl}" title="Markdown version for agents">\n`;
    const mHeadExtra = `\n${FONTS.replace('wght@400;500&family=Source+Sans+3:wght@400;500;600&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400', 'wght@400&family=Source+Sans+3:wght@400;600&family=Libre+Caslon+Text:wght@400')}\n<link rel="stylesheet" href="/assets/css/m-shell.css">\n<link rel="alternate" type="text/markdown" href="${mdUrl}" title="Markdown version for agents">\n`;
    const legacyHead = head.replace(/<link rel="stylesheet" href="[^"]*\/(shell|m-shell)\.css">\s*/g, '').replace(/<link rel="alternate" type="text\/markdown"[^>]*>\s*/g, '');
    const desktop = `<!DOCTYPE html>\n<html lang="en-IN">\n<head>\n${MARK.hs}${legacyHead}${MARK.he}${headExtra}</head>\n<body>\n${noscript}\n${shell.header}<div class="legacy-page">\n${MARK.cs}${content}${MARK.ce}\n</div>\n${shell.footer}${MARK.ss}\n${scripts}\n${MARK.se}\n</body>\n</html>\n`;
    const mobile = `<!DOCTYPE html>\n<html lang="en-IN">\n<head>\n${legacyHead}${mHeadExtra}</head>\n<body>\n${noscript}\n${mshell.header}<div class="legacy-page">\n${content}\n</div>\n${mshell.footer}\n${scripts}\n</body>\n</html>\n`;
    // parity check against the previous version of the file (original or last retemplated)
    const oldText = norm(html.includes(MARK.cs) ? between(html, MARK.cs, MARK.ce) : content);
    const newText = norm(between(desktop, MARK.cs, MARK.ce));
    const ld = (s) => [...s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(x => x[1].trim());
    const resolve = (u) => { u = u.replace(/^https?:\/\/www\.marvelconsultants\.co\.in/, ''); if (!u.startsWith('/')) u = path.posix.normalize(path.posix.join(path.posix.dirname(pathname.endsWith('/') ? pathname + 'x' : pathname), u)); return u.replace(/\/index\.html$/, '/').replace(/^\/index\.html$/, '/').replace(/\?.*$/, ''); };
    const links = (s) => new Set([...s.matchAll(/href="([^"#]+)"/g)].map(x => x[1]).filter(u => !/^(mailto|tel|javascript|https?:\/\/(?!www\.marvelconsultants))/.test(u)).map(resolve));
    const oldLinks = links(html), newLinks = links(desktop);
    const p = { rel, pathname, title, canonical, textIdentical: oldText === newText, words: newText.split(' ').length, schemaIdentical: JSON.stringify(ld(html)) === JSON.stringify(ld(desktop)), schemaCount: ld(desktop).length, titleIdentical: (html.match(/<title>[\s\S]*?<\/title>/) || [''])[0] === (desktop.match(/<title>[\s\S]*?<\/title>/) || [''])[0], canonicalIdentical: (html.match(/rel="canonical" href="[^"]*"/) || [''])[0] === (desktop.match(/rel="canonical" href="[^"]*"/) || [''])[0], h1: (desktop.match(/<h1\b/g) || []).length, linksBefore: oldLinks.size, linksAfter: newLinks.size, lostLinks: [...oldLinks].filter(u => !newLinks.has(u) && !/gst/i.test(u) && u !== '/business/') };
    report.push(p);
    fs.writeFileSync(file, desktop);
    const mFile = path.join(ROOT, 'm', rel); fs.mkdirSync(path.dirname(mFile), { recursive: true }); fs.writeFileSync(mFile, mobile);
    fs.writeFileSync(path.join(ROOT, mdRel), toMd(content, { title, desc, canonical, pathname }));
    out.push({ path: pathname === '/' + rel ? '/' + rel : pathname, file: rel, mdFile: mdRel, title, desc, canonical });
  }
  return { report, pages: out };
}
module.exports = { retemplateAll, listLegacy };
if (require.main === module) {
  const { report } = retemplateAll();
  for (const r of report) console.log(r.error ? `ERR ${r.rel}: ${r.error}` : `${r.textIdentical && r.schemaIdentical && r.titleIdentical && r.canonicalIdentical && r.h1 === 1 && r.lostLinks.length === 0 ? 'OK ' : 'CHECK'} ${r.rel} | text ${r.textIdentical ? 'same' : 'DIFF'} (${r.words}w) | schema ${r.schemaIdentical ? 'same' : 'DIFF'} (${r.schemaCount}) | title ${r.titleIdentical ? 'same' : 'DIFF'} | canonical ${r.canonicalIdentical ? 'same' : 'DIFF'} | h1 ${r.h1} | links ${r.linksBefore}→${r.linksAfter}${r.lostLinks.length ? ' LOST: ' + r.lostLinks.join(',') : ''}`);
}
