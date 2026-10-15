# Portfolio redesign — review handoff

## Scope
Redesigned the existing `acasso01/Acasso` static portfolio, based on main commit `9181b2842d044dc57bca4fd64a6eeb1c5cb6c8a2`. Kept HTML, CSS, and JavaScript for compatibility with GitHub Pages and Vercel; no framework migration or runtime dependency is needed. Original page addresses, work-example anchors, contact destinations, and résumé download are retained. Fixed the missing Resume1026.pdf footer destination by using the existing Anthony-Casso-Resume.pdf.

## Changes
- Responsive navy/cyan design, connected-discipline hero, mobile menu with Escape support, keyboard focus, skip link, and reduced-motion support.
- Featured Ant Streams and IRON projects, Raspberry Pi infrastructure, and AI learning roadmap.
- Dedicated case studies with architecture, implementation, challenges, current scope, and source/demo links.
- Granite Construction role from the new brief; prior career details and Capella degree from the existing portfolio.
- Honest separation between implemented work and AI learning or future interests.
- Actual IRON web screenshot, Ant Streams repository icon, and original hardware photo. No fabricated app screenshots.
- Page-specific SEO, canonical URLs preserving the existing GitHub Pages origin, Open Graph image, favicon, local fonts, lightweight image previews, and static Vercel build configuration.
- Deployment build includes only linked public files and required assets. Unused homelab screenshots and research files are excluded.

## Research evidence
- Existing live portfolio: https://acasso01.github.io/Acasso/
- Ant Streams: `ios/README.md`, `tvos/README.md`, native SwiftUI views, `Core.swift`, `gateway/server.mjs`, `gateway/README.md`, and Supabase provider-vault source.
- IRON: public `index.html` contains exercise/program exploration, custom routines, workout logging, progress, and browser persistence. Live illustrated prototype reviewed at https://iron-training-illustrated.vercel.app.
- Ant Streams native app source is present for iOS and tvOS. These are development builds; device playback and App Store distribution were not verified.
- Native IRON source was not found in the supplied public repository. Its reported iPhone app is not described as independently verified.
- Vercel returned four existing projects: rigatoni-stream, temporary-rushing-antimony-dnqclhl, iron-training-expanded, and iron-training-illustrated. None was identified as the Acasso portfolio. The verified existing portfolio is on GitHub Pages.

## Validation
`npm install --ignore-scripts --no-audit --no-fund`, `npm run lint`, and `npm run build`.
The checks validate local destinations and anchors, unique IDs, one h1 per page, descriptions/titles, image alternatives, JavaScript syntax, and common secret patterns. There is no TypeScript in the retained stack.
Browser checks cover desktop (1280px) and mobile (469px) renderings, project navigation, menu open/close and Escape handling, image loading, and horizontal overflow. The viewport override did not change reported dimensions, so an exact tablet/device matrix is not claimed.
Public project/GitHub/consulting links returned HTTP 200. LinkedIn returned HTTP 999 to automated requests; the URL is retained from the existing contact page, but profile accessibility was not independently confirmed.
No account credentials or provider playback was used. Image review found existing professional screenshots already redacted; new visual assets contain no private configuration. This is a targeted check, not an independent security audit.

## Missing information before production
1. Career dates confirmed: Granite starts October 2026; Splendido ends October 2026. At Anthony’s request, the role is displayed without an incoming label, using month-level dates.
2. GCU degree and enrollment confirmed by Anthony: Master of Science in Artificial Intelligence, beginning October 2026. Expected completion date is optional and not stated.
3. Whether ASU Electrical Engineering study, Network+ preparation, and ongoing consulting are still current.
4. Updated résumé reflecting Granite Construction and education. Current downloadable résumé is preserved as supplied.
5. Ant Streams iPhone Home, Movies, player controls, and Apple TV Home/guide screenshots, with provider details removed.
6. IRON native iPhone repository or screenshots and distribution status, if it should be featured as native software.
7. Any completed AI labs, with code and evaluation results, when available.

## Approval and publication
Review the preview and the `redesign/enterprise-ai-portfolio` branch. Confirm the missing career/education details and request any revisions. Production publication requires explicit approval. After approval, merge the reviewed branch to the repository's publishing branch (currently main), verify the existing GitHub Pages deployment, and configure a production Vercel deployment/domain only if desired. Do not change application repositories or their deployments.

## Local development
Run `npm run dev` and open the local URL. Run `npm run build` for a deployable `dist/` directory. The package has no third-party runtime dependencies. Python 3 and Node.js are required for checks/build scripts; Vercel uses the supplied configuration.

## App screenshots added
Anthony supplied actual iPhone screens for Ant Streams (Movies, Live TV, navigation) and IRON (Home, exercise library, detail, programs). Movie titles/artwork in the Movies screenshot are redacted before publication. Original unredacted movie assets are excluded from the repository and deployment. The screenshots document the actual iPhone UI without extending unverified native architecture claims.
