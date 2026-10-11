import {
  ExternalLegalLink,
  LegalDocument,
  LegalEmail,
  LegalList,
  LegalSection,
} from "@/components/legal/LegalDocument";
import {
  appleTermsUrl,
  consumerApps,
  supportEmail,
  updatedAt,
  type ConsumerAppId,
} from "@/content/consumerApps";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { Link } from "react-router-dom";

const inlineLink =
  "font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export default function ConsumerAppSupport({ app: id }: { app: ConsumerAppId }) {
  const app = consumerApps[id];
  useDocumentTitle(`${app.name} Support | Evergoods`);

  return (
    <LegalDocument
      title={`${app.name} Support`}
      summary={app.summary}
      updatedAt={updatedAt}
      language="en"
      eyebrow={`EVERGOODS · ${app.name.toUpperCase()}`}
      updatedLabel="Last updated"
    >
      <LegalSection number="1" title="Contact support">
        <p>
          Email <LegalEmail address={supportEmail} /> with the app name, app
          version, iOS version and a short description of what happened.
        </p>
      </LegalSection>

      {app.subscription && (
        <LegalSection number="2" title="Subscriptions">
          <p>
            {app.subscription}: {app.plans} Payment is charged to your Apple
            Account. A subscription renews automatically unless you cancel at
            least 24 hours before the end of the current period.
          </p>
          <LegalList>
            <li>
              To cancel, open Settings, tap your name, then Subscriptions.
            </li>
            <li>
              To restore a purchase on a new iPhone, tap Restore purchases on
              the subscription screen in the app.
            </li>
            <li>
              Refunds are handled by Apple at{" "}
              <ExternalLegalLink href="https://reportaproblem.apple.com">
                reportaproblem.apple.com
              </ExternalLegalLink>
              .
            </li>
          </LegalList>
        </LegalSection>
      )}

      <LegalSection number={app.subscription ? "3" : "2"} title="Common questions">
        {app.help.map((item) => (
          <div key={item.question}>
            <h3 className="font-semibold text-foreground">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </LegalSection>

      <LegalSection number={app.subscription ? "4" : "3"} title="Terms and privacy">
        <p>
          Use of {app.storeName} is governed by Apple's{" "}
          <ExternalLegalLink href={appleTermsUrl}>
            Standard End User License Agreement
          </ExternalLegalLink>
          . Read the{" "}
          <Link className={inlineLink} to={`/${app.id}/privacy`}>
            {app.name} Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
