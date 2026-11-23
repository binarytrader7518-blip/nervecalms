// IndexNow submitter for nervecalms.vercel.app
// Usage: node scripts/indexnow-submit.mjs            -> submits URLs whose <lastmod> changed since the last run
//        node scripts/indexnow-submit.mjs --all      -> submits every sitemap URL
//        node scripts/indexnow-submit.mjs URL [URL]  -> submits specific canonical URLs
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
const HOST = 'nervecalms.vercel.app';
const SITE = `https://${HOST}`;
const KEY = readFileSync(new URL('../key.txt', import.meta.url), 'utf8').trim();
const KEY_LOCATION = `${SITE}/key.txt`;
const STATE = new URL('./.indexnow-state.json', import.meta.url);
const sitemap = readFileSync(new URL('../sitemap.xml', import.meta.url), 'utf8');
const entries = [...sitemap.matchAll(/<url><loc>(.*?)<\/loc><lastmod>(.*?)<\/lastmod><\/url>/g)].map(m => ({ loc: m[1], lastmod: m[2] }));
const args = process.argv.slice(2);
let urls;
if (args.includes('--all')) urls = entries.map(e => e.loc);
else if (args.length) urls = args.filter(u => u.startsWith(SITE + '/') && entries.some(e => e.loc === u));
else {
  const prev = existsSync(STATE) ? JSON.parse(readFileSync(STATE, 'utf8')) : {};
  urls = entries.filter(e => prev[e.loc] !== e.lastmod).map(e => e.loc);
}
if (!urls.length) { console.log('IndexNow: nothing changed, no submission sent.'); process.exit(0); }
const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls };
for (let attempt = 1; attempt <= 3; attempt++) {
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify(body) });
    console.log(`IndexNow: HTTP ${res.status} for ${urls.length} URL(s)`);
    if (res.status === 200 || res.status === 202) {
      writeFileSync(STATE, JSON.stringify(Object.fromEntries(entries.map(e => [e.loc, e.lastmod])), null, 2));
      console.log('Accepted (received). Acceptance is not the same as indexing.');
      process.exit(0);
    }
    if ([400, 403, 422].includes(res.status)) { console.error('Request rejected - check key.txt is live at', KEY_LOCATION); process.exit(1); }
  } catch (e) { console.error(`Attempt ${attempt} failed:`, e.message); }
  await new Promise(r => setTimeout(r, attempt * 5000));
}
process.exit(1);
