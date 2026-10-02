import { Link, createFileRoute } from "@tanstack/react-router";
import { cities, email, phoneDisplay, phoneHref } from "@/data/content";
import { InquiryForm } from "@/components/inquiry-form";
import { RatesTable } from "@/components/rates-table";
import { Reveal } from "@/components/reveal";
import { SiteFrame } from "@/components/site-frame";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteFrame>
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 md:grid-cols-2 md:py-16">
        <div>
          <p className="hero-rise text-sm font-semibold uppercase tracking-widest text-pine">
            North Carolina Triad
          </p>
          <h1 className="hero-rise mt-3 font-display text-5xl leading-none md:text-6xl" style={{ animationDelay: "240ms" }}>
            Bringing the gym to you.
          </h1>
          <p className="hero-rise mt-5 max-w-xl text-lg text-muted" style={{ animationDelay: "240ms" }}>
            In-home training in {cities}. Sessions at your home, at Lawndale
            Swim & Tennis Club in Greensboro, or through virtual coaching and
            online programming.
          </p>
          <div className="hero-rise mt-7 flex flex-row flex-nowrap items-center gap-2" style={{ animationDelay: "360ms" }}>
            <a
              href="#visit"
              className="inline-flex h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-pine px-3 text-xs font-semibold text-cream sm:h-12 sm:px-6 sm:text-sm"
            >
              Request a consultation
            </a>
            <Link
              to="/services"
              className="inline-flex h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-ink px-3 text-xs font-semibold sm:h-12 sm:px-6 sm:text-sm"
            >
              See services & rates
            </Link>
          </div>
        </div>
        <figure className="flex items-center justify-center">
          <img
            src="/images/mark.png?v=3"
            alt="Travel Fitness LLC logo"
            className="hero-rise w-full max-w-md"
            style={{ animationDelay: "200ms" }}
            width={446}
            height={360}
          />
        </figure>
      </section>

      <section className="bg-pine text-cream">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 md:grid-cols-3 md:py-16">
          {[
            ["Find what moves you", "Customized workout plans and virtual coaching sessions."],
            ["1-on-1 training", "Your home, or Lawndale Swim & Tennis Club. Equipment comes with the trainer."],
            ["Partner & group", "Expert guidance at a lower rate, with room to train together."],
          ].map(([title, copy], index) => (
            <Reveal key={title} delay={index * 140}>
              <article className="border-t border-foam/30 pt-4 text-center">
                <h2 className="font-display text-2xl">{title}</h2>
                <p className="mt-2 text-sm text-cream">{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-2 md:py-20">
        <Reveal zoom>
          <img
            src="/images/grayson.jpg?v=7"
            alt="Grayson Brown with his dog"
            className="w-full"
            width={513}
            height={510}
          />
        </Reveal>
        <Reveal delay={160}>
          <p className="text-sm font-semibold uppercase tracking-widest text-pine">Coach</p>
          <h2 className="mt-3 font-display text-4xl">Grayson Brown</h2>
          <p className="mt-1 text-muted">Owner / Personal Trainer · NASM CPT · CPR/AED</p>
          <p className="mt-4 text-lg text-muted">
            Six-plus years coaching in campus, boutique, and corporate gyms, now
            bringing that same work to the Triad. Science-backed plans, clear
            coaching, and sessions that fit a real week.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex h-12 w-fit items-center justify-center rounded-full border border-ink px-6 text-sm font-semibold"
          >
            About Grayson
          </Link>
        </Reveal>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-14 md:grid-cols-2 md:py-16">
          <Reveal>
            <h2 className="font-display text-4xl">Straightforward session rates.</h2>
            <p className="mt-4 text-muted">
              Private, semi-private, or group. Thirty or sixty minutes. No
              membership required.
            </p>
            <Link
              to="/services"
              className="mt-6 inline-flex h-12 w-fit items-center justify-center rounded-full border border-ink px-6 text-sm font-semibold"
            >
              Services
            </Link>
          </Reveal>
          <Reveal delay={160}>
            <RatesTable />
          </Reveal>
        </div>
      </section>

      <section id="visit" className="scroll-mt-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-pine">Contact</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Request a consultation.</h2>
            <p className="mt-4 text-lg text-muted">
              Fill in your details and Grayson will be in touch. You can also
              call or email directly.
            </p>
            <p className="mt-6">
              <a className="text-lg font-semibold" href={phoneHref}>
                {phoneDisplay}
              </a>
            </p>
            <p>
              <a className="font-medium" href={`mailto:${email}`}>
                {email}
              </a>
            </p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </SiteFrame>
  );
}
