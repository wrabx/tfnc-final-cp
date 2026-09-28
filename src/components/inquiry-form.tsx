import { useState } from "react";
import { email, phoneDisplay, places, services } from "@/data/content";
import { inquirySchema, submitInquiry, type Inquiry } from "@/lib/inquiry";

type Fields = Inquiry;
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
  const [pending, setPending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const parsed = inquirySchema.safeParse(fields);
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
    setPending(true);
    setFormError(null);
    try {
      const result = await submitInquiry({ data: parsed.data });
      if (result.ok) {
        setSent(parsed.data);
        return;
      }
      if (result.reason === "busy") {
        setFormError("The inbox is busy. Wait a minute and try again, or email us directly.");
      } else {
        setFormError(`That did not send. Try again, or email ${email}.`);
      }
    } catch {
      setFormError(`That did not send. Try again, or email ${email}.`);
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-card border border-line bg-paper p-6">
        <h3 className="font-display text-3xl">Sent, {sent.name.split(" ")[0]}.</h3>
        <p className="mt-3 text-muted">
          This request went to {email}. Grayson will be in touch. You can also call {phoneDisplay}.
        </p>
        <pre className="mt-5 overflow-x-auto rounded-xl bg-cream p-4 text-sm leading-relaxed">
          {message(sent)}
        </pre>
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
      {formError ? (
        <p className="text-sm text-clay" role="alert">
          {formError}{" "}
          <a className="underline" href={mailto(fields)}>
            Open an email instead
          </a>
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 items-center justify-center rounded-full bg-pine px-6 text-sm font-semibold text-cream disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send request"}
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
