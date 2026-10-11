import type { CSSProperties, ReactNode } from "react";

// A full-bleed section in one solid colour. When `from` is given, the top
// edge blends out of the previous band's colour so sections melt into each
// other instead of meeting at a hard line.
export function Band({
  color,
  from,
  blend = 160,
  className = "",
  children,
  ...rest
}: {
  color: string;
  from?: string;
  blend?: number;
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  const style: CSSProperties = {
    background: from ? `linear-gradient(180deg, ${from} 0px, ${color} ${blend}px, ${color} 100%)` : color,
  };
  return (
    <section className={`relative w-full overflow-hidden ${className}`} style={style} {...rest}>
      {children}
    </section>
  );
}
