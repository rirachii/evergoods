import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [state, setState] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setState({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold md:text-4xl">Contact</h1>
          <p className="mt-3 text-foreground/70">Tell us about your project and we’ll get back within 1 business day.</p>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Name</label>
                <Input required value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <Input type="email" required value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Company</label>
                <Input value={state.company} onChange={(e) => setState({ ...state, company: e.target.value })} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Message</label>
                <Textarea rows={5} required value={state.message} onChange={(e) => setState({ ...state, message: e.target.value })} />
              </div>
              <Button disabled={status === "loading"} className="rounded-full px-6">
                {status === "loading" ? "Sending..." : "Send message"}
              </Button>
              {status === "success" && <p className="text-sm text-green-600">Thanks! We’ll be in touch shortly.</p>}
              {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold">Prefer email?</h2>
          <p className="mt-2 text-sm text-foreground/70">Reach us at hello@evergoods.dev</p>
          <div className="mt-6 text-sm text-foreground/60">We typically reply within one business day.</div>
        </div>
      </div>
    </section>
  );
}
