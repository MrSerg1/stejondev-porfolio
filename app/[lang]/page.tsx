import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

import { getDictionary, hasLocale, type Locale } from "./dictionaries";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return null;

  const locale = lang as Locale;
  const dict = await getDictionary();

  return (
    <>
      <Hero lang={locale} hero={dict.hero} />
      <About about={dict.about} />
      <Projects lang={locale} t={dict.projects} />
      <Skills lang={locale} t={dict.skills} />
      <Experience lang={locale} t={dict.experience} />
      <Contact lang={locale} t={dict.contact} />
    </>
  );
}
