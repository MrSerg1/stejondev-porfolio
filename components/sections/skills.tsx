import { FadeIn } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { skillCategories } from "@/lib/data/skills";
import type { Locale } from "@/app/[lang]/dictionaries";

type SkillsDict = {
  title: string;
  subtitle: string;
};

export function Skills({ lang, t }: { lang: Locale; t: SkillsDict }) {
  return (
    <section id="skills" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title={t.title} subtitle={t.subtitle} />
        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.title.en} delay={index * 0.1}>
              <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm">
                <h3 className="font-mono text-sm text-accent">
                  {category.title[lang]}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3 py-1 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
