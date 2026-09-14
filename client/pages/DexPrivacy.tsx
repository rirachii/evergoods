import {
  ExternalLegalLink,
  LegalDocument,
  LegalEmail,
  LegalList,
  LegalSection,
} from "@/components/legal/LegalDocument";
import { useDocumentTitle } from "@/hooks/use-document-title";

const updatedAt = "September 14, 2026";
const supportEmail = "admin@evergoodsholdings.com";

export default function DexPrivacy() {
  useDocumentTitle("Dex Apps Privacy Policy | Evergoods");

  return (
    <LegalDocument
      title="Dex Apps Privacy Policy"
      summary="How the seven Dex apps handle local collections, optional accounts and private sync, and finds you choose to share."
      updatedAt={updatedAt}
      language="en"
      eyebrow="EVERGOODS · DEX APPS"
      updatedLabel="Effective and last updated"
    >
      <LegalSection number="1" title="Scope and availability">
        <p>
          This policy applies to FlowerDex, BirdDex, FishDex, CarDex, CoinDex,
          InsectDex, and CardDex, provided by Evergoods Holdings LLC
          ("Evergoods," "we," or "us"). CardDex uses an original fictional
          catalogue.
        </p>
        <p>
          You can collect on your device without an account. Some versions also
          offer optional accounts, private sync, and Community. These sections
          apply where those features are available, including test versions;
          their description here does not mean that every app or version has
          been publicly released with them. Older local-only versions do not
          acquire connected features merely because this policy changes.
        </p>
        <p>
          Privacy questions can be sent to <LegalEmail address={supportEmail} />
          .
        </p>
      </LegalSection>

      <LegalSection number="2" title="Your choices at a glance">
        <LegalList>
          <li>Saving a find requires your confirmation.</li>
          <li>
            Apple sign-in is optional. Private collection sync starts off.
          </li>
          <li>Uploading private photo copies requires a separate opt-in.</li>
          <li>
            Sharing requires a preview and a Friends or Community audience
            choice. Signing in, collecting, or enabling sync does not publish a
            find.
          </li>
          <li>
            Original photos, Photos-library identifiers, and map coordinates
            remain on their originating device. Community never receives your
            personal photo, private note, rating, or exact capture time.
          </li>
          <li>
            The Dex apps do not use advertising, behavioral analytics, tracking,
            or subscriptions. We do not sell or rent your personal data.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection number="3" title="Local collection and permissions">
        <p>
          The app stores your selected or captured photos, confirmed catalogue
          items, capture times, optional notes and ratings, collection progress,
          energy, and settings on your device. A find may also have an optional
          coordinate from its camera capture or selected photo for your private
          map. These coordinates are not uploaded or included in shared posts.
        </p>
        <p>
          Camera access is requested to take a photo. Apple's photo picker lets
          you select an image without granting broad library access. When-in-use
          location access can place a camera find on your private map. You can
          deny location and continue collecting, and change permissions in iOS
          Settings. Normal iOS device backups are controlled by your Apple
          backup settings.
        </p>
      </LegalSection>

      <LegalSection number="4" title="Recognition, where available">
        <p>
          Local catalogue search remains available. If you choose hosted
          recognition after its in-app explanation, the app sends a resized
          image with photo metadata removed to our recognition gateway and its
          configured Google Gemini model service. It does not send the original
          image, Photos-library identifier, or map coordinate. You still confirm
          the catalogue match before it becomes a saved find.
        </p>
        <p>
          The gateway uses an attested installation identifier and request
          counters for abuse prevention and quotas, separately from your
          optional account. It does not store recognition images in its database
          or file storage and requests that the model interaction not be stored.
          Service providers may process technical network information to deliver
          and secure a request. A failed or unavailable hosted service does not
          prevent local catalogue search.
        </p>
      </LegalSection>

      <LegalSection number="5" title="Optional Apple account and profile">
        <p>
          Apple sign-in provides an app-specific account identifier and session
          credentials. We do not request your Apple name or email address. You
          choose a public username so others can find you within that app.
          Accounts, usernames, and communities are separate for each Dex app; we
          do not automatically link them to another Dex app or Foodex.
        </p>
        <p>
          Apple provides sign-in, and Convex hosts our connected authentication,
          database, and private file storage. Provider identifiers and session
          credentials are not shown in your public profile or feed. A private
          Apple revocation credential is retained to support account deletion.
        </p>
      </LegalSection>

      <LegalSection number="6" title="Private sync and photo copies">
        <p>
          In Profile, you can turn on Sync my collection. This sends your
          confirmed item identifiers, observation identifiers, capture and
          update times, optional private note and rating, and deletion status to
          owner-only cloud records. It lets devices signed into that same app
          account synchronize your collection. Research-preview entries can sync
          privately but cannot be shared as accepted catalogue finds.
        </p>
        <p>
          Include private photo copies is a separate switch. It uploads a
          smaller JPEG with metadata removed on the device and again on the
          server. The original stays on your device. Copies are private to your
          account and accessed through short-lived download links; they are
          never the images used in Community posts.
        </p>
        <p>
          Turning sync off stops new uploads but does not delete existing cloud
          records. Local edits and removals wait until sync is enabled and your
          account reconnects. Turning photo-copy sync off stops further photo
          uploads; it does not by itself erase copies already stored. Account
          export and deletion remain available when connected.
        </p>
      </LegalSection>

      <LegalSection number="7" title="Friends, shared finds, and safety">
        <p>
          Friend requests require the other person's acceptance. Friend lists,
          pending requests, blocks, and saved-post lists are private to their
          participants or owner. Removing a friendship removes access to
          friends-only posts. Blocking removes the friendship and pending
          requests and hides shared activity between the accounts.
        </p>
        <p>
          When you explicitly share an owned, accepted catalogue find, the post
          shows your app username, the catalogue item and official illustration,
          posting time, selected audience, and reaction count. Friends-only
          posts are visible to current mutual friends; Community posts are
          visible to signed-in members of that app. Posts do not contain your
          source observation identifier, private photo or photo-copy link, note,
          rating, exact capture time, or location. This also applies to CarDex.
        </p>
        <p>
          You can withdraw a share, react to visible posts, or save a post
          privately. Saving a post does not add it to your collection. Reports,
          blocks, moderation decisions, and appeals are processed to operate
          safety controls. Decision history is retained, and an appeal requires
          a different deciding moderator. Anonymized moderation evidence may
          remain where needed to preserve that history, without a reusable
          provider or public profile identity.
        </p>
      </LegalSection>

      <LegalSection number="8" title="Export, retention, and deletion">
        <p>
          Profile offers a local collection export and, when connected, an
          account-data export. A local find remains until you remove it or
          delete the app. Removing a synced find removes its cloud copy and
          related shared visibility when the deletion synchronizes. You can
          separately withdraw a post through Community → My shares. Deleting the
          app alone does not delete an existing cloud account.
        </p>
        <p>
          Signing out hides that account's synced finds on this device; signing
          back into the same account makes them available again. Account
          deletion is a separate confirmed Profile action. It promptly disables
          connected access and shared visibility, then removes account-owned
          records, private media, relationships, and authentication data through
          background erasure jobs. It keeps a local copy of the collection on
          the device where deletion was requested.
        </p>
        <p>
          Apple authorization revocation is retried independently and never
          delays Dex account erasure. A deletion retry job may retain its
          private revocation credential for up to 48 hours, then removes it;
          successful revocation removes it sooner. If you cannot access an
          account, contact support for help with a data request. Do not send
          passwords or sign-in codes.
        </p>
      </LegalSection>

      <LegalSection number="9" title="App guidance and family use">
        <p>
          Recognition and catalogue illustrations are collection aids, not
          authoritative identification, authentication, grading, appraisal,
          edibility, toxicity, medical, animal-care, wildlife-handling, or
          driving advice. Confirm each entry yourself and follow the app's
          capture guidance.
        </p>
        <p>
          Parents and guardians can manage camera, photo, location, and Apple
          account permissions through device controls. Review optional sync and
          sharing choices before enabling them. If you believe a child has
          provided personal information that should be removed, contact us at{" "}
          <LegalEmail address={supportEmail} /> for assistance.
        </p>
      </LegalSection>

      <LegalSection number="10" title="This website, links, and contact">
        <p>
          Website hosting and network providers may process an IP address,
          browser type, requested URL, and request time to deliver and secure
          these pages. The pages do not use advertising or behavioral analytics.
          If you open a catalogue source link, the destination website processes
          that visit under its own policy. Information you voluntarily email to
          support is used to address your request; avoid unnecessary private
          content.
        </p>
        <p>
          We update this policy when data practices change. The relevant in-app
          explanations and App Store privacy disclosures should be read
          alongside it. Provider: Evergoods Holdings LLC. Email:{" "}
          <LegalEmail address={supportEmail} />.
        </p>
        <p>
          For Apple's platform practices, see the{" "}
          <ExternalLegalLink href="https://www.apple.com/legal/privacy/">
            Apple Privacy Policy
          </ExternalLegalLink>
          .
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
