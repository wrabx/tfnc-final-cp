import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home", hash: undefined },
  { to: "/services", label: "Services", hash: undefined },
  { to: "/about", label: "About", hash: undefined },
  { to: "/", label: "Contact", hash: "visit" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-paper ${open ? "" : "md:bg-paper/95 md:backdrop-blur"}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/images/mark.png?v=3" alt="" className="h-12 w-auto shrink-0" width={446} height={360} />
          <span className="truncate whitespace-nowrap font-display text-xl tracking-tight sm:text-2xl">
            Travel Fitness LLC
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              className="text-sm font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="visit"
            className="inline-flex h-11 items-center rounded-full bg-pine px-5 text-sm font-semibold text-cream"
          >
            Request a consult
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-16 z-50 flex flex-col overflow-y-auto overscroll-contain bg-paper px-5 pt-6 md:hidden"
          aria-label="Mobile"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              className="flex h-14 items-center border-b border-line font-display text-3xl"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+19364990032"
            className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-pine text-base font-semibold text-cream"
          >
            Call (936) 499-0032
          </a>
        </nav>
      ) : null}
    </header>
  );
}
