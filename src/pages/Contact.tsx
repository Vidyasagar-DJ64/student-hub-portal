import PageShell from "@/components/PageShell";
import { addContact } from "@/lib/database";
import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    // Simulate network delay
    setTimeout(() => {
      addContact(form);
      toast.success("Data Saved successfully! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 500);
  };

  return (
    <PageShell>
      <section className="py-16 md:py-24">
        <div className="container max-w-lg">
          <h1 className="font-heading text-3xl font-bold md:text-4xl text-gradient">Contact Us</h1>
          <p className="mt-2 text-muted-foreground">Have a question or feedback? Send us a message and we'll respond promptly.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border bg-card px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                placeholder="John Doe"
                maxLength={100}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border bg-card px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                placeholder="john@university.edu"
                maxLength={255}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border bg-card px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-ring resize-none"
                placeholder="Your message..."
                maxLength={1000}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Sending..." : <><Send className="h-4 w-4" /> Send Message</>}
            </button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
