import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About | Aerobase Innovations AB",
  description:
    "A Swedish simulation-technology company building physics-based products for automotive, aerospace and manufacturing. Offices in Luleå and Trollhättan.",
};

export default function Page() {
  return (
    <PageShell>
      <AboutPage />
    </PageShell>
  );
}
