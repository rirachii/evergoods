export default function PlaceholderSection({
  title = "Coming soon",
  subtitle = "Tell me what to include on this page and I'll build it next.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="container mx-auto py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          {title}
        </h1>
        <p className="mt-4 text-foreground/70">{subtitle}</p>
      </div>
    </section>
  );
}
