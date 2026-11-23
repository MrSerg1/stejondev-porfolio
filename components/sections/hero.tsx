"use client";

import { ArrowDown, FileDown } from "lucide-react";
import { motion, type Variants } from "motion/react";

import { getResumeUrl, siteName } from "@/lib/data/site";
import type { Locale } from "@/app/[lang]/dictionaries";

type HeroDict = {
  badge: string;
  greeting: string;
  role: string;
  tagline: string;
  viewProjects: string;
  downloadResume: string;
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero({ lang, hero }: { lang: Locale; hero: HeroDict }) {
  return (
    <section className="flex flex-1 flex-col justify-center px-6 pb-24 pt-40">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-5xl"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted backdrop-blur-sm"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          {hero.badge}
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 text-5xl font-semibold tracking-tight sm:text-7xl"
        >
          {hero.greeting}{" "}
          <span className="bg-gradient-to-r from-accent via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {siteName}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 font-mono text-xl text-accent sm:text-2xl"
        >
          {hero.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          {hero.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            {hero.viewProjects}
            <ArrowDown className="size-4" />
          </a>
          <a
            href={getResumeUrl(lang)}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {hero.downloadResume}
            <FileDown className="size-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
