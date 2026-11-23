import "server-only";

import { notFound } from "next/navigation";
import { lang } from "next/root-params";

import es from "./dictionaries/es.json";
import en from "./dictionaries/en.json";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export type Dictionary = typeof es;

export const dictionaries: Record<Locale, Dictionary> = { es, en };

export const hasLocale = (locale: string): locale is Locale =>
  (locales as readonly string[]).includes(locale);

export const getDictionary = async (): Promise<Dictionary> => {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  return dictionaries[locale];
};
