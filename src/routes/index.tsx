import { Link, createFileRoute } from "@tanstack/react-router";
import { email, phoneDisplay, phoneHref, youtube } from "@/data/content";
import { YoutubeLogo } from "@/components/youtube-logo";
import { InquiryForm } from "@/components/inquiry-form";
import { RatesTable } from "@/components/rates-table";
import { SiteFrame } from "@/components/site-frame";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteFrame>
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 md:grid-cols-2 md:py-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-pine">
            North Carolina Triad
          </p>
          <h1 className="mt-3 font-display text-5xl leading-none md:text-6xl">
            Bringing the gym to you.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Convenient fitness for the Triad. Custom plans at your home, at
            Lawndale Swim & Tennis Club, or through virtual coaching and online
            programming.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#visit"
              className="inline-flex h-12 items-center justify-center rounded-full bg-pine px-6 text-sm font-semibold text-cream"
            >
              Request a consultation
            </a>
            <Link
              to="/services"
              className="inline-flex h-12 items-center justify-center rounded-full border border-ink px-6 text-sm font-semibold"
            >
              See services & rates
            </Link>
          </div>
        </div>
        <figure className="flex items-center justify-center">
          <img
            src="/images/mark.png?v=3"
            alt="Travel Fitness LLC logo"
            className="w-full max-w-md"
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
          ].map(([title, copy]) => (
            <article key={title} className="border-t border-foam/30 pt-4">
              <h2 className="font-display text-2xl">{title}</h2>
              <p className="mt-2 text-sm text-cream">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-2 md:py-20">
        <img
          src="/images/grayson.jpg"
          alt="Grayson Brown, owner and personal trainer"
          className="max-h-screen w-full rounded-card object-cover object-top"
          width={912}
          height={1400}
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-pine">Coach</p>
          <h2 className="mt-3 font-display text-4xl">Grayson Brown</h2>
          <p className="mt-1 text-muted">Owner / Personal Trainer · NASM CPT · CPR/AED</p>
          <p className="mt-4 text-lg text-muted">
            Six-plus years coaching in campus, boutique, and corporate gyms, now
            bringing that same work to the Triad. Science-backed plans, clear
            coaching, and sessions that fit a real week.
          </p>
          <Link to="/about" className="mt-6 inline-flex h-12 items-center text-sm font-semibold text-pine">
            About Grayson
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-14 md:grid-cols-2 md:py-16">
          <div>
            <h2 className="font-display text-4xl">Straightforward session rates.</h2>
            <p className="mt-4 text-muted">
              Private, semi-private, or group. Thirty or sixty minutes. No
              membership required.
            </p>
            <Link to="/services" className="mt-6 inline-flex h-12 items-center text-sm font-semibold text-pine">
              Full service details
            </Link>
          </div>
          <RatesTable />
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
            <p className="mt-3">
              <a className="inline-flex items-center gap-2 font-semibold text-pine" href={youtube} target="_blank" rel="noopener noreferrer">
                <YoutubeLogo />
                Watch on YouTube
              </a>
            </p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </SiteFrame>
  );
}
