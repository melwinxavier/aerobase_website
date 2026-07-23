import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { HowWeWorkPage } from "@/components/pages/HowWeWorkPage";

export const metadata: Metadata = {
  title: "How We Work — Plan · Test · Calibrate · Deploy | Aerobase",
  description:
    "A material model is only as good as the path that made it. Aerobase plans the campaign, tests at partner facilities, calibrates against real data, and deploys a solver-ready card.",
};

export default function Page() {
  return (
    <PageShell>
      <HowWeWorkPage />
    </PageShell>
  );
}
