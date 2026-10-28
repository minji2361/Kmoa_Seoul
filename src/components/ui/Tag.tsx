import { cn } from "@/lib/cn";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-[5px] bg-[#f1f1f3] px-1.5 py-[3px] type-caption text-[#797981]",
        className,
      )}
    >
      {children}
    </span>
  );
}
