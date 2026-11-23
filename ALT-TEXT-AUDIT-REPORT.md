# ALT-TEXT-AUDIT-REPORT — NerveCalm (nervecalms.vercel.app)

Audit date: 2026-11-23  
Method: every built HTML file was parsed for `<img>` elements (the site uses no `<picture>`/`<source>` elements and no JavaScript-injected images). Each image was checked for a present, non-generic alt attribute and for a genuine WebP file on disk. A second scan ran after the final build, against the pages served by a local web server that mirrors the Vercel routing. The live Vercel deployment could not be scanned from this environment, so re-run a crawl after deploying.

## Summary

| Metric | Result |
|---|---|
| Pages audited | 29 |
| Image elements checked | 184 |
| Images corrected in the final audit | 0 (every image had descriptive alt text from the build step) |
| Images with suitable descriptive alt text | 184 |
| Decorative images using alt="" | 0 (decorative icons are inline SVGs marked aria-hidden="true", not `<img>`) |
| Missing / generic / keyword-stuffed alt | 0 |
| Raster images that are not genuine WebP | 0 |
| Second verification scan | Completed, 0 issues |

Remaining issue: the live deployment has not been scanned yet. After deploying, re-run a crawl (for example, the Bing Webmaster Tools Site Scan) to confirm the results.

## Page-by-page list

### https://nervecalms.vercel.app/404.html

| Image | Alt text |
|---|---|
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/affiliate-disclosure.html

| Image | Alt text |
|---|---|
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/alternatives.html

| Image | Alt text |
|---|---|
| `/assets/img/nervecalm-3-bottles-package.webp` | Three NerveCalm bottles, the 90-day package |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/benefits.html

| Image | Alt text |
|---|---|
| `/assets/img/nervecalm-calm-mind-scene.webp` | NerveCalm bottle with passion flower, poppy and a glowing nerve illustration |
| `/assets/img/focus-nerve-comfort.webp` | Illustration for the NerveCalm Nerve Comfort benefit |
| `/assets/img/focus-calm-relaxation.webp` | Illustration for the NerveCalm Calm & Relaxation benefit |
| `/assets/img/focus-restful-sleep.webp` | Illustration for the NerveCalm Restful Sleep benefit |
| `/assets/img/focus-mobility-daily-movement.webp` | Illustration for the NerveCalm Mobility & Movement benefit |
| `/assets/img/nervecalm-3-bottles-package.webp` | Three NerveCalm bottles, the 90-day package |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/blog/california-poppy-and-marshmallow-root.html

| Image | Alt text |
|---|---|
| `/assets/img/blog-poppy-marshmallow-root.webp` | Orange California poppy flower and dried marshmallow root pieces |
| `/assets/img/blog-peripheral-nerves-guide.webp` | Glowing illustration of a brain and nerve network on a teal background |
| `/assets/img/blog-corydalis-yanhusuo-research.webp` | NerveCalm bottle beside a close-up of supplement capsules |
| `/assets/img/blog-daily-habits-nerve-comfort.webp` | Fresh green leaves beside a purple passion flower blossom |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/blog/corydalis-yanhusuo-research.html

| Image | Alt text |
|---|---|
| `/assets/img/blog-corydalis-yanhusuo-research.webp` | NerveCalm bottle beside a close-up of supplement capsules |
| `/assets/img/blog-peripheral-nerves-guide.webp` | Glowing illustration of a brain and nerve network on a teal background |
| `/assets/img/blog-poppy-marshmallow-root.webp` | Orange California poppy flower and dried marshmallow root pieces |
| `/assets/img/blog-daily-habits-nerve-comfort.webp` | Fresh green leaves beside a purple passion flower blossom |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/blog/daily-habits-for-nerve-comfort.html

| Image | Alt text |
|---|---|
| `/assets/img/blog-daily-habits-nerve-comfort.webp` | Fresh green leaves beside a purple passion flower blossom |
| `/assets/img/blog-peripheral-nerves-guide.webp` | Glowing illustration of a brain and nerve network on a teal background |
| `/assets/img/blog-corydalis-yanhusuo-research.webp` | NerveCalm bottle beside a close-up of supplement capsules |
| `/assets/img/blog-poppy-marshmallow-root.webp` | Orange California poppy flower and dried marshmallow root pieces |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/blog/herbal-supplements-and-medications.html

| Image | Alt text |
|---|---|
| `/assets/img/blog-supplements-and-medications.webp` | NerveCalm bottle and capsules on a dark blue background |
| `/assets/img/blog-peripheral-nerves-guide.webp` | Glowing illustration of a brain and nerve network on a teal background |
| `/assets/img/blog-corydalis-yanhusuo-research.webp` | NerveCalm bottle beside a close-up of supplement capsules |
| `/assets/img/blog-poppy-marshmallow-root.webp` | Orange California poppy flower and dried marshmallow root pieces |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/blog/how-peripheral-nerves-work.html

| Image | Alt text |
|---|---|
| `/assets/img/blog-peripheral-nerves-guide.webp` | Glowing illustration of a brain and nerve network on a teal background |
| `/assets/img/blog-corydalis-yanhusuo-research.webp` | NerveCalm bottle beside a close-up of supplement capsules |
| `/assets/img/blog-poppy-marshmallow-root.webp` | Orange California poppy flower and dried marshmallow root pieces |
| `/assets/img/blog-daily-habits-nerve-comfort.webp` | Fresh green leaves beside a purple passion flower blossom |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/blog/how-to-read-a-supplement-label.html

| Image | Alt text |
|---|---|
| `/assets/img/blog-reading-supplement-labels.webp` | Close-up of the NerveCalm bottle label showing its listed ingredients |
| `/assets/img/blog-peripheral-nerves-guide.webp` | Glowing illustration of a brain and nerve network on a teal background |
| `/assets/img/blog-corydalis-yanhusuo-research.webp` | NerveCalm bottle beside a close-up of supplement capsules |
| `/assets/img/blog-poppy-marshmallow-root.webp` | Orange California poppy flower and dried marshmallow root pieces |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/blog/index.html

| Image | Alt text |
|---|---|
| `/assets/img/blog-peripheral-nerves-guide.webp` | Glowing illustration of a brain and nerve network on a teal background |
| `/assets/img/blog-corydalis-yanhusuo-research.webp` | NerveCalm bottle beside a close-up of supplement capsules |
| `/assets/img/blog-poppy-marshmallow-root.webp` | Orange California poppy flower and dried marshmallow root pieces |
| `/assets/img/blog-daily-habits-nerve-comfort.webp` | Fresh green leaves beside a purple passion flower blossom |
| `/assets/img/blog-supplements-and-medications.webp` | NerveCalm bottle and capsules on a dark blue background |
| `/assets/img/blog-reading-supplement-labels.webp` | Close-up of the NerveCalm bottle label showing its listed ingredients |
| `/assets/img/nervecalm-3-bottles-package.webp` | Three NerveCalm bottles, the 90-day package |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/disclaimer.html

| Image | Alt text |
|---|---|
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/faq.html

| Image | Alt text |
|---|---|
| `/assets/img/nervecalm-bottle.webp` | NerveCalm capsule bottle |
| `/assets/img/nervecalm-3-bottles-package.webp` | Three NerveCalm bottles, the 90-day package |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/focus-areas/calm-relaxation.html

| Image | Alt text |
|---|---|
| `/assets/img/focus-calm-relaxation.webp` | Calm & Relaxation illustration with NerveCalm |
| `/assets/img/nervecalm-bottle.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-3-bottles-package.webp` | Three NerveCalm bottles, the 90-day package |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/focus-areas/index.html

| Image | Alt text |
|---|---|
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles arranged together |
| `/assets/img/focus-nerve-comfort.webp` | Nerve Comfort focus area illustration for NerveCalm |
| `/assets/img/focus-calm-relaxation.webp` | Calm & Relaxation focus area illustration for NerveCalm |
| `/assets/img/focus-restful-sleep.webp` | Restful Sleep focus area illustration for NerveCalm |
| `/assets/img/focus-mobility-daily-movement.webp` | Mobility & Movement focus area illustration for NerveCalm |
| `/assets/img/nervecalm-3-bottles-package.webp` | Three NerveCalm bottles, the 90-day package |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/focus-areas/mobility-daily-movement.html

| Image | Alt text |
|---|---|
| `/assets/img/focus-mobility-daily-movement.webp` | Mobility & Movement illustration with NerveCalm |
| `/assets/img/nervecalm-bottle.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-3-bottles-package.webp` | Three NerveCalm bottles, the 90-day package |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/focus-areas/nerve-comfort.html

| Image | Alt text |
|---|---|
| `/assets/img/focus-nerve-comfort.webp` | Nerve Comfort illustration with NerveCalm |
| `/assets/img/nervecalm-bottle.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-3-bottles-package.webp` | Three NerveCalm bottles, the 90-day package |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/focus-areas/restful-sleep.html

| Image | Alt text |
|---|---|
| `/assets/img/focus-restful-sleep.webp` | Restful Sleep illustration with NerveCalm |
| `/assets/img/nervecalm-bottle.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-3-bottles-package.webp` | Three NerveCalm bottles, the 90-day package |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/how-it-works.html

| Image | Alt text |
|---|---|
| `/assets/img/man-holding-nervecalm-bottle.webp` | Man in a white coat holding a NerveCalm bottle and pointing to it |
| `/assets/img/nervecalm-calm-mind-scene.webp` | NerveCalm bottle in front of a glowing brain illustration with botanicals |
| `/assets/img/nervecalm-3-bottles-package.webp` | Three NerveCalm bottles, the 90-day package |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/

| Image | Alt text |
|---|---|
| `/assets/img/california-poppy-ingredient.webp` | California poppy flower, one of NerveCalm's ingredients |
| `/assets/img/marshmallow-root-ingredient.webp` | Dried marshmallow root pieces, a NerveCalm ingredient |
| `/assets/img/passion-flower-botanical.webp` | Passion flower blossom, listed on the NerveCalm label |
| `/assets/img/nervecalm-capsules-closeup.webp` | Close-up of cream-colored supplement capsules |
| `/assets/img/nervecalm-bottle.webp` | NerveCalm Nerve Calming Formula bottle, 60 capsules |
| `/assets/img/nervecalm-botanical-scene.webp` | NerveCalm bottle on a stone surrounded by passion flower, California poppy and marshmallow root |
| `/assets/img/focus-nerve-comfort.webp` | Nerve Comfort focus area illustration for NerveCalm |
| `/assets/img/focus-calm-relaxation.webp` | Calm and Relaxation focus area illustration for NerveCalm |
| `/assets/img/focus-restful-sleep.webp` | Restful Sleep focus area illustration for NerveCalm |
| `/assets/img/focus-mobility-daily-movement.webp` | Mobility and Movement focus area illustration for NerveCalm |
| `/assets/img/man-holding-nervecalm-bottle.webp` | Smiling man in a white coat holding a NerveCalm bottle |
| `/assets/img/nervecalm-1-bottle-package.webp` | NerveCalm 1 bottle package, 30-day supply |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6 bottles package, 180-day supply |
| `/assets/img/nervecalm-3-bottles-package.webp` | NerveCalm 3 bottles package, 90-day supply |
| `/assets/img/blog-peripheral-nerves-guide.webp` | Glowing illustration of a brain and nerve network on a teal background |
| `/assets/img/blog-corydalis-yanhusuo-research.webp` | NerveCalm bottle beside a close-up of supplement capsules |
| `/assets/img/blog-poppy-marshmallow-root.webp` | Orange California poppy flower and dried marshmallow root pieces |
| `/assets/img/blog-daily-habits-nerve-comfort.webp` | Fresh green leaves beside a purple passion flower blossom |
| `/assets/img/blog-supplements-and-medications.webp` | NerveCalm bottle and capsules on a dark blue background |
| `/assets/img/blog-reading-supplement-labels.webp` | Close-up of the NerveCalm bottle label showing its listed ingredients |
| `/assets/img/nervecalm-3-bottles-package.webp` | Three NerveCalm bottles, the 90-day package |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/order.html

| Image | Alt text |
|---|---|
| `/assets/img/nervecalm-1-bottle-package.webp` | NerveCalm 1 bottle package |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6 bottles package |
| `/assets/img/nervecalm-3-bottles-package.webp` | NerveCalm 3 bottles package |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/price.html

| Image | Alt text |
|---|---|
| `/assets/img/nervecalm-1-bottle-package.webp` | NerveCalm 1 bottle package, 30-day supply |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6 bottles package, 180-day supply |
| `/assets/img/nervecalm-3-bottles-package.webp` | NerveCalm 3 bottles package, 90-day supply |
| `/assets/img/nervecalm-3-bottles-package.webp` | Three NerveCalm bottles, the 90-day package |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/privacy-policy.html

| Image | Alt text |
|---|---|
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/product-overview.html

| Image | Alt text |
|---|---|
| `/assets/img/nervecalm-bottle.webp` | Front of the NerveCalm bottle showing the Nerve Calming Formula label |
| `/assets/img/nervecalm-botanical-scene.webp` | NerveCalm bottle displayed with passion flower, California poppy and marshmallow root |
| `/assets/img/nervecalm-3-bottles-package.webp` | Three NerveCalm bottles, the 90-day package |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/product-review.html

| Image | Alt text |
|---|---|
| `/assets/img/nervecalm-3-bottles-package.webp` | Three NerveCalm bottles, the 90-day package |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/pros-and-cons.html

| Image | Alt text |
|---|---|
| `/assets/img/nervecalm-3-bottles-package.webp` | Three NerveCalm bottles, the 90-day package |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/reviews.html

| Image | Alt text |
|---|---|
| `/assets/img/nervecalm-reviews-banner.webp` | NerveCalm bottle beside a botanical scene |
| `/assets/img/nervecalm-3-bottles-package.webp` | Three NerveCalm bottles, the 90-day package |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/terms-and-conditions.html

| Image | Alt text |
|---|---|
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

### https://nervecalms.vercel.app/where-to-buy.html

| Image | Alt text |
|---|---|
| `/assets/img/nervecalm-3-bottles-package.webp` | Three NerveCalm bottles, the 90-day package |
| `/assets/img/nervecalm-6-bottles-package.webp` | Six NerveCalm bottles in the 180-day package |
| `/assets/img/nervecalm-bottle-sm.webp` | NerveCalm bottle |
| `/assets/img/nervecalm-6-bottles-package.webp` | NerveCalm 6-bottle package, 180-day supply |

## Final verification status

PASS. All meaningful images have accurate, descriptive alt text, and all raster images are genuine WebP. Live-deployment re-scan is still pending.