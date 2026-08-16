import {
  ExternalLegalLink,
  LegalDocument,
  LegalEmail,
  LegalList,
  LegalSection,
} from "@/components/intent/IntentLegal";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { Link } from "react-router-dom";

const updatedAt = "2026 年 8 月 15 日";
const supportEmail = "admin@evergoodsholdings.com";

export default function IntentTerms() {
  useDocumentTitle("使用條款｜Intent");

  return (
    <LegalDocument
      title="使用條款"
      summary="這些是 Intent（回神）的產品與服務補充條款。App 的使用授權仍受 Apple 標準終端使用者授權協議規範。"
      updatedAt={updatedAt}
    >
      <LegalSection number="1" title="接受條款與 Apple 標準 EULA">
        <p>
          Intent（回神）由 Evergoods Holdings
          LLC（以下稱「Evergoods」、「我們」）提供。下載、安裝、購買或使用
          Intent，即表示你同意本使用條款與適用的 Apple 條款。
        </p>
        <p>
          Intent 的 App 授權適用 Apple 在台灣提供的{" "}
          <ExternalLegalLink href="https://www.apple.com/legal/internet-services/itunes/tw/terms.html">
            授權應用程式終端使用者授權協議（標準 EULA）
          </ExternalLegalLink>
          。本頁補充說明產品功能、訂閱與第三方服務；不取代 Apple 標準
          EULA。若本條款與 Apple 標準 EULA
          或不可排除的當地法律衝突，以後者為準。
        </p>
      </LegalSection>

      <LegalSection number="2" title="服務內容">
        <p>
          Intent 是 iPhone
          專注工具，讓你先選擇使用目的，再開啟第三方社群網站，並可選擇使用 Apple
          Family Controls、Device Activity、Managed Settings 與 AlarmKit
          等系統功能管理裝置上的存取與排程。
        </p>
        <p>
          Intent
          不代理社群平台、不提供社群帳號，也不保證能移除所有推薦內容、廣告或分心元素。第三方網站、iOS
          與平台規則可能隨時改變，因此特定路徑、篩選或保護功能可能暫時降級或無法使用。
        </p>
      </LegalSection>

      <LegalSection number="3" title="使用資格與第三方帳戶">
        <LegalList>
          <li>
            你必須有權在自己的裝置上安裝及使用 App，並符合 Apple
            與所在地法律的年齡要求。
          </li>
          <li>
            登入任何社群平台時，你與該平台直接建立關係，並須遵守該平台的條款、社群規範與隱私權政策。
          </li>
          <li>
            若你未達第三方平台規定的最低年齡，或法律要求監護人同意，請勿透過
            Intent 使用該平台。
          </li>
          <li>
            你有責任維護裝置、Apple ID 與第三方帳戶安全；請勿把帳號密碼寄給
            Evergoods。
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection number="4" title="可接受的使用方式">
        <p>你不得利用 Intent：</p>
        <LegalList>
          <li>違反法律、Apple 使用規則或任何第三方平台條款；</li>
          <li>侵害、騷擾、冒用、詐騙或傷害他人；</li>
          <li>繞過安全、存取控制、付費功能或平台限制；</li>
          <li>
            散布惡意程式、干擾 App 或服務，或對 App
            進行適用法律未允許的反向工程；
          </li>
          <li>將 App 轉售、出租、再授權，或以未經授權的方式提供給第三人。</li>
        </LegalList>
      </LegalSection>

      <LegalSection number="5" title="Intent Pro 與自動續訂">
        <p>
          Intent 可提供免費功能及名為 Intent Pro
          的月繳或年繳自動續訂方案。實際價格、期間、試用資格與包含功能會在購買畫面顯示，並以
          Apple App Store 在你確認購買時顯示的資訊為準。
        </p>
        <LegalList>
          <li>付款會在你確認購買時由 Apple 向 Apple ID 收取。</li>
          <li>
            若方案為自動續訂，除非你在當期結束前透過 Apple 取消，Apple
            會依其規則續訂並收費。
          </li>
          <li>若提供免費試用，未在試用期結束前取消時，方案會轉為付費訂閱。</li>
          <li>
            你可以在 iOS「設定」的 Apple ID 訂閱管理頁面查看、變更或取消訂閱。
          </li>
          <li>
            刪除 Intent 不會自動取消訂閱。購買恢復、退款及帳務問題依 Apple
            政策處理。
          </li>
        </LegalList>
        <p>
          請參閱 Apple 的{" "}
          <ExternalLegalLink href="https://support.apple.com/zh-tw/118428">
            訂閱取消說明
          </ExternalLegalLink>{" "}
          與{" "}
          <ExternalLegalLink href="https://support.apple.com/zh-tw/118223">
            退款申請說明
          </ExternalLegalLink>
          。
        </p>
      </LegalSection>

      <LegalSection number="6" title="隱私權">
        <p>
          我們如何處理本機設定、網站工作階段、購買紀錄與支援請求，請參閱{" "}
          <Link
            className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            to="/intent/privacy"
          >
            Intent 隱私權政策
          </Link>
          。第三方社群平台會依自己的政策處理你直接提供給它們的資料。
        </p>
      </LegalSection>

      <LegalSection number="7" title="智慧財產權與回饋">
        <p>
          Intent、其 App 介面、文字、程式碼、商標與原創素材的權利屬 Evergoods
          或其授權人所有。第三方平台名稱、商標與網站內容屬各自權利人所有；提及或支援某平台不表示該平台贊助、認可或與
          Intent 合作。
        </p>
        <p>
          若你主動提供產品建議，我們可以在不揭露你的私人資料或社群內容的前提下，用於改進
          Intent。
        </p>
      </LegalSection>

      <LegalSection number="8" title="服務變更、暫停與終止">
        <p>
          我們可能為了安全、法令、Apple
          規則、第三方平台變更或產品維護而更新、限制、暫停或移除功能。重大變更會在合理可行的範圍內提供通知。若你違反本條款或使用方式造成安全、法律或第三方風險，我們可限制你使用相關服務。
        </p>
        <p>你可以隨時停止使用並刪除 App；如有訂閱，仍須另行透過 Apple 取消。</p>
      </LegalSection>

      <LegalSection number="9" title="保證、責任與消費者權益">
        <p>
          Intent 依現況提供。裝置設定、網路、iOS、Apple
          權限與第三方網站都可能影響結果；請勿把 Intent
          視為絕對無法繞過的家長控制、資安工具、緊急服務或醫療建議。
        </p>
        <p>
          在法律允許的最大範圍內，Evergoods
          不對第三方平台內容、帳戶處分、服務中斷或非由我們合理控制的損失負責。本條款不排除或限制《消費者保護法》或其他適用法律不得排除的權利、法定保證或責任。
        </p>
      </LegalSection>

      <LegalSection number="10" title="準據法與條款變更">
        <p>
          本條款依適用法律解釋。若你是台灣消費者，你仍享有台灣強制性消費者保護與個人資料保護規定賦予的權利。任何條款被認定無效時，其餘條款仍持續有效。
        </p>
        <p>
          我們可能因產品、法令或第三方服務變更而更新本條款。重大變更會在 App
          或本頁提供合理通知；更新後繼續使用即表示接受新條款，但法律另有要求者從其規定。
        </p>
      </LegalSection>

      <LegalSection number="11" title="聯絡方式">
        <p>
          服務提供者：Evergoods Holdings LLC
          <br />
          電子郵件：
          <LegalEmail address={supportEmail} />
        </p>
        <p>
          提出問題或申訴時，請說明與 Intent
          有關的情況，但不要附上社群帳號密碼、私訊或其他不必要的私人內容。
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
