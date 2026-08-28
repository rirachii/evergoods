import {
  LegalDocument,
  LegalEmail,
  LegalList,
  LegalSection,
} from "@/components/legal/LegalDocument";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { Link } from "react-router-dom";

const updatedAt = "August 28, 2026";
const supportEmail = "admin@evergoodsholdings.com";

const inlineLink =
  "font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export default function DexSupport() {
  useDocumentTitle("Dex Apps Support | Evergoods");

  return (
    <LegalDocument
      title="Dex Apps Support"
      summary="Help for FlowerDex, BirdDex, FishDex, CarDex, CoinDex, and CardDex."
      updatedAt={updatedAt}
      language="en"
      eyebrow="EVERGOODS · DEX APPS"
      updatedLabel="Last updated"
    >
      <LegalSection number="1" title="Contact support">
        <p>
          Email <LegalEmail address={supportEmail} /> for help with any Dex app.
          Please include the app name, your iOS version, and a short description
          of what happened. Do not attach sensitive documents, precise location
          details, account passwords, or financial information.
        </p>
        <p>We aim to respond within two business days.</p>
      </LegalSection>

      <LegalSection number="2" title="Apps covered">
        <LegalList>
          <li>FlowerDex — flowers and blooms</li>
          <li>BirdDex — bird sightings</li>
          <li>FishDex — fish sightings</li>
          <li>CarDex — car spotting</li>
          <li>CoinDex — coin collecting</li>
          <li>CardDex — the app's original generic trading-card catalogue</li>
        </LegalList>
      </LegalSection>

      <LegalSection number="3" title="How scanning works">
        <p>
          Tap the camera button, take a photo or choose one from your library,
          review the possible catalogue matches, and confirm the correct entry.
          A suggestion is never saved automatically.
        </p>
        <p>
          For clearer results, keep the subject well lit and centered. Photograph
          coins and cards straight-on with their edges visible. Photograph fish,
          birds, flowers, and cars only from a safe and lawful position.
        </p>
      </LegalSection>

      <LegalSection number="4" title="Camera or photo access is unavailable">
        <p>
          Open iOS Settings, select the Dex app, and check its Camera and Photos
          permissions. You can use Apple's photo picker without granting broad
          photo-library access. If the camera is unavailable in Simulator or on
          an unsupported device, choose an existing photo instead.
        </p>
      </LegalSection>

      <LegalSection number="5" title="Private map and location">
        <p>
          Camera scans can request a one-time, when-in-use coordinate. Selected
          photos may also contain an existing coordinate. Finds with a coordinate
          appear on the app's private map; finds without one remain in your
          collection and simply do not appear there.
        </p>
        <p>
          You can deny location access and continue using the app. Locations are
          stored on your device and are not shared with Evergoods.
        </p>
      </LegalSection>

      <LegalSection number="6" title="Energy">
        <p>
          A new installation begins with 50 Energy. A successfully confirmed scan
          costs 10 Energy. Failed, cancelled, or unconfirmed scans do not consume
          Energy. If your balance is below the cost of a scan, the app explains
          when the next local top-up is available.
        </p>
      </LegalSection>

      <LegalSection number="7" title="Removing local collection data">
        <p>
          Open a collected item's detail page and choose “Remove from my
          collection” to remove all saved sightings for that item. Deleting the
          app removes its local collection, subject to normal iOS backup behavior.
          The current apps have no Evergoods account or server copy to delete.
        </p>
      </LegalSection>

      <LegalSection number="8" title="Recognition limitations">
        <p>
          The apps provide possible catalogue matches, not guaranteed
          identifications. They do not authenticate, grade, appraise, value, or
          certify an item, and they must not be used for edibility, toxicity,
          medical, animal-care, or driving decisions. Always confirm the result
          yourself.
        </p>
      </LegalSection>

      <LegalSection number="9" title="Privacy">
        <p>
          The current Dex apps are local-first and do not collect data. Read the{" "}
          <Link className={inlineLink} to="/dex/privacy">
            Dex Apps Privacy Policy
          </Link>{" "}
          for details about photos, optional location, local storage, permissions,
          and deletion.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
