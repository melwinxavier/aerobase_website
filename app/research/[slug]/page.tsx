import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/site/PageShell";
import { ProjectDetailPage } from "@/components/pages/ProjectDetailPage";
import { PROJECTS, getProject } from "@/lib/projects";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const p = getProject(params.slug);
  if (!p) return { title: "Project not found | Aerobase" };
  return {
    title: `${p.name} — ${p.funder} ${p.grant} | Aerobase Research`,
    description: p.summary,
  };
}

export default function Page({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <PageShell>
      <ProjectDetailPage project={project} />
    </PageShell>
  );
}
