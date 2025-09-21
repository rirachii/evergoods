export default function About() {
  return (
    <div className="relative">
      <section className="container mx-auto px-4 pt-16 pb-12 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">About Evergoods</h1>
          <p className="mt-4 text-lg text-foreground/70">
            Evergoods Holdings LLC is a software studio focused on AI-first products. We combine design, engineering, and rigorous evaluation to ship reliable, value‑driven applications.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="text-3xl font-bold">{s.value}</div>
              <div className="mt-1 text-sm text-foreground/70">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-3xl text-center text-sm text-foreground/60">
          We work with founders and product teams to turn ideas into shipped features, fast.
        </div>
      </section>
    </div>
  );
}

const stats = [
  { label: "Products launched", value: "25+" },
  { label: "Avg. time to MVP", value: "6–8 weeks" },
  { label: "Focus", value: "AI apps & platforms" },
];
