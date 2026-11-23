import { Mail } from "lucide-react";

import { FadeIn } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { email, getResumeUrl } from "@/lib/data/site";
import type { Locale } from "@/app/[lang]/dictionaries";

type ContactDict = {
  title: string;
  subtitle: string;
  emailMe: string;
  downloadResume: string;
};

export function Contact({ lang, t }: { lang: Locale; t: ContactDict }) {
  return (
    <section id="contact" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="05" title={t.title} subtitle={t.subtitle} />
        <FadeIn>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${email}`}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              <Mail className="size-4" />
              {t.emailMe}
            </a>
            <a
              href={getResumeUrl(lang)}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              {t.downloadResume}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
