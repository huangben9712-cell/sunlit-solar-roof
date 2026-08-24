# Hero Video Performance and SEO Audit

## Homepage Browser Measurement

On the current local preview, the homepage Hero poster image was requested at approximately 78 ms. The autoplay Hero video request began at approximately 114 ms and transferred the full 5,986,316-byte MP4. This demonstrates an important distinction: `preload="none"` does not guarantee that an autoplay video waits until later. Once the browser decides autoplay can begin, it may still fetch the full file almost immediately.

The local preview completed first contentful paint at approximately 308 ms and the full page load event at approximately 409 ms because the test environment has a fast nearby connection. These timings must not be treated as representative of an overseas buyer on mobile or a slower network; the 5.8 MB video payload remains the significant real-world first-visit cost.

The homepage has a useful fallback poster and a text-rich H1/paragraph structure. Its `video` element carries `autoplay`, `muted`, `loop`, `playsinline` and `preload="none"`, but no explicit video title, caption track or structured video metadata.

## Lumina Slate Browser Measurement

On the current local preview, the Lumina Slate poster image began at approximately 60 ms and the autoplay video request began at approximately 91 ms. The video transferred the full 3,819,051-byte MP4. First contentful paint occurred at approximately 212 ms and the page load event at approximately 505 ms in this local high-speed test environment.

Like the homepage, Lumina Slate uses `autoplay`, `muted`, `loop`, `playsinline`, `preload="none"` and a meaningful poster fallback. It also has a prominent H1, product-positioning text and product specifications in regular HTML. These page elements, not the background video pixels, are the content search engines can reliably parse.

## Google Guidance Relevant to Background Hero Video

Google can discover videos embedded with a standard HTML `<video>` element, but video-result eligibility is a separate concern from normal text-page indexing. Google states that a video result needs an indexed watch page where video viewing is the page's main purpose, a visible embedded video and a stable, valid thumbnail. It explicitly characterizes a product page with a complementary product video as a non-watch page; such a page can still rank as a normal text result and can be eligible for an image result with a video badge.

This distinction fits Sunlit's two silent looping Hero backgrounds: the homepage and Lumina Slate page should be optimized as commercial text pages, not as video watch pages. Adding `VideoObject` only for a decorative Hero loop is not a priority and should not be treated as a replacement for page title, H1, descriptive copy, internal links and text content.

Google recommends the `poster` attribute as one way to provide a preferred video thumbnail. Both Sunlit Hero videos have stable local poster URLs. `alt` is not a valid attribute for the HTML `<video>` element; the appropriate semantic alternatives are: a meaningful poster/fallback image, visible HTML heading and text, and—where a video is meant to rank as standalone footage—a unique video title, description, thumbnail, upload date and `VideoObject` markup on a dedicated watch page.

Sources:
- Google Search Central, Video SEO best practices: https://developers.google.com/search/docs/appearance/video
- Google Search Central, VideoObject structured data: https://developers.google.com/search/docs/appearance/structured-data/video

## Assessment Summary

| Hero | File | Codec / dimensions | Duration | File size | Current loading behaviour |
|---|---|---:|---:|---:|---|
| Homepage | `/videos/hero/homepage-hero.mp4` | H.264, 1920×1108, 30 fps | 18.93 s | 5.99 MB | Poster starts at ~78 ms; autoplay video request starts at ~114 ms and fetches the full MP4 in the local test |
| Lumina Slate | `/videos/hero/lumina-slate-hero.mp4` | H.264, 1920×1108, 30 fps | 16.47 s | 3.82 MB | Poster starts at ~60 ms; autoplay video request starts at ~91 ms and fetches the full MP4 in the local test |

At a theoretical 5 Mbps downstream connection, the video bytes alone need roughly 9.57 seconds for the homepage and 6.11 seconds for Lumina Slate, before request overhead and competition from other assets. At 10 Mbps, the corresponding figures are roughly 4.78 seconds and 3.05 seconds. These are transfer-time illustrations, not measured field performance.

## SEO Conclusion

The Hero videos do not need an `alt` attribute. HTML `alt` belongs to `<img>`, not `<video>`. The current implementation has a stable `poster`, an image fallback with an alt value, and prominent visible H1 and descriptive copy. Therefore the normal web pages remain understandable to Google as commercial text pages even if the moving background is ignored.

The Hero loops should not be marked up as `VideoObject` solely to chase video search features. Google distinguishes dedicated video watch pages from commercial/product pages where a video is complementary. The Sunlit home and product Hero loops are complementary background visuals, so the priority is text-page SEO and user experience rather than video-result eligibility.

## Recommended Changes, In Priority Order

### P0 — Do before production launch

1. **Do not rely on `preload="none"` to defer an autoplay Hero.** The browser audit shows that autoplay still causes immediate full-file download. Load the static poster first and defer assigning the video source until after the initial page has rendered, using `requestIdleCallback` (with a timeout fallback) or a short delayed viewport trigger.
2. **Respect connection and motion preferences.** Do not load the Hero video when `prefers-reduced-motion: reduce` is active, when `navigator.connection.saveData` is true, or on `slow-2g` / `2g` connections. In those cases the poster remains the permanent Hero visual.
3. **Prepare a smaller mobile video variant.** Retain the existing 1920 px desktop file only for larger screens, and create a 720p/1280p low-bitrate mobile version. Use responsive `<source media>` declarations or choose the source in the deferred loader.
4. **Configure long-lived cache headers on the production host/CDN** for versioned static video files. The local Astro development server returned `Cache-Control: no-cache`; this is not a production diagnosis, but production should deliver immutable media with an appropriate cache policy.

### P1 — Improve semantic and accessibility treatment

1. Treat a silent looping Hero as decorative motion: add `aria-hidden="true"` to the background video and rely on the page H1 and visible text for the meaningful announcement.
2. Keep the poster path stable and keep the fallback image description aligned with the real image. The existing homepage and Lumina posters already satisfy this direction.
3. For controlled installation, aerial and impact-test videos elsewhere on the site, retain meaningful visible headings and short descriptions. Add captions/transcripts when a video contains spoken instructions or unique verbal information.
4. Create a dedicated video/watch page and `VideoObject` markup only if Sunlit chooses to target Google video results with a specific installation walkthrough, test or project film. A separate watch page needs a unique name, description, upload date, stable thumbnail and video URL; it should not be bolted onto a decorative Hero loop.

## References

1. Google Search Central. *Video SEO best practices*. https://developers.google.com/search/docs/appearance/video
2. Google Search Central. *Video (VideoObject, Clip, BroadcastEvent) structured data*. https://developers.google.com/search/docs/appearance/structured-data/video

## Optimization Verification — Homepage

After the deferred-loader implementation, the homepage poster was requested as an image at approximately 189 ms. The Hero video source was not present initially and the full desktop video request did not begin until approximately 1,802 ms. The prior version began the corresponding video request at approximately 114 ms. The implementation therefore moved the 5.99 MB video request approximately 1.69 seconds later, after the initial paint path, while preserving the poster as an immediate visual.

## Optimization Verification — Lumina Slate

After the deferred-loader implementation, the Lumina poster began as an image at approximately 48 ms. Its desktop video request began at approximately 1,597 ms, compared with approximately 91 ms in the prior implementation. This moved the 3.82 MB video request approximately 1.51 seconds out of the initial paint path. Desktop validation selected the intended `lumina-slate-hero.mp4` source; the mobile selection logic chooses the 720p asset below a 768 px viewport.

## Mobile Assets Generated

| Asset | Dimensions | Size | Reduction versus desktop source |
|---|---:|---:|---:|
| `homepage-hero-mobile.mp4` | 1248×720 | 2.30 MB | 61.5% smaller |
| `lumina-slate-hero-mobile.mp4` | 1248×720 | 1.46 MB | 61.7% smaller |
