import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { email } from "@/data/content";

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Add your name."),
  email: z.string().trim().regex(/^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/, "Enter a valid email, like name@email.com."),
  phone: z.string().trim().regex(/^\d{3}-\d{3}-\d{4}$/, "Use a 10-digit phone number."),
  service: z.string().min(1, "Pick a service."),
  place: z.string().min(1, "Pick where to meet."),
  note: z.string().trim().max(500, "Keep the note under 500 characters."),
});

export type Inquiry = z.infer<typeof inquirySchema>;

export const submitInquiry = createServerFn({ method: "POST" })
  .validator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        _replyto: data.email,
        _subject: `Consultation request — ${data.service}`,
        _template: "box",
        _captcha: "false",
        phone: data.phone,
        service: data.service,
        where: data.place,
        message: data.note || "(no note)",
      }),
    });

    const body = (await response.json().catch(() => null)) as {
      success?: boolean | string;
      message?: string;
    } | null;

    const accepted = response.ok && (body?.success === true || body?.success === "true");
    if (accepted) return { ok: true as const, sentTo: email };

    const message = body?.message ?? "";
    if (/activation/i.test(message)) return { ok: false as const, reason: "activation" as const };
    if (response.status === 429 || /rate limit/i.test(message)) {
      return { ok: false as const, reason: "busy" as const };
    }
    return { ok: false as const, reason: "failed" as const };
  });
