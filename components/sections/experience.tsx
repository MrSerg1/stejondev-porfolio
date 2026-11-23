import { FadeIn } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data/experience";
import type { Locale } from "@/app/[lang]/dictionaries";

type ExperienceDict = {
  title: string;
  subtitle: string;
  present: string;
};

export function Experience({ lang, t }: { lang: Locale; t: ExperienceDict }) {
  return (
    <section id="experience" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="04" title={t.title} subtitle={t.subtitle} />
        <ol className="relative ml-2 space-y-12 border-l border-border pl-8">
          {experience.map((item, index) => (
            <FadeIn key={item.company} delay={index * 0.1}>
              <li className="relative">
                <span className="absolute -left-[41px] top-1.5 size-3 rounded-full border-2 border-accent bg-background" />
                <p className="font-mono text-xs text-accent">
                  {item.period}
                  {item.current ? ` — ${t.present}` : ""}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">
                  {item.role[lang]}
                  <span className="text-muted"> · {item.company}</span>
                </h3>
                <p className="mt-2 leading-relaxed text-muted">
                  {item.summary[lang]}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
