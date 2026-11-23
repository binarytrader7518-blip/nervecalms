# NerveCalm website (nervecalms.vercel.app)

A static, multi-page website with no build step. Deploy the folder as-is to Vercel (Framework preset: **Other**).

- `vercel.json`: `/order` → `order.html` rewrite; `/go/1`, `/go/3` and `/go/6` send a server-side 307 to the affiliate URL. Unknown package IDs return 404, so there is no open redirect.
- All site CTAs → `/order?package=N`. The order page's BUY NOW buttons link directly to the affiliate URL.
- `key.txt` is the IndexNow key file. `scripts/indexnow-submit.mjs` and `.github/workflows/indexnow.yml` handle automatic IndexNow pings.
- Reports: `SEO-REPORT.md`, `ALT-TEXT-AUDIT-REPORT.md`.
