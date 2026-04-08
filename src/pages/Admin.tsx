import PageShell from "@/components/PageShell";
import { getContacts, type ContactSubmission } from "@/lib/database";
import { isAuthenticated } from "@/lib/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RefreshCw, Inbox } from "lucide-react";

export default function Admin() {
  const navigate = useNavigate();
  const [data, setData] = useState<ContactSubmission[]>([]);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
      return;
    }
    setData(getContacts());
  }, [navigate]);

  const refresh = () => setData(getContacts());

  if (!isAuthenticated()) return null;

  return (
    <PageShell>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="font-heading text-3xl font-bold md:text-4xl text-gradient">Admin Panel</h1>
              <p className="mt-1 text-muted-foreground">All contact form submissions fetched from the database.</p>
            </div>
            <button onClick={refresh} className="inline-flex items-center gap-2 rounded-lg border bg-card px-4 py-2 text-sm font-medium transition hover:bg-secondary">
              <RefreshCw className="h-4 w-4" /> Refresh
            </button>
          </div>

          {data.length === 0 ? (
            <div className="mt-16 flex flex-col items-center text-center text-muted-foreground">
              <Inbox className="h-12 w-12" />
              <p className="mt-3 font-heading font-semibold">No submissions yet</p>
              <p className="text-sm">Contact form entries will appear here.</p>
            </div>
          ) : (
            <div className="mt-8 overflow-x-auto rounded-xl border bg-card shadow-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-secondary/50">
                    <th className="whitespace-nowrap px-4 py-3 text-left font-semibold">#</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-semibold">Name</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-semibold">Email</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-semibold">Message</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((c, i) => (
                    <tr key={c.id} className="border-b last:border-0 hover:bg-secondary/30 transition-colors">
                      <td className="px-4 py-3 text-muted-foreground">{i + 1}</td>
                      <td className="px-4 py-3 font-medium">{c.name}</td>
                      <td className="px-4 py-3 text-primary">{c.email}</td>
                      <td className="max-w-xs truncate px-4 py-3 text-muted-foreground">{c.message}</td>
                      <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                        {new Date(c.submittedAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
