# Kiran's websites — source + deployment

Six static websites hosted on **Cloudflare Pages** (account: kiranakula1990@gmail.com).

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
