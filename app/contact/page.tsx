import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact | Aerobase",
  description:
    "Start a project, request a trial, or ask a question. Offices in Luleå and Trollhättan, Sweden — contact@aerobase.se.",
};

export default function Page() {
  return (
    <PageShell>
      <ContactPage />
    </PageShell>
  );
}
