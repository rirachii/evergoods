# Dex connected disclosures · 2026-09-14

Updates only the Dex privacy and support route content while preserving the
shared legal-page layout. The source contract is the sibling `dex-apps`
checkout's `docs/connected-privacy.md`, connected-family plan and
`Services/DexCommunity/CONTRACT.md`, verified on September 14, 2026.

The previous public pages described six entirely local apps and no collected
data. The updated pages cover all seven apps; local collection without an
account; optional Apple sign-in, app-specific usernames, private sync and
separate metadata-free photo copies; explicit catalogue-art sharing; mutual
Friends; private saves; reporting, blocking and independent appeals; export,
account erasure and separate provider revocation retries. Originals and map
coordinates stay on device. Availability wording explicitly covers test builds
and older local-only versions without announcing a connected public launch.
The unverified two-business-day support response promise is removed.

Public routes: `/dex/privacy` and `/dex/support` on
`https://www.evergoodsholdings.com`. Deployment uses the existing Vercel project
`evergoods` and its checked-in `vercel.json` (`pnpm build:client`, `dist/spa`, SPA
rewrite). This disclosure release does not activate any Dex backend feature,
change App Store privacy questionnaires, or submit an iOS app for review.

## Validation

- `pnpm typecheck` passed.
- `pnpm test` passed all five existing tests.
- `pnpm build` passed the client and server builds. A final `pnpm build:client`
  passed after the last copy corrections; its script asset is
  `assets/index-BxXEXcIX.js`.
- `git diff --check` passed. Shared legal components and styles are unchanged.
- Existing Vite configuration, stale Browserslist and unrelated radial-gradient
  theme warnings remain; none prevented the build.
- Brave browser tab control timed out twice, so no rendered-browser visual
  acceptance is claimed. Public HTTP and bundled-route content verification is
  recorded separately below after deployment.
