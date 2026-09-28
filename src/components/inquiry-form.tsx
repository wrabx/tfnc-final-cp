import { useState } from "react";
import { z } from "zod";
import { email, places, services } from "@/data/content";

const schema = z.object({
  name: z.string().trim().min(2, "Add your name."),
  email: z.string().trim().email("Use a real email."),
  phone: z.string().trim().min(7, "Add a phone number.").max(20, "That number looks too long."),
  service: z.string().min(1, "Pick a service."),
  place: z.string().min(1, "Pick where to meet."),
  note: z.string().trim().max(500, "Keep the note under 500 characters."),
});

type Fields = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  service: "",
  place: "",
  note: "",
};

function message(fields: Fields) {
  return [
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Email: ${fields.email}`,
    `Service: ${fields.service}`,
    `Where: ${fields.place}`,
    fields.note ? `Note: ${fields.note}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function mailto(fields: Fields) {
  const subject = `Consultation request — ${fields.service}`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message(fields))}`;
}

export function InquiryForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<Fields | null>(null);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const parsed = schema.safeParse(fields);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as keyof Fields]) {
          next[key as keyof Fields] = issue.message;
        }
      }
      setErrors(next);
      return;
    }
    setSent(parsed.data);
    window.location.href = mailto(parsed.data);
  }

  if (sent) {
    return (
      <div className="rounded-card border border-line bg-paper p-6">
        <h3 className="font-display text-3xl">Ready to send, {sent.name.split(" ")[0]}.</h3>
        <p className="mt-3 text-muted">
          Your email app should open a message to {email}. If it did not, use the button below
          or call (936) 499-0032.
        </p>
        <pre className="mt-5 overflow-x-auto rounded-xl bg-cream p-4 text-sm leading-relaxed">
          {message(sent)}
        </pre>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={mailto(sent)}
            className="inline-flex h-12 items-center justify-center rounded-full bg-pine px-5 text-sm font-semibold text-cream"
          >
            Open email
          </a>
          <button
            type="button"
            onClick={() => setSent(null)}
            className="inline-flex h-12 items-center justify-center rounded-full border border-line px-5 text-sm font-semibold"
          >
            Edit request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <Field label="Full name" error={errors.name} htmlFor="name">
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={fields.name}
          onChange={(event) => update("name", event.target.value)}
          className={controlClass(Boolean(errors.name))}
        />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" error={errors.phone} htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={fields.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={controlClass(Boolean(errors.phone))}
          />
        </Field>
        <Field label="Email" error={errors.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={fields.email}
            onChange={(event) => update("email", event.target.value)}
            className={controlClass(Boolean(errors.email))}
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Service" error={errors.service} htmlFor="service">
          <select
            id="service"
            name="service"
            value={fields.service}
            onChange={(event) => update("service", event.target.value)}
            className={controlClass(Boolean(errors.service))}
          >
            <option value="">Select</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Where" error={errors.place} htmlFor="place">
          <select
            id="place"
            name="place"
            value={fields.place}
            onChange={(event) => update("place", event.target.value)}
            className={controlClass(Boolean(errors.place))}
          >
            <option value="">Select</option>
            {places.map((place) => (
              <option key={place} value={place}>
                {place}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Subject" error={errors.note} htmlFor="note">
        <textarea
          id="note"
          name="note"
          rows={4}
          value={fields.note}
          onChange={(event) => update("note", event.target.value)}
          className={controlClass(Boolean(errors.note), true)}
          placeholder="Goals, schedule, injuries the trainer should know about…"
        />
      </Field>
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-full bg-pine px-6 text-sm font-semibold text-cream"
      >
        Send request
      </button>
    </form>
  );
}

function controlClass(invalid: boolean, area = false) {
  return [
    area ? "min-h-32 py-3" : "h-12",
    "w-full rounded-xl border bg-cream px-4 text-base text-ink",
    "placeholder:text-muted",
    invalid ? "border-clay" : "border-line",
  ].join(" ");
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="grid gap-2 text-sm font-medium">
      {label}
      {children}
      {error ? (
        <span className="text-sm font-normal text-clay" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
