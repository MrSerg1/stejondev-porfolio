import { ExternalLink } from "lucide-react";

import { FadeIn } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data/projects";
import type { Locale } from "@/app/[lang]/dictionaries";

type ProjectsDict = {
  title: string;
  subtitle: string;
  demo: string;
  code: string;
};

export function Projects({ lang, t }: { lang: Locale; t: ProjectsDict }) {
  return (
    <section id="projects" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title={t.title} subtitle={t.subtitle} />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent/60">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  {project.featured ? (
                    <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                      ★
                    </span>
                  ) : null}
                </div>

                <p className="mt-3 flex-1 leading-relaxed text-muted">
                  {project.description[lang]}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-5 text-sm font-medium">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                    >
                      {t.demo}
                      <ExternalLink className="size-3.5" />
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                    >
                      {t.code}
                      <ExternalLink className="size-3.5" />
                    </a>
                  ) : null}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
