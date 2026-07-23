import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

/* Shared wrapper for every inner page: fixed navbar + dark ground + footer. */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen bg-ink">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
