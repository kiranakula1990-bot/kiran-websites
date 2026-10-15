# Kiran's websites — source + deployment

Six static websites hosted on **Cloudflare Pages** (account: kiranakula1990@gmail.com).
Since 2026-10-12 all six domains use Cloudflare nameservers (DNS, email records and redirects live in
the Cloudflare zones), so **a push to `main` is the only deploy step** — nothing goes to AWS any more.

| Folder | Live domain | Pages project |
|---|---|---|
| `marvelconsultants/` | marvelconsultants.co.in | marvelconsultants.pages.dev |
| `evochem/` (built output) + `evochem-source/` (Angular 18 source) | evochem.co.in | evochem.pages.dev |
| `hygex/` | hygex.in | hygex.pages.dev |
| `mavrick/` | mavrick.in | mavrick.pages.dev |
| `ennwin/` | ennwin.in | ennwin.pages.dev |
| `efcs/` | efcs.co.in | efcs.pages.dev |

## How to update a site

1. Edit the files in the site's folder (for Evochem edit `evochem-source/src/...`).
2. Commit and push to `main`:
   ```
   git add -A
   git commit -m "efcs: update contact page"
   git push
   ```
3. GitHub Actions (`.github/workflows/deploy.yml`) detects which folder(s) changed and deploys
   only those to their Cloudflare Pages project. Watch progress under the repo's **Actions** tab
   (about 30–60 s; Evochem ~3 min because it builds first).
4. Verify at `https://<project>.pages.dev` and the live domain.

Manual redeploy of a site without a code change: Actions → *Deploy sites to Cloudflare Pages* →
**Run workflow** → type the folder name (or `all`).

Rollback: Cloudflare dashboard → Workers & Pages → project → Deployments → "Rollback to this deployment".

## Files that keep the URLs identical to the old AWS hosting (don't delete)
- `<site>/_worker.js` — copy of `_shared/s3-parity-worker.js` (Evochem has its own): serves `/page.html`
  with 200 (Pages would 308 it to `/page`), returns 404 + home page for missing URLs, and passes
  304/5xx through. After editing a worker, purge the zone cache in Cloudflare.
- `<site>/404.html` — only switches Pages out of SPA mode; the worker hides it.
- `evochem/` is **build output**: CI rebuilds it from `evochem-source/` on every Evochem deploy
  (keeping `_worker.js` and `404.html`). Edit `evochem-source/`, never `evochem/`.
- Evochem URLs (since 2026-10-15) follow the handover pattern, all with a trailing slash:
  `/products/<category>/`, `/products/<product>/`, `/industries/<x>/`, `/solutions/<x>/`,
  `/case-studies/<x>/`, `/resources/<x>/` (articles). Product/category slugs live in
  `public/assets/data/evochem-data.json`; page copy in `src/app/content/`. `npm run build` regenerates
  `routes.txt`, the sitemap, `public/redirects.json` (old URL → new, used by `evochem/_worker.js` for one-hop
  301s) and `docs/url-register.csv`. Never change a published slug without adding a redirect.

## Marvel Consultants: adding a new blog post
Start from the current template, never from an older copy of a page (old copies bring back the old
header/menu, broken characters and the old CSS that pushes images off the screen).
1. Copy `marvelconsultants/blog/bbmp-commencement-certificate-occupancy-certificate-bangalore-guide/`
   to `marvelconsultants/blog/<new-slug>/` (folder + `index.html`).
2. Change only what sits between `<!-- legacy-head-start -->` / `<!-- legacy-head-end -->` (title, description,
   canonical, og tags, schema) and between `<!-- legacy-content-start -->` / `<!-- legacy-content-end -->` (the post).
   Leave the header, footer and the lines that say `v1-theme-off` as they are.
3. Images: `<figure class="blog-hero"><img src="/assets/image/<file>.webp" alt="..." width="<real width>"
   height="<real height>"></figure>`. Use the image's real pixel size; the CSS fits it to the column.
4. Add the post to `blog.html` (card), `sitemap.xml` and `llms.txt`, and update the markdown copy
   `blog/<new-slug>/index.md` (plus the `text/markdown` link in the head).
5. Open the page at phone width before pushing: nothing should scroll sideways.

## Contact forms (leads)
All forms post to the `glint-email-relay` Lambda (Glint AWS account), not the old backend.
Evochem's form posts to its own `/api/contact` (in `evochem/_worker.js`), which relays to the Lambda server-side.
Hygex/Mavrick use `assets/js/lead-form.js` (source: `_shared/lead-form.js`) → info@ennwin.in.
A new recipient address must be added to the Lambda's allowlist first.

## Local deploy (fallback, no GitHub needed)
```
npx wrangler login            # once, as kiranakula1990@gmail.com
./deploy-all.sh efcs          # or ./deploy-all.sh for all six
```

## One-time setup for the automation (repo secrets)
Settings → Secrets and variables → Actions → New repository secret:
- `CLOUDFLARE_ACCOUNT_ID` = `dfcdc6194e8371d64e048f66d62b6557`
- `CLOUDFLARE_API_TOKEN` = token created at dash.cloudflare.com → My Profile → API Tokens →
  Create Token → template **"Cloudflare Pages — Edit"** (or custom: Account → Cloudflare Pages → Edit),
  scoped to this account.

See `RUNBOOK.md` for the migration/DNS history and `KIRAN-INFO.md` for account notes.
