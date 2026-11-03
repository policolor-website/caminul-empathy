import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full bg-pine-mist px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-pine ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 font-display text-3xl md:text-[2.6rem] leading-[1.15] font-semibold text-pine-deep">
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-lg text-ink-soft leading-relaxed ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
