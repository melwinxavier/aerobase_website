import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { AiAgentsPage } from "@/components/pages/AiAgentsPage";

export const metadata: Metadata = {
  title: "AI Agents — PHASES & AeroCraft | Aerobase",
  description:
    "Physics-based AI agents for materials and manufacturing. PHASES is digital metallurgy you can talk to; AeroCraft, for additive, is next.",
};

export default function Page() {
  return (
    <PageShell>
      <AiAgentsPage />
    </PageShell>
  );
}
