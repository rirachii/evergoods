import { Button } from "@/components/ui/button";
import {
  DODOSE_APP_STORE_URL,
  INTENT_APP_STORE_URL,
  OOMPF_URL,
  UMAMI_WORLD_URL,
} from "@/lib/apps";
import { ArrowUpRight, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="relative">
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/30 via-[hsl(var(--accent)/0.25)] to-[hsl(144_40%_70%/0.20)] blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-[hsl(144_40%_70%/0.20)] to-primary/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,.8),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,.4),rgba(0,0,0,0))]" />
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 pt-20 md:pt-28 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-foreground/70 backdrop-blur">
            Evergoods Holdings LLC
          </p>
          <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
            Software, accelerated by AI
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-foreground/70 md:text-xl">
            We partner with teams to design, build, and launch AI
            applications—from idea to production—across web, mobile, and the
            modern data stack.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link to="/contact">
              <Button className="rounded-full px-6">Contact</Button>
            </Link>
            <a
              href="#apps"
              className="text-sm font-medium text-primary hover:opacity-80"
            >
              Explore our apps
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="container mx-auto px-4 pb-20">
        <div className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-6 rounded-2xl border border-border/60 bg-background/50 p-6 backdrop-blur md:grid-cols-4">
          {["LLM Apps", "MLOps", "Integrations", "Data Pipelines"].map((t) => (
            <div
              key={t}
              className="text-center text-sm font-semibold tracking-wide text-foreground/70"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Apps */}
      <section className="container mx-auto px-4 pb-24" id="apps">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">Products & apps</h2>
            <p className="mt-3 text-foreground/70">
              Focused tools for clearer routines and more intentional days.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {apps.map((app) => (
              <article
                key={app.name}
                className="flex min-h-64 flex-col rounded-3xl border border-border/70 bg-card p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Smartphone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-foreground/55">
                    {app.category}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold">{app.name}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/70">
                  {app.description}
                </p>
                <a
                  href={app.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-6 text-sm font-semibold text-primary transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`${app.linkLabel} (opens in a new tab)`}
                >
                  {app.linkLabel}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="container mx-auto px-4 pb-28" id="work">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold md:text-4xl">Selected work</h2>
          <Link to="/contact" className="text-sm font-medium text-primary">
            Start a project →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-3xl border border-border/70 bg-card"
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
                  {p.tag}
                </div>
                <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-background to-background p-10 md:p-16">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_80%_-10%,theme(colors.primary/30),transparent_60%)]"
          />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold md:text-3xl">
              Build with Evergoods
            </h3>
            <p className="mt-2 max-w-xl text-foreground/70">
              Tell us about your goals. We’ll propose a clear path from concept
              to shipped product.
            </p>
            <div className="mt-6 flex gap-4">
              <Link to="/contact">
                <Button className="rounded-full px-6">Contact</Button>
              </Link>
              <Link
                to="/about"
                className="self-center text-sm font-medium text-primary"
              >
                About us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const projects = [
  {
    tag: "Fintech",
    title: "Personalized insights using multi‑agent workflows",
    desc: "Automated analysis across customer portfolios with human‑in‑the‑loop review.",
    image: "/project1.png",
  },
  {
    tag: "SaaS",
    title: "Knowledge assistant with enterprise RAG",
    desc: "Query unstructured docs with guardrails, observability, and feedback loops.",
    image: "/project2.png",
  },
];

const apps = [
  {
    name: "DoDose",
    category: "iPhone app",
    description:
      "A private place to record GLP-1 routines, reminders, symptoms, meals, hydration, and progress.",
    url: DODOSE_APP_STORE_URL,
    linkLabel: "View on the App Store",
  },
  {
    name: "Intent",
    category: "iPhone app",
    description:
      "Open social platforms with a purpose and stay clear of distracting feeds, Reels, and Shorts.",
    url: INTENT_APP_STORE_URL,
    linkLabel: "View on the App Store",
  },
  {
    name: "Oompf",
    category: "Speaking practice",
    description:
      "Private speaking reps and quick AI feedback for interviews, meetings, presentations, and hard conversations.",
    url: OOMPF_URL,
    linkLabel: "Visit Oompf",
  },
  {
    name: "Foodex by Umami World",
    category: "Food discovery",
    description:
      "Preserve food memories, discover new flavors, and understand the cultures behind what you eat.",
    url: UMAMI_WORLD_URL,
    linkLabel: "Visit Umami World",
  },
];
