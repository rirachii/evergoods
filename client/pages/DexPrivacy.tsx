import {
  ExternalLegalLink,
  LegalDocument,
  LegalEmail,
  LegalList,
  LegalSection,
} from "@/components/legal/LegalDocument";
import { useDocumentTitle } from "@/hooks/use-document-title";

const updatedAt = "August 28, 2026";
const supportEmail = "admin@evergoodsholdings.com";

export default function DexPrivacy() {
  useDocumentTitle("Dex Apps Privacy Policy | Evergoods");

  return (
    <LegalDocument
      title="Dex Apps Privacy Policy"
      summary="How FlowerDex, BirdDex, FishDex, CarDex, CoinDex, and CardDex handle photos, locations, and collection data."
      updatedAt={updatedAt}
      language="en"
      eyebrow="EVERGOODS · DEX APPS"
      updatedLabel="Effective and last updated"
    >
      <LegalSection number="1" title="Scope and provider">
        <p>
          This policy applies to the FlowerDex, BirdDex, FishDex, CarDex,
          CoinDex, and CardDex iOS apps provided by Evergoods Holdings LLC
          ("Evergoods," "we," or "us").
        </p>
        <p>
          Privacy questions can be sent to <LegalEmail address={supportEmail} />.
        </p>
      </LegalSection>

      <LegalSection number="2" title="Privacy summary">
        <LegalList>
          <li>The apps do not require an Evergoods account.</li>
          <li>
            The apps do not send your photos, saved finds, location, or usage
            activity to Evergoods.
          </li>
          <li>
            The current versions contain no advertising, analytics, tracking,
            subscription, or social-networking service.
          </li>
          <li>
            Recognition and catalogue matching run on your device and require
            your confirmation before a find is saved.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection number="3" title="Information stored on your device">
        <p>When you use a Dex app, it may store locally:</p>
        <LegalList>
          <li>photos you take or select for a scan;</li>
          <li>the catalogue item you confirm and the time you saved it;</li>
          <li>
            an optional coordinate from a camera capture or selected photo when
            location is available;
          </li>
          <li>your collection progress, scan-energy balance, and app settings.</li>
        </LegalList>
        <p>
          This information supports your private collection, item detail pages,
          and map. It stays in the app's storage on your device and is not
          uploaded to Evergoods.
        </p>
      </LegalSection>

      <LegalSection number="4" title="Camera, photos, and location">
        <p>The apps request access only when a related feature needs it:</p>
        <LegalList>
          <li>Camera access lets you take a new scan photo.</li>
          <li>
            Photo-library access lets you choose an image through Apple's photo
            picker.
          </li>
          <li>
            When-in-use location access lets a camera find appear on your private
            map. Location is optional; you can deny it and continue collecting.
          </li>
        </LegalList>
        <p>
          You can change these permissions in iOS Settings. A photo selected
          from your library may already contain a location; when present, the
          app may use that coordinate for your private map.
        </p>
      </LegalSection>

      <LegalSection number="5" title="Collection, sharing, and third parties">
        <p>
          Evergoods does not collect, sell, rent, or share data from these apps.
          The current versions do not contain third-party SDKs that receive app
          activity or personal information.
        </p>
        <p>
          Catalogue entries may include a source link. If you choose to open one,
          Safari and the destination website process that visit under their own
          terms and privacy policies. Evergoods does not receive the destination
          site's browsing data through the Dex app.
        </p>
      </LegalSection>

      <LegalSection number="6" title="Retention and deletion">
        <p>
          A saved find remains on your device until you remove it from the app or
          delete the app. You can remove an item's saved sightings from its detail
          screen. Deleting the app removes its local collection data subject to
          normal iOS device backups and Apple's backup settings.
        </p>
        <p>
          Because Evergoods does not receive your Dex app collection, we do not
          have a server-side copy to retrieve, correct, or delete.
        </p>
      </LegalSection>

      <LegalSection number="7" title="App guidance and safety">
        <p>
          Recognition results are suggestions for a personal collection and are
          not authoritative identification, authentication, grading, appraisal,
          edibility, toxicity, medical, wildlife-handling, or driving advice.
          Confirm each catalogue entry yourself and follow the safety guidance
          shown in the relevant app.
        </p>
      </LegalSection>

      <LegalSection number="8" title="Children">
        <p>
          The apps do not knowingly collect personal information from children
          or anyone else. Parents and guardians can manage camera, photo, and
          location permissions through iOS Settings and device controls.
        </p>
      </LegalSection>

      <LegalSection number="9" title="This website">
        <p>
          When you visit this policy or the Dex support page, website hosting and
          network providers may process technical request information such as an
          IP address, browser type, requested URL, and request time to deliver and
          secure the site. These pages do not use advertising or behavioral
          analytics tools.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Changes and contact">
        <p>
          We will update this page if a Dex app's data practices materially
          change. The date above identifies the current version. If a future
          version adds online features, its App Store privacy disclosure and this
          policy will be updated before those practices begin.
        </p>
        <p>
          Provider: Evergoods Holdings LLC
          <br />
          Email: <LegalEmail address={supportEmail} />
        </p>
        <p>
          For Apple's platform privacy information, see the{" "}
          <ExternalLegalLink href="https://www.apple.com/legal/privacy/">
            Apple Privacy Policy
          </ExternalLegalLink>
          .
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
