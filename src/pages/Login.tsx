import PageShell from "@/components/PageShell";
import { login } from "@/lib/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Lock } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.username.trim() || !form.password.trim()) {
      toast.error("Please enter both username and password.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      if (login(form.username, form.password)) {
        toast.success("Logged in successfully!");
        navigate("/admin");
      } else {
        toast.error("Invalid credentials. Try admin / admin123");
      }
      setLoading(false);
    }, 400);
  };

  return (
    <PageShell>
      <section className="flex flex-1 items-center justify-center py-16 md:py-24">
        <div className="w-full max-w-sm">
          <div className="rounded-2xl border bg-card p-8 shadow-elevated animate-fade-in">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h1 className="mt-4 font-heading text-2xl font-bold">Admin Login</h1>
              <p className="mt-1 text-sm text-muted-foreground">Sign in to access the admin panel</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="username" className="mb-1.5 block text-sm font-medium">Username</label>
                <input
                  id="username"
                  type="text"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                  placeholder="admin"
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-1.5 block text-sm font-medium">Password</label>
                <input
                  id="password"
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Demo: <span className="font-medium text-foreground">admin</span> / <span className="font-medium text-foreground">admin123</span>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
