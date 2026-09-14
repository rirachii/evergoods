import {
  LegalDocument,
  LegalEmail,
  LegalList,
  LegalSection,
} from "@/components/legal/LegalDocument";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { Link } from "react-router-dom";

const updatedAt = "September 14, 2026";
const supportEmail = "admin@evergoodsholdings.com";
const inlineLink =
  "font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export default function DexSupport() {
  useDocumentTitle("Dex Apps Support | Evergoods");

  return (
    <LegalDocument
      title="Dex Apps Support"
      summary="Help with collecting, optional accounts, private sync, and sharing in the seven Dex apps."
      updatedAt={updatedAt}
      language="en"
      eyebrow="EVERGOODS · DEX APPS"
      updatedLabel="Last updated"
    >
      <LegalSection number="1" title="Contact support">
        <p>
          Email <LegalEmail address={supportEmail} /> with the app name, app
          version, iOS version, and a short description of what happened. Do not
          attach sensitive documents, exact locations, passwords, sign-in codes,
          or financial information.
        </p>
        <p>
          The account and Community instructions below apply only to versions
          where those features are available, including test versions. Older
          local-only versions may not have these controls. This page does not
          announce the public release of a connected version.
        </p>
      </LegalSection>

      <LegalSection number="2" title="Apps covered">
        <LegalList>
          <li>FlowerDex — flowers and blooms</li>
          <li>BirdDex — bird sightings</li>
          <li>FishDex — fish sightings</li>
          <li>CarDex — car spotting</li>
          <li>CoinDex — coin collecting</li>
          <li>InsectDex — respectful insect observation</li>
          <li>CardDex — an original fictional card catalogue</li>
        </LegalList>
      </LegalSection>

      <LegalSection number="3" title="Capture, matching, and confirmation">
        <p>
          Open the capture button, take a photo or choose one from your library,
          review the possible matches, and confirm the correct catalogue entry.
          A suggestion is never saved automatically. Local catalogue search is
          available when recognition cannot find a credible match or the hosted
          service is unavailable. Researching entries are still awaiting
          catalogue review and cannot be shared as accepted finds.
        </p>
        <p>
          Where hosted recognition is offered, its explanation appears before
          you send a resized, metadata-free image for matching. This is separate
          from account sign-in, collection sync, and sharing. Keep subjects well
          lit and centered, and photograph only from a safe and lawful position
          without disturbing wildlife.
        </p>
      </LegalSection>

      <LegalSection number="4" title="Camera, photos, and your private map">
        <p>
          Check the app's Camera and location permissions in iOS Settings.
          Apple's photo picker does not require broad photo-library access. If
          the camera is unavailable in Simulator or on an unsupported device,
          choose an existing photo instead.
        </p>
        <p>
          Camera captures may request a one-time, when-in-use coordinate;
          selected photos may already contain one. Only finds with a coordinate
          appear on Map. Other finds remain in your collection. Location is
          optional, stays on the originating device, and is not synced or
          shared. A find restored on another device may therefore have no map
          pin.
        </p>
      </LegalSection>

      <LegalSection number="5" title="Energy">
        <p>
          A new installation starts with 50 Energy. A successfully confirmed
          scan costs 10. Failed, cancelled, and unconfirmed scans do not consume
          Energy. The first app activation on a new day raises a balance below
          10 to 10. Energy is local to the installation.
        </p>
      </LegalSection>

      <LegalSection number="6" title="Accounts, sync, and missing finds">
        <p>
          Open the Profile button to sign in with Apple and choose a username.
          Each Dex app has its own account and community. You can continue
          collecting without signing in. In Profile, Sync my collection is off
          until you enable it. Include private photo copies is a separate switch
          and uploads a smaller copy with metadata removed, not the original.
        </p>
        <p>
          To use the same synced collection on another device, sign into the
          same Apple account in the same Dex app and enable private sync. Use
          Sync now in Profile when connected. If your account is offline, your
          local collection remains available; use Reconnect account or the
          reconnect controls in Profile before trying connected actions again.
        </p>
        <p>
          Signing out hides that account's synced records on this device. Sign
          back into the same account to see them; another account cannot adopt
          them. Unsynced finds on a device are not automatically a cloud backup.
          If a storage error appears, contact support before deleting the app
          because deletion can remove the only local copy.
        </p>
      </LegalSection>

      <LegalSection number="7" title="Friends, sharing, and saved posts">
        <p>
          Open Friends in Community or Profile and send a request using the
          person's username. They must accept it. To share, open a collected,
          accepted item, choose Share this find, inspect Share preview, select
          Friends or Community, and confirm. A username and private collection
          sync are required so the app can verify the owned find. Sync never
          publishes it automatically.
        </p>
        <p>
          A shared post uses the catalogue illustration and your public
          username, not your original photo, private note, rating, capture time,
          or map location. Community's Saved tab holds posts you bookmark
          privately; saving a post does not add a find to your own collection.
          On this device opens your local saved finds. To withdraw a post, open
          My shares and choose Remove shared post from its menu. Your private
          find remains.
        </p>
      </LegalSection>

      <LegalSection number="8" title="Report, block, or appeal">
        <p>
          Use a shared post's options menu to report it and select a reason, or
          to block its author. Friends also provides block controls and a list
          for unblocking. Blocking removes your friendship and pending requests
          and hides shared activity between you. Unblocking does not recreate a
          friendship; send and accept a new request if desired.
        </p>
        <p>
          Open Activity and appeals in Profile to see your moderation outcomes.
          If a decision offers an appeal, open it and explain your reason.
          Appeals are reviewed by a different deciding moderator. An account
          restriction may limit Community and sync; Profile still provides
          connected export and account deletion. You can also email support for
          help accessing these controls.
        </p>
      </LegalSection>

      <LegalSection number="9" title="Export and remove data">
        <p>
          Profile offers Export local collection and, when connected, Prepare
          account export followed by Save account export. Keep the exported
          information private. Open an item's detail page and choose Remove from
          my collection to remove its saved sightings. If sync is off or your
          account is offline, cloud removal waits until sync resumes. Existing
          shares can be separately withdrawn in My shares when connected.
        </p>
        <p>
          Delete account in Profile asks for confirmation. It disables connected
          access and shared visibility, then removes account-owned cloud
          records, private photo copies, relationships, and authentication data.
          A local copy remains on the device where you request deletion. Apple
          authorization revocation is retried independently if needed and does
          not hold up Dex erasure.
        </p>
        <p>
          Deleting the app removes its local collection subject to normal iOS
          backup behavior; it does not delete an existing cloud account. Contact
          support if you cannot sign in to export or delete your account.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Limitations and privacy">
        <p>
          Catalogue matches and illustrations are not guaranteed identification,
          authentication, grade, value, or certification. Do not use them for
          edibility, toxicity, medical, animal-care, or driving decisions.
          Confirm the entry yourself and follow the app's capture guidance.
        </p>
        <p>
          Read the{" "}
          <Link className={inlineLink} to="/dex/privacy">
            Dex Apps Privacy Policy
          </Link>{" "}
          for the local option, hosted recognition, optional connected
          processing, visibility choices, service providers, and deletion.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
