import Link from "next/link";

interface PageHeadProps {
  title: string;
  description: string;
}

export function PageHead({ title, description }: PageHeadProps) {
  return (
    <section className="bg-soft py-[42px] md:py-[60px] lg:py-[65px]">
      <div className="wrap">
        <div className="mb-5 text-[9px] text-[#99999f] md:mb-6 md:text-[10px]">
          <Link
            href="/"
            className="relative hover:text-ink after:absolute after:-inset-x-2 after:-inset-y-3 after:content-['']"
          >
            Home
          </Link>{" "}
          › {title}
        </div>
        <h1 className="text-[45px] font-semibold leading-[1.18] tracking-[-2px] md:text-[64px] md:tracking-[-3px]">
          {title}
        </h1>
        <p className="mt-[18px] max-w-[620px] text-[13px] text-mute md:text-[15px]">
          {description}
        </p>
      </div>
    </section>
  );
}
