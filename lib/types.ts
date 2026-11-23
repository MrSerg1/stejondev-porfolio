export type LocalizedText = {
  es: string;
  en: string;
};

export type Project = {
  title: string;
  description: LocalizedText;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export type ExperienceItem = {
  company: string;
  role: LocalizedText;
  period: string;
  current?: boolean;
  summary: LocalizedText;
};

export type SkillCategory = {
  title: LocalizedText;
  skills: string[];
};

export type SocialId = "github" | "linkedin";

export type Social = {
  id: SocialId;
  label: string;
  href: string;
};
