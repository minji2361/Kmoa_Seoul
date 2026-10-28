import Link from "next/link";

interface PageHeadProps {
  title: string;
  description: string;
}

export function PageHead({ title, description }: PageHeadProps) {
  return (
    <section className="bg-soft py-[42px] md:py-[60px] lg:py-[65px]">
      <div className="wrap">
        <div className="mb-5 type-micro text-mute md:mb-6">
          <Link
            href="/"
            className="relative hover:text-ink after:absolute after:-inset-x-2 after:-inset-y-3 after:content-['']"
          >
            Home
          </Link>{" "}
          › {title}
        </div>
        <h1 className="type-title">{title}</h1>
        <p className="mt-[18px] max-w-[620px] type-subtitle text-mute">{description}</p>
      </div>
    </section>
  );
}
