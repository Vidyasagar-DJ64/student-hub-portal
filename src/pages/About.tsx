import PageShell from "@/components/PageShell";
import { Target, Eye, Lightbulb } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission", text: "To simplify student life by providing a centralized platform for all university services, reducing bureaucratic friction and empowering students to focus on what matters — learning." },
  { icon: Eye, title: "Our Vision", text: "A campus where every student can access any service within minutes, not days. We envision technology as the bridge between students and the support they deserve." },
  { icon: Lightbulb, title: "Innovation", text: "Built by students, for students. We continuously iterate based on real feedback to deliver the most intuitive and helpful portal experience." },
];

export default function About() {
  return (
    <PageShell>
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h1 className="font-heading text-3xl font-bold md:text-4xl text-gradient">About StudentPortal</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            StudentPortal started as a capstone project aimed at solving a real problem — the fragmented nature of campus services. Today it serves as a unified hub connecting students with the resources they need.
          </p>

          <div className="mt-12 space-y-8">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 rounded-xl border bg-card p-6 shadow-card animate-fade-in">
                <v.icon className="mt-1 h-8 w-8 shrink-0 text-accent" />
                <div>
                  <h3 className="font-heading text-lg font-semibold">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-secondary p-6">
            <h3 className="font-heading text-lg font-semibold">The Team</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We are a small team of developers and designers passionate about education technology. Our startup is backed by the university's innovation lab and supported by faculty advisors who believe in student-driven solutions.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
