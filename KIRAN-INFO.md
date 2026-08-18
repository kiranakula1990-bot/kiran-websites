# Kiran — Cloudflare Migration Info

- **Email:** kiranakula1990@gmail.com (used for Cloudflare registration)
- **Temporary password:** `kiranakula1990!` — handover credential; Kiran should change it and enable 2FA after first login.

## Projects in this folder (pulled from S3, profile `glint-s3`)

| Folder | S3 bucket |
|---|---|
| marvelconsultants | s3://marvelsolutions |
| evochem | s3://evochem |

Evochem is an Angular 18 app — the deployed build is in the folder root, and the full source is in `evochem-source/` (moved out of the deploy folder) (run `npm install` there to restore dependencies; `node_modules` was excluded). The other five projects are plain static HTML, so the deployed files ARE the source.
| hygex | s3://hygex |
| mavrick | s3://mavericksolutionskiran |
| ennwin | s3://ennwin |
| efcs | s3://efcs |

Goal: move these sites to Kiran's Cloudflare account so the client gets access there instead of S3.
