import { useEffect, useState, type ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { phoneDisplay, phoneHref } from "@/data/content";

export function SiteFrame({ children }: { children: ReactNode }) {
  const [showBar, setShowBar] = useState(true);

  useEffect(() => {
    const visit = document.getElementById("visit");
    if (!visit) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowBar(!entry.isIntersecting),
      { threshold: 0.12 },
    );
    observer.observe(visit);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pb-24 md:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-cream focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      {showBar ? (
        <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
          <a
            href={phoneHref}
            className="inline-flex h-12 items-center justify-center rounded-full border border-ink text-sm font-semibold"
          >
            {phoneDisplay}
          </a>
          <a
            href="/#visit"
            className="inline-flex h-12 items-center justify-center rounded-full bg-pine text-sm font-semibold text-cream"
          >
            Request
          </a>
        </div>
      ) : null}
    </div>
  );
}
