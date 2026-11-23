import type { Locale } from "@/app/[lang]/dictionaries";
import type { Social } from "@/lib/types";

export const authorName = "Sergio";

export const profileImage = "/images/profile.webp";

export const profileImageDark = "/images/profile-dark.webp";

export const email = "sergiotejon96@gmail.com";

export const socials: Social[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/MrSerg1",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/stejondev",
  },
];

export const resume: Record<Locale, string> = {
  es: "/cv/cv-es.pdf",
  en: "/cv/cv-en.pdf",
};

export const getResumeUrl = (locale: Locale) => resume[locale];
