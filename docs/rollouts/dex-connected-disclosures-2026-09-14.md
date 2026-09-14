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
- Brave browser tab control timed out twice. Rendered verification subsequently
  passed using the existing chrome-devtools-axi bridge in two new tabs, leaving
  the existing App Store Connect login untouched.

## Production receipt

Source commit: `a340370`, pushed on
`codex/dex-connected-disclosures-2026-09-14`. The branch has not been merged into
`main`; the existing Vercel production lane was deployed explicitly from this
committed source.

- Deployment `dpl_iZ13tQ2STmEPSMmwN6ePY6zQ8T8p` reached `READY`.
- Immutable URL: <https://evergoods-lvvo0umpo-rirachiis-projects.vercel.app>.
- Canonical alias: <https://www.evergoodsholdings.com>.
- Both `/dex/privacy` and `/dex/support`, and their served script, returned HTTP
  200. Their script is `assets/index-BxXEXcIX.js`, byte-identical to the final
  tested local production asset. SHA-256:
  `da97f004864f72d13a9b5a318604c6e0645be15f36ea51e6fd05589cf913e054`.
- The served route content contains the September 14 date, InsectDex, optional
  Apple sign-in, explicit sync, Activity and appeals, and the 48-hour revocation
  retry bound. The old blanket no-collection statement and two-business-day
  support promise are absent.
- Both browser page titles and all ten sections per route rendered correctly.
  Desktop at 1440×1000 and mobile emulation at 390×844 showed readable wrapping
  with no horizontal overflow (`scrollWidth == innerWidth`); neither route had
  console messages. Representative viewport screenshots were visually inspected;
  complete mobile-page screenshots were also retained.
- Six public-page screenshots are tracked with the coordinating `dex-apps`
  checkout under `docs/connected-qa/screenshots/evergoods-2026-09-14/`; its
  `docs/connected-qa/public-copy-audit-2026-09-14.md` records the resolved audit.

This verifies the public disclosure deployment and rendering. App Store privacy
answers, signed-device authentication, moderation staffing and mobile release
acceptance remain separate gates.
