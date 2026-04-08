import { GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container flex flex-col items-center gap-2 py-6 text-center text-sm text-muted-foreground md:flex-row md:justify-between">
        <div className="flex items-center gap-2 font-heading font-semibold text-foreground">
          <GraduationCap className="h-4 w-4 text-primary" />
          StudentPortal
        </div>
        <p>&copy; {new Date().getFullYear()} Student Service Portal. All rights reserved.</p>
      </div>
    </footer>
  );
}
