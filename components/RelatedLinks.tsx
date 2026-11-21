import Link from "next/link";

export type RelatedLink = { href: string; label: string };

export default function RelatedLinks({
  title = "Informații utile",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="rounded-3xl border border-sand bg-cream/60 px-6 py-7 md:px-10">
          <h2 className="font-display text-xl font-semibold text-pine-deep">{title}</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {links.map((l) => (
              <li key={l.href + l.label}>
                <Link
                  href={l.href}
                  className="inline-flex items-center gap-2 rounded-full border border-sand bg-white px-5 py-2.5 text-[15px] font-medium text-pine-deep transition-colors hover:border-pine hover:text-pine"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
