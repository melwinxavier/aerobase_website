import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { ResearchPage } from "@/components/pages/ResearchPage";

export const metadata: Metadata = {
  title: "Research — 8 EU & Swedish-funded projects | Aerobase",
  description:
    "Aerobase is a partner in seven funded projects and the coordinator of an eighth — GENMAT, FlexCrash, CiSMA, GEAR-UP, ALABAMA, RESTORE, UPBEAT and TI-TEX.",
};

export default function Page() {
  return (
    <PageShell>
      <ResearchPage />
    </PageShell>
  );
}
