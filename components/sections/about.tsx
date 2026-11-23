import { FadeIn } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";

type AboutDict = {
  title: string;
  paragraphs: string[];
};

export function About({ about }: { about: AboutDict }) {
  return (
    <section id="about" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title={about.title} />
        <FadeIn className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
