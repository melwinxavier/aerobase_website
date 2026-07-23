import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { AeroCraftProductPage } from "@/components/pages/AeroCraftProductPage";

export const metadata: Metadata = {
  title: "AeroCraft — Additive Manufacturing (in development) | Aerobase",
  description:
    "AeroCraft is an Aerobase development direction for additive-manufacturing process simulation — connecting process inputs with computed thermal and material response.",
};

export default function Page() {
  return (
    <PageShell>
      <AeroCraftProductPage />
    </PageShell>
  );
}
