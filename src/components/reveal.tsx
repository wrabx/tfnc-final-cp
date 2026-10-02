import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  zoom = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  zoom?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${shown ? "reveal-in" : "reveal-wait"}`}
      style={shown && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {zoom ? (
        <div className="overflow-hidden rounded-card">
          <div className={shown ? "photo-zoom" : undefined}>{children}</div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
