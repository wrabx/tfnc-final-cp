import { cities, email, hours, phoneDisplay, phoneHref, youtube } from "@/data/content";
import { YoutubeLogo } from "@/components/youtube-logo";

export function SiteFooter() {
  return (
    <footer className="bg-pine-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Travel Fitness LLC</p>
          <p className="mt-2 text-sm text-foam">
            Bringing the gym to you. {cities}.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-foam">Hours</p>
          <ul className="mt-3 grid gap-1 text-sm">
            {hours.map(([day, time]) => (
              <li key={day} className="flex justify-between gap-4">
                <span>{day}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-foam">Contact</p>
          <p className="mt-3">
            <a className="font-semibold" href={phoneHref}>
              {phoneDisplay}
            </a>
          </p>
          <p className="mt-1">
            <a className="break-all" href={`mailto:${email}`}>
              {email}
            </a>
          </p>
          <p className="mt-3">
            <a className="inline-flex items-center gap-2 font-semibold" href={youtube} target="_blank" rel="noopener noreferrer">
              <YoutubeLogo />
              YouTube
            </a>
          </p>
        </div>
      </div>
      <p className="border-t border-foam/20 px-5 py-4 text-center text-xs text-foam">
        © {new Date().getFullYear()} Travel Fitness NC LLC. All rights reserved.
      </p>
    </footer>
  );
}
