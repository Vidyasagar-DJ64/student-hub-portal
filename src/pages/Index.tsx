import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Headphones } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Academic Services", desc: "Course registration, transcripts, and academic advising all in one place." },
  { icon: Users, title: "Student Community", desc: "Connect with peers, join clubs, and stay updated on campus events." },
  { icon: Headphones, title: "24/7 Support", desc: "Get help anytime through our contact form or visit us on campus." },
];

export default function Index() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-32">
        <div className="container text-center">
          <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-6xl leading-tight">
            Your Gateway to<br />Student Services
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            Access everything you need — from course registration to career support — in one unified portal.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-lg bg-card px-6 py-3 font-semibold text-primary shadow-elevated transition hover:shadow-float">
              Explore Services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary-foreground/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-center font-heading text-2xl font-bold md:text-3xl">Why Use StudentPortal?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border bg-card p-6 shadow-card transition hover:shadow-elevated animate-fade-in">
                <f.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 font-heading text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
