import {
  ExternalLegalLink,
  LegalDocument,
  LegalEmail,
  LegalList,
  LegalSection,
} from "@/components/intent/IntentLegal";
import { useDocumentTitle } from "@/hooks/use-document-title";

const updatedAt = "2026 年 8 月 15 日";
const supportEmail = "admin@evergoodsholdings.com";

export default function IntentPrivacy() {
  useDocumentTitle("隱私權政策｜Intent");

  return (
    <LegalDocument
      title="隱私權政策"
      summary="這份政策說明 Intent（回神）如何處理資料、哪些資料只留在你的裝置上，以及如何行使你的隱私權利。"
      updatedAt={updatedAt}
    >
      <LegalSection number="1" title="適用範圍與負責單位">
        <p>
          本政策適用於由 Evergoods Holdings
          LLC（以下稱「Evergoods」、「我們」）提供的 Intent（回神）iOS
          App、延伸功能，以及本網站的 Intent 頁面。
        </p>
        <p>
          隱私權或資料處理問題請寄至 <LegalEmail address={supportEmail} />。
        </p>
      </LegalSection>

      <LegalSection number="2" title="資料處理摘要">
        <LegalList>
          <li>
            Intent 不要求建立 Evergoods 帳號，也不經營用來接收社群內容的伺服器。
          </li>
          <li>
            你的 App 偏好、保護排程、使用計時與 Apple 提供的不透明 App
            選取權杖儲存在你的裝置或 App Group 中。
          </li>
          <li>
            社群登入與內容直接由你選擇的平台網站處理；我們不接收你的社群帳號密碼、私訊、搜尋、貼文或瀏覽內容。
          </li>
          <li>
            購買或恢復訂閱時，Apple 與 RevenueCat
            會處理必要的交易、匿名識別碼及技術資料。
          </li>
          <li>
            目前版本沒有廣告 SDK、產品分析 SDK 或跨 App 追蹤，也不使用 IDFA。
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection number="3" title="儲存在裝置上的資料">
        <p>
          為了提供 App 功能，Intent 會在你的 iPhone 或共享 App Group 中儲存：
        </p>
        <LegalList>
          <li>語言、已選平台、專注模式、平台顯示偏好與本機帳號欄位名稱；</li>
          <li>
            專注瀏覽的本機使用時間、每日上限、重設時間與發文模式啟動次數；
          </li>
          <li>
            保護排程、暫時解鎖狀態、鬧鐘偏好，以及 Apple Family Controls
            提供的不透明選取權杖；
          </li>
          <li>
            各本機社群帳號欄位所使用的 WebKit Cookie、登入工作階段與網站資料。
          </li>
        </LegalList>
        <p>
          這些資料用於記住你的設定、執行你建立的排程、顯示 Intent
          內的使用計時，以及保持你主動建立的網站登入工作階段。我們不會把它們上傳到
          Evergoods 的伺服器，也不會用它們建立廣告或行為分析檔案。
        </p>
      </LegalSection>

      <LegalSection number="4" title="社群網站與裝置權限">
        <p>
          Intent 透過 Apple WebKit
          開啟第三方平台的第一方網站。你在網站中輸入的帳號資料、搜尋、訊息、貼文、照片、相機或麥克風內容，會直接交給你正在使用的平台，並受該平台自己的隱私權政策與條款規範。Evergoods
          不會代理或接收這些流量。
        </p>
        <p>依你選擇使用的功能，Intent 可能請求：</p>
        <LegalList>
          <li>
            Family Controls／螢幕使用時間權限，用於選擇並管理你指定的 App
            或網站；
          </li>
          <li>AlarmKit 鬧鐘權限，用於你主動開啟的睡眠排程；</li>
          <li>
            相機、麥克風或照片權限，僅在第三方網站的相關功能由你主動觸發時使用。
          </li>
        </LegalList>
        <p>
          你可以在
          iOS「設定」中變更權限。拒絕非必要權限不會阻止你使用其他不依賴該權限的功能。
        </p>
      </LegalSection>

      <LegalSection number="5" title="訂閱與第三方服務">
        <p>
          Intent Pro 的付款由 Apple App Store 處理。我們使用 RevenueCat
          驗證購買、恢復購買並判斷訂閱權益。RevenueCat 會處理匿名 App User
          ID、裝置與作業系統等技術資料、App Store
          收據、購買紀錄、訂閱狀態及最後使用時間。Intent
          不會把社群內容、瀏覽紀錄或社群帳號資料附加到訂閱資料中。
        </p>
        <p>
          Apple 與 RevenueCat 可能依其全球基礎設施在台灣以外處理資料。請參閱{" "}
          <ExternalLegalLink href="https://www.apple.com/tw/legal/privacy/">
            Apple 隱私權政策
          </ExternalLegalLink>{" "}
          與{" "}
          <ExternalLegalLink href="https://www.revenuecat.com/privacy">
            RevenueCat 隱私權政策
          </ExternalLegalLink>
          。我們要求受託服務提供者僅為提供服務、資安、法令遵循及交易支援所必要的範圍處理資料。
        </p>
      </LegalSection>

      <LegalSection number="6" title="本網站資料">
        <p>
          當你瀏覽 Intent
          網頁時，網站代管與網路服務提供者可能為了傳送頁面、防止濫用及維持安全而處理
          IP 位址、瀏覽器與裝置類型、請求時間、請求網址及技術紀錄。Intent
          頁面目前不使用廣告 Cookie 或行為分析工具。
        </p>
      </LegalSection>

      <LegalSection number="7" title="分享、出售與跨境處理">
        <p>
          我們不出售個人資料，也不把資料提供給資料仲介或廣告網路。資料只會在下列必要情況由相關對象處理：
        </p>
        <LegalList>
          <li>Apple 與 RevenueCat：處理購買、收據、訂閱權益及必要技術支援；</li>
          <li>你主動開啟的社群平台：提供登入、瀏覽與平台功能；</li>
          <li>網站代管及資安服務提供者：傳送並保護本網站；</li>
          <li>
            依法有權之機關，或為保護使用者、Evergoods
            或他人權利與安全所必要的對象。
          </li>
        </LegalList>
        <p>
          上述服務可能在台灣、美國或服務提供者設有設施的其他地區處理資料，並依各自政策與適用法律提供保護。
        </p>
      </LegalSection>

      <LegalSection number="8" title="保存、刪除與撤回權限">
        <LegalList>
          <li>
            本機設定與計時資料會保留到你在 App 內清除、於 iOS
            中移除相關網站資料，或刪除 App 為止。
          </li>
          <li>
            你可以在
            Intent「設定」中清除各社群平台的本機登入資料，並停用或刪除排程。
          </li>
          <li>
            你可以在
            iOS「設定」中撤回相機、麥克風、照片、鬧鐘或螢幕使用時間權限。
          </li>
          <li>
            刪除 App 不會取消 App Store 訂閱。Apple 與 RevenueCat
            會依交易、稅務、防詐及法令要求保存必要紀錄。
          </li>
        </LegalList>
        <p>
          若要提出 Evergoods
          可控制範圍內的查詢、複製、更正、停止處理或刪除請求，請寄信至{" "}
          <LegalEmail address={supportEmail} />
          。社群平台或 Apple 帳戶中的資料須向各該服務提出請求。
        </p>
      </LegalSection>

      <LegalSection number="9" title="依台灣個人資料保護法享有的權利">
        <p>
          在適用範圍內，你可依《個人資料保護法》請求查詢或閱覽、製給複製本、補充或更正、停止蒐集處理或利用，以及刪除個人資料。你也可以拒絕提供非必要資料；未提供特定權限或交易資料時，只會影響依賴該資料的功能或購買驗證。
        </p>
        <p>
          法定告知項目與權利可參閱中華民國法務部{" "}
          <ExternalLegalLink href="https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=I0050021">
            《個人資料保護法》
          </ExternalLegalLink>
          。
        </p>
      </LegalSection>

      <LegalSection number="10" title="兒童與青少年">
        <p>
          Intent
          不以兒童為對象，也不要求使用者提供年齡。使用第三方社群平台時，仍須符合該平台與所在地法律的最低年齡及監護人同意要求。如果你認為兒童的資料被不當提供給
          Evergoods，請聯絡我們。
        </p>
      </LegalSection>

      <LegalSection number="11" title="政策變更與聯絡方式">
        <p>
          若資料處理方式有重大改變，我們會在 App
          或本頁提供合理通知，並在必要時重新取得同意。頁首日期會顯示最新版本。
        </p>
        <p>
          負責單位：Evergoods Holdings LLC
          <br />
          電子郵件：
          <LegalEmail address={supportEmail} />
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
