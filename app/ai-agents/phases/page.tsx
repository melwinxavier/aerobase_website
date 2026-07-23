import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { PhasesProductPage } from "@/components/pages/PhasesProductPage";

export const metadata: Metadata = {
  title: "PHASES — Digital Metallurgy Platform | Aerobase",
  description:
    "PHASES connects material and process inputs to computed material state — one platform with a materials database, a chat-agent front end and four process-specific simulators.",
};

export default function Page() {
  return (
    <PageShell>
      <PhasesProductPage />
    </PageShell>
  );
}
