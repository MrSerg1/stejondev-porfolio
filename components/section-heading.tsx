import { FadeIn } from "@/components/motion-primitives";

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <FadeIn className="mb-12">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 text-muted">{subtitle}</p> : null}
    </FadeIn>
  );
}
