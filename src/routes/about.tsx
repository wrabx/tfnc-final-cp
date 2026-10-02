import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { SiteFrame } from "@/components/site-frame";
import { bio } from "@/data/content";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  return (
    <SiteFrame>
      <article className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-12 md:py-16">
        <div className="order-2 md:order-1 md:col-span-5">
          <Reveal zoom>
            <img
              src="/images/grayson.jpg?v=7"
              alt="Grayson Brown with his dog"
              className="w-full"
              width={513}
              height={510}
            />
          </Reveal>
        </div>
        <div className="order-1 md:order-2 md:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-widest text-pine">About</p>
          <h1 className="mt-3 font-display text-5xl">Grayson Brown</h1>
          <p className="mt-2 text-muted">Owner / Personal Trainer</p>
          <div className="mt-6 grid gap-4 text-lg">
            {bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="mt-8 grid gap-2 text-sm sm:grid-cols-2">
            {[
              "NASM Certified Personal Trainer",
              "CPR / AED",
              "B.S. Exercise & Health Promotion, Louisiana Tech",
              "Former president, Louisiana Tech Powerlifting",
            ].map((item) => (
              <li key={item} className="rounded-xl border border-line bg-cream px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/"
            hash="visit"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-pine px-6 text-sm font-semibold text-cream"
          >
            Request a consultation
          </Link>
        </div>
      </article>
    </SiteFrame>
  );
}
