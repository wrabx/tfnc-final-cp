import { Link, createFileRoute } from "@tanstack/react-router";
import { cities } from "@/data/content";
import { InquiryForm } from "@/components/inquiry-form";
import { RatesTable } from "@/components/rates-table";
import { Reveal } from "@/components/reveal";
import { SiteFrame } from "@/components/site-frame";

export const Route = createFileRoute("/services")({ component: Services });

const offers = [
  {
    title: "1-on-1 training",
    image: "/images/mark.png?v=3",
    alt: "Travel Fitness LLC logo",
    fit: "contain" as const,
    copy: "Enjoy one-on-one sessions in the comfort of your own home, or meet at Lawndale Swim & Tennis Club. Grayson brings the expertise and equipment to guide you safely and effectively.",
    points: ["Personalized attention", "Convenience", "Proven results", "Private and focused"],
  },
  {
    title: "Semi-private & group",
    image: "/images/sidewalk.jpg",
    alt: "Training together outdoors",
    copy: "A more affordable way to train while still getting expert guidance. The balance of personal attention and a little company.",
    points: ["Personal attention", "Motivating environment", "Affordable and effective"],
  },
  {
    title: "Virtual & online programming",
    image: "/images/kit.jpg",
    alt: "A compact training kit for sessions away from a gym",
    copy: "Face-to-face when you can, and a plan that still works when you cannot. Virtual sessions and flexible online programs built around your schedule.",
    points: ["Virtual coaching", "Online programming", "Plans that travel with you"],
  },
];

function Services() {
  return (
    <SiteFrame>
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-pine">Services</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl">
          Personalized training that fits the week you actually have.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          In-home visits in {cities}. Face-to-face guidance, virtual sessions,
          or flexible online programs. One option for the goal, not a stack of
          packages.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-4 md:grid-cols-2">
        <RatesTable />
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-3xl">Same coach. Three ways to train.</h2>
          <p className="mt-3 text-muted">
            Private sessions are one client. Semi-private shares the hour.
            Group keeps the rate lowest when you want to train with others.
          </p>
          <Link to="/" hash="visit" className="mt-6 inline-flex h-12 w-fit items-center rounded-full bg-pine px-6 text-sm font-semibold text-cream">
            Contact us
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-12 md:py-16">
        {offers.map((offer, index) => (
          <Reveal key={offer.title} delay={index * 140}>
          <article
            className="grid overflow-hidden rounded-card border border-line bg-cream md:grid-cols-2"
          >
            <img
              src={offer.image}
              alt={offer.alt}
              className={
                "fit" in offer
                  ? "aspect-video h-full w-full bg-paper object-contain p-8"
                  : "aspect-video h-full w-full object-cover"
              }
            />
            <div className="p-6">
              <h2 className="font-display text-3xl">{offer.title}</h2>
              <p className="mt-3 text-muted">{offer.copy}</p>
              <ul className="mt-4 grid gap-2 text-sm">
                {offer.points.map((point) => (
                  <li key={point} className="border-t border-line pt-2">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
          </Reveal>
        ))}
      </section>

      <section id="visit" className="scroll-mt-20 border-t border-line bg-foam">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">Let's get stronger together.</h2>
            <p className="mt-4 text-muted">
              Tell us the service and where you want to train. The note goes to
              travelfitness@gmail.com.
            </p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </SiteFrame>
  );
}
