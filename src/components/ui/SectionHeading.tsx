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
        <h2 className="text-[29px] font-semibold leading-tight tracking-[-1.25px] md:text-[36px] lg:text-[43px] lg:tracking-[-1.9px]">
          {title}
        </h2>
        {sub && (
          <p className="mt-3 max-w-[265px] text-xs leading-[1.7] text-mute md:max-w-none md:text-[15px]">
            {sub}
          </p>
        )}
      </div>
      {linkLabel && href && (
        <Link
          href={href}
          className="mt-2 inline-flex min-h-11 items-center whitespace-nowrap text-[10px] font-medium text-[#535359] hover:text-black md:mt-0 md:text-[13px]"
        >
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}
