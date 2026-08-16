import type { ReactNode } from "react";

export function LegalDocument({
  title,
  summary,
  updatedAt,
  children,
}: {
  title: string;
  summary: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <div lang="zh-Hant-TW">
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45rem_28rem_at_20%_0%,hsl(var(--primary)/0.16),transparent_65%)]"
        />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-primary">
              INTENT · 回神
            </p>
            <h1 className="mt-5 text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-foreground/70 md:text-lg">
              {summary}
            </p>
            <p className="mt-8 text-sm text-foreground/55">
              生效及更新日期：{updatedAt}
            </p>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl space-y-12">{children}</div>
      </article>
    </div>
  );
}

export function LegalSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={`legal-section-${number}`}
      className="grid gap-4 border-t border-border pt-7 md:grid-cols-[7rem_1fr]"
    >
      <p className="text-sm font-semibold text-primary">
        {number.padStart(2, "0")}
      </p>
      <div>
        <h2
          id={`legal-section-${number}`}
          className="text-2xl font-bold tracking-tight"
        >
          {title}
        </h2>
        <div className="mt-4 space-y-4 text-[15px] leading-7 text-foreground/70 md:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return (
    <ul className="ml-5 list-disc space-y-2 marker:text-primary/60">
      {children}
    </ul>
  );
}

export function ExternalLegalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {children}
    </a>
  );
}

export function LegalEmail({ address }: { address: string }) {
  return (
    <a
      className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      href={`mailto:${address}`}
    >
      {address}
    </a>
  );
}
