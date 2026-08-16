import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/use-document-title";
import {
  ArrowRight,
  Clock3,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

const supportEmail = "admin@evergoodsholdings.com";

const principles = [
  {
    icon: Clock3,
    title: "先選目的",
    body: "回覆、搜尋、查看追蹤內容或發文。先決定要做什麼，再進入平台。",
  },
  {
    icon: ShieldCheck,
    title: "減少分心",
    body: "以專注瀏覽和 Apple 螢幕使用時間工具，協助你管理原生社群 App 的存取。",
  },
  {
    icon: LockKeyhole,
    title: "資料留在裝置",
    body: "偏好、排程與使用計時保留在 iPhone；社群登入直接在各平台網站完成。",
  },
];

export default function Intent() {
  useDocumentTitle("產品與支援｜Intent");

  return (
    <div lang="zh-Hant-TW" className="relative overflow-x-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[44rem] overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-12rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/30 via-[hsl(var(--accent)/0.2)] to-transparent blur-3xl" />
      </div>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-semibold tracking-wide text-foreground/65 backdrop-blur">
              TAIWAN-FIRST · iPHONE
            </p>
            <h1 className="max-w-3xl text-balance text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
              先想好要做什麼，<span className="text-primary">再打開社群。</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/70">
              Intent（回神）幫你帶著明確目的使用社群平台，完成眼前的事，而不是被推薦動態帶走。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${supportEmail}?subject=Intent%20支援`}>
                <Button className="min-h-12 w-full rounded-full px-6 sm:w-auto">
                  <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                  聯絡支援
                </Button>
              </a>
              <Link
                to="/intent/privacy"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-background/80 px-6 text-sm font-semibold transition-colors hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                查看隱私權政策
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mr-0">
            <div
              className="absolute -inset-10 rounded-full bg-primary/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative rounded-[2rem] border border-border/70 bg-background/75 p-3 shadow-2xl shadow-primary/10 backdrop-blur">
              <div className="rounded-[1.45rem] bg-[hsl(144_30%_8%)] px-6 py-8 text-white sm:px-8 sm:py-10">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-lg font-bold">
                    I
                  </span>
                  <Smartphone
                    className="h-5 w-5 text-white/45"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-16 text-sm text-white/50">現在要做什麼？</p>
                <p className="mt-2 text-3xl font-bold tracking-tight">
                  帶著目的進去。
                </p>
                <div className="mt-8 grid grid-cols-3 gap-2 text-center text-sm">
                  {["回覆", "搜尋", "發文"].map((label, index) => (
                    <div
                      key={label}
                      className={`rounded-xl px-2 py-4 ${
                        index === 0
                          ? "bg-primary text-white"
                          : "bg-white/10 text-white/75"
                      }`}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            專注，不需要交出更多資料。
          </h2>
          <div className="mt-8 grid overflow-hidden rounded-3xl border border-border/70 bg-border/70 md:grid-cols-3 md:gap-px">
            {principles.map(({ icon: Icon, title, body }) => (
              <article key={title} className="bg-card p-7">
                <Icon
                  className="h-5 w-5 text-primary"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                <h3 className="mt-8 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/65">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/45">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-20">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-primary">
              SUPPORT & LEGAL
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              需要協助？
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-foreground/65">
              來信時請描述裝置型號、iOS
              版本與遇到的畫面。請勿寄送社群帳號密碼或私人內容。
            </p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            <SupportRow
              href={`mailto:${supportEmail}?subject=Intent%20支援`}
              title="電子郵件支援"
              detail={supportEmail}
            />
            <SupportRow
              to="/intent/privacy"
              title="隱私權政策"
              detail="我們處理哪些資料，以及你可以如何控制。"
            />
            <SupportRow
              to="/intent/terms"
              title="使用條款"
              detail="服務範圍、訂閱與第三方平台條款。"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function SupportRow({
  href,
  to,
  title,
  detail,
}: {
  href?: string;
  to?: string;
  title: string;
  detail: string;
}) {
  const content = (
    <>
      <span>
        <span className="block font-semibold">{title}</span>
        <span className="mt-1 block text-sm text-foreground/55">{detail}</span>
      </span>
      <ArrowRight
        className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"
        aria-hidden="true"
      />
    </>
  );
  const className =
    "group flex min-h-20 items-center justify-between gap-5 py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return to ? (
    <Link to={to} className={className}>
      {content}
    </Link>
  ) : (
    <a href={href} className={className}>
      {content}
    </a>
  );
}
