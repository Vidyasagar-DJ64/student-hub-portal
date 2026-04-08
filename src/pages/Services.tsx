import PageShell from "@/components/PageShell";
import { getServices } from "@/lib/database";
import { useMemo } from "react";

export default function Services() {
  const services = useMemo(() => getServices(), []);

  return (
    <PageShell>
      <section className="py-16 md:py-24">
        <div className="container">
          <h1 className="font-heading text-3xl font-bold md:text-4xl text-gradient">Our Services</h1>
          <p className="mt-2 text-muted-foreground">Browse the services available through the Student Service Portal.</p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((s, i) => (
              <div
                key={s.id}
                className="group rounded-xl border bg-card p-5 shadow-card transition hover:shadow-elevated animate-fade-in"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="text-3xl">{s.icon}</span>
                <span className="mt-3 inline-block rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                  {s.category}
                </span>
                <h3 className="mt-2 font-heading text-base font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
