import Link from "next/link";
import { lang } from "next/root-params";

import { getDictionary } from "./dictionaries";

export default async function NotFound() {
  const [dict, locale] = await Promise.all([getDictionary(), lang()]);

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-32 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">
        {dict.notFound.title}
      </h1>
      <p className="max-w-md text-muted">{dict.notFound.description}</p>
      <Link
        href={`/${locale}`}
        className="mt-4 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
      >
        {dict.notFound.back}
      </Link>
    </section>
  );
}
