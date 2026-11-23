import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Camaleonte",
    description: {
      es: "Sitio corporativo para una productora audiovisual. Desarrollo integral del front-end con una arquitectura modular y escalable en React.",
      en: "Corporate website for an audiovisual production company. Full front-end development with a modular and scalable React architecture.",
    },
    tags: ["React", "JavaScript", "CSS"],
    featured: true,
  },
  {
    title: "DevJobs",
    description: {
      es: "Plataforma de búsqueda de empleo para desarrolladores construida con React y Node.js, con funcionalidades de filtrado avanzado.",
      en: "Job search platform for developers built with React and Node.js, featuring advanced filtering capabilities.",
    },
    tags: ["React", "Node.js", "Express"],
  },
  {
    title: "Portfolio",
    description: {
      es: "Este mismo sitio: construido con Next.js 16, TypeScript y Tailwind CSS, con i18n bilingüe, modo oscuro y animaciones con Framer Motion.",
      en: "This very site: built with Next.js 16, TypeScript and Tailwind CSS, with bilingual i18n, dark mode and Framer Motion animations.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/MrSerg1/stejondev-porfolio",
  },
];
