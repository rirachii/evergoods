import {
  ExternalLegalLink,
  LegalDocument,
  LegalEmail,
  LegalList,
  LegalSection,
} from "@/components/legal/LegalDocument";
import {
  consumerApps,
  supportEmail,
  updatedAt,
  type ConsumerAppId,
} from "@/content/consumerApps";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function ConsumerAppPrivacy({ app: id }: { app: ConsumerAppId }) {
  const app = consumerApps[id];
  useDocumentTitle(`${app.name} Privacy Policy | Evergoods`);

  return (
    <LegalDocument
      title={`${app.name} Privacy Policy`}
      summary={`${app.name} works on your iPhone without an account. Evergoods Holdings LLC does not collect, sell or share your personal data.`}
      updatedAt={updatedAt}
      language="en"
      eyebrow={`EVERGOODS · ${app.name.toUpperCase()}`}
      updatedLabel="Last updated"
    >
      <LegalSection number="1" title="What we collect">
        <p>
          Nothing. {app.name} has no account, no analytics, no advertising and
          no server of its own. Evergoods Holdings LLC does not receive your
          answers, settings, photos, audio or usage.
        </p>
      </LegalSection>

      <LegalSection number="2" title="What stays on your iPhone">
        <LegalList>
          {app.onDevice.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </LegalList>
        <p>Deleting the app removes this information from your iPhone.</p>
      </LegalSection>

      <LegalSection number="3" title="Permissions">
        <p>{app.name} asks only for what a feature needs, when you use it:</p>
        <LegalList>
          {app.permissions.map((permission) => (
            <li key={permission.name}>
              <strong className="text-foreground">{permission.name}.</strong>{" "}
              {permission.detail}
            </li>
          ))}
        </LegalList>
        <p>You can change any permission in the iPhone Settings app.</p>
      </LegalSection>

      {app.subscription && (
        <LegalSection number="4" title="Subscriptions">
          <p>
            {app.subscription} is sold through Apple. Apple processes payment and
            shares only what the app needs to confirm your subscription on your
            iPhone. See{" "}
            <ExternalLegalLink href="https://www.apple.com/legal/privacy/">
              Apple's Privacy Policy
            </ExternalLegalLink>
            .
          </p>
        </LegalSection>
      )}

      <LegalSection number={app.subscription ? "5" : "4"} title="Children">
        <p>
          {app.name} does not knowingly collect information from anyone,
          including children, because it does not collect information at all.
        </p>
      </LegalSection>

      <LegalSection number={app.subscription ? "6" : "5"} title="Changes and contact">
        <p>
          If this policy changes, the date above will change too. Questions:
          email <LegalEmail address={supportEmail} />.
        </p>
        <p>Evergoods Holdings LLC.</p>
      </LegalSection>
    </LegalDocument>
  );
}
