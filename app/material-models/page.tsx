import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { MaterialModelsPage } from "@/components/pages/MaterialModelsPage";

export const metadata: Metadata = {
  title: "Material Models — SafeLight, PHASES Plugin, Crystal | Aerobase",
  description:
    "Physics-based material models that drop into the solver you already run — SafeLight for mega-cast crash, the PHASES plugin, Crystal for composites, Caliber and Support.",
};

export default function Page() {
  return (
    <PageShell>
      <MaterialModelsPage />
    </PageShell>
  );
}
