import Link from "next/link";

interface SectionHeadingProps {
  title: React.ReactNode;
  sub?: string;
  linkLabel?: string;
  href?: string;
}

export function SectionHeading({ title, sub, linkLabel, href }: SectionHeadingProps) {
  return (
    <div className="mb-7 flex items-start justify-between gap-3 md:mb-10 md:items-end">
      <div>
        <h2 className="type-heading">{title}</h2>
        {sub && <p className="mt-3 max-w-[19em] type-subtitle text-mute md:max-w-none">{sub}</p>}
      </div>
      {linkLabel && href && (
        <Link
          href={href}
          className="mt-2 inline-flex min-h-11 items-center whitespace-nowrap type-link text-[#535359] hover:text-black md:mt-0"
        >
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}
