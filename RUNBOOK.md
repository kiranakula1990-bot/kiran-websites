# Cloudflare migration runbook — Kiran's sites

## Current state (as of 2026-08-18)
| Site | Folder | Domains | Old CloudFront | Old S3 | DNS today |
|---|---|---|---|---|---|
| Marvel Consultants | marvelconsultants | marvelconsultants.co.in, www | E3D4AFVR0YD0QI (d2lkyesipuzn4n) | s3://marvelsolutions | GoDaddy (ns31/32.domaincontrol.com) |
| Evochem (Angular 18) | evochem (+ source in evochem-source/) | evochem.co.in, www | E2DNVQCMH1PAOM (d2jpscc7g120r4) | s3://evochem | **Route53 in Glint AWS acct** (zone evochem.co.in) |
| Hygex | hygex | hygex.in, www | E2VO86DJLG8W1F (d1ku0ys1d9n6yf) | s3://hygex | GoDaddy (ns13/14) |
| Mavrick | mavrick | mavrick.in, www | E6XJMQ7ZDJ29C (d1mi2ilscgph5n) | s3://mavericksolutionskiran | GoDaddy (ns13/14) |
| Ennwin | ennwin | ennwin.in, www | E1SVTQVRA9F2Z3 (d3rgk8azjtnfp) | s3://ennwin | GoDaddy (ns13/14) |
| EFCS | efcs | efcs.co.in, www | E3006SGPPAH4YX (dvk2thrvnct6l) | s3://efcs | GoDaddy (ns05/06) |

All folders are within Pages limits (max 172 MB / 324 files; no file > 25 MB).
`evochem/_redirects` added (`/* /index.html 200`) for Angular client-side routing.

## Step 1 — Auth (manual)
`npx wrangler login` → approve in browser as kiranakula1990@gmail.com.
The account email must be **verified** in the Cloudflare dashboard first, otherwise
`pages project create` fails.

## Step 2 — Deploy (from this folder)
`./deploy-all.sh`            # all six
`./deploy-all.sh efcs`       # one site
Each site gets a `<project>.pages.dev` preview URL — verify each before DNS.

## Step 3 — Custom domains
Option A (recommended, full handover): add each zone to Kiran's Cloudflare account
(Dashboard → Add a site → Free plan), then change nameservers at GoDaddy to the two
Cloudflare NS shown. For evochem.co.in the NS change is done at the registrar, and
the Route53 zone can be deleted afterwards. Then in Pages → project → Custom domains
add `example.in` and `www.example.in` (Cloudflare creates the CNAMEs automatically).

Option B (minimal): keep DNS at GoDaddy, add custom domain in Pages, and create at
GoDaddy: `www` CNAME → `<project>.pages.dev`; apex → CNAME/forward as GoDaddy allows.

## Step 4 — Verify
`curl -sI https://www.<domain>/ | head -5` — expect `server: cloudflare`.
Check a deep link (e.g. /contact.html, or an Angular route on evochem) and the 404 page.

## Step 5 — Decommission (only after ~1 week clean)
Disable then delete the CloudFront distributions above; empty + delete the S3 buckets;
delete the ACM certs and (for evochem) the Route53 zone. Keep this folder as a backup.
