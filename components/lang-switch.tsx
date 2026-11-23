"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LangSwitch({ lang }: { lang: string }) {
  const pathname = usePathname() ?? "";
  const target = lang === "es" ? "en" : "es";
  const targetPath = pathname.replace(/^\/(es|en)(?=\/|$)/, `/${target}`);

  return (
    <Link
      href={targetPath}
      aria-label={`Switch to ${target}`}
      className="rounded-full border border-border px-3 py-1.5 font-mono text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {target.toUpperCase()}
    </Link>
  );
}
