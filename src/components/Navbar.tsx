import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { isAuthenticated, logout } from "@/lib/auth";
import { useNavigate } from "react-router-dom";
import { Menu, X, GraduationCap, LogOut } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
  { to: "/admin", label: "Admin" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const authed = isAuthenticated();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-heading text-lg font-bold text-primary">
          <GraduationCap className="h-6 w-6" />
          StudentPortal
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary ${
                location.pathname === l.to ? "bg-secondary text-primary font-semibold" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          {authed ? (
            <button onClick={handleLogout} className="ml-2 flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-destructive hover:bg-secondary">
              <LogOut className="h-4 w-4" /> Logout
            </button>
          ) : (
            <Link to="/login" className="ml-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90">
              Login
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-card md:hidden animate-fade-in">
          <div className="container flex flex-col gap-1 py-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  location.pathname === l.to ? "bg-secondary text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            {authed ? (
              <button onClick={() => { handleLogout(); setOpen(false); }} className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-destructive">
                <LogOut className="h-4 w-4" /> Logout
              </button>
            ) : (
              <Link to="/login" onClick={() => setOpen(false)} className="rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground">
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
