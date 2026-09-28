import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as rates, i as places, o as services, r as email } from "./site-frame-CaOoi5KS.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rates-table-CAse0mll.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	name: string().trim().min(2, "Add your name."),
	email: string().trim().email("Use a real email."),
	phone: string().trim().min(7, "Add a phone number.").max(20, "That number looks too long."),
	service: string().min(1, "Pick a service."),
	place: string().min(1, "Pick where to meet."),
	note: string().trim().max(500, "Keep the note under 500 characters.")
});
var empty = {
	name: "",
	email: "",
	phone: "",
	service: "",
	place: "",
	note: ""
};
function message(fields) {
	return [
		`Name: ${fields.name}`,
		`Phone: ${fields.phone}`,
		`Email: ${fields.email}`,
		`Service: ${fields.service}`,
		`Where: ${fields.place}`,
		fields.note ? `Note: ${fields.note}` : ""
	].filter(Boolean).join("\n");
}
function mailto(fields) {
	const subject = `Consultation request — ${fields.service}`;
	return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message(fields))}`;
}
function InquiryForm() {
	const [fields, setFields] = (0, import_react.useState)(empty);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(null);
	function update(key, value) {
		setFields((current) => ({
			...current,
			[key]: value
		}));
		setErrors((current) => ({
			...current,
			[key]: void 0
		}));
	}
	function onSubmit(event) {
		event.preventDefault();
		const parsed = schema.safeParse(fields);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (typeof key === "string" && !next[key]) next[key] = issue.message;
			}
			setErrors(next);
			return;
		}
		setSent(parsed.data);
		window.location.href = mailto(parsed.data);
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card border border-line bg-paper p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "font-display text-3xl",
				children: [
					"Ready to send, ",
					sent.name.split(" ")[0],
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-muted",
				children: [
					"Your email app should open a message to ",
					email,
					". If it did not, use the button below or call (936) 499-0032."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "mt-5 overflow-x-auto rounded-xl bg-cream p-4 text-sm leading-relaxed",
				children: message(sent)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: mailto(sent),
					className: "inline-flex h-12 items-center justify-center rounded-full bg-pine px-5 text-sm font-semibold text-cream",
					children: "Open email"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSent(null),
					className: "inline-flex h-12 items-center justify-center rounded-full border border-line px-5 text-sm font-semibold",
					children: "Edit request"
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Full name",
				error: errors.name,
				htmlFor: "name",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "name",
					name: "name",
					autoComplete: "name",
					value: fields.name,
					onChange: (event) => update("name", event.target.value),
					className: controlClass(Boolean(errors.name))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Phone",
					error: errors.phone,
					htmlFor: "phone",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "phone",
						name: "phone",
						type: "tel",
						autoComplete: "tel",
						inputMode: "tel",
						value: fields.phone,
						onChange: (event) => update("phone", event.target.value),
						className: controlClass(Boolean(errors.phone))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					error: errors.email,
					htmlFor: "email",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "email",
						name: "email",
						type: "email",
						autoComplete: "email",
						inputMode: "email",
						value: fields.email,
						onChange: (event) => update("email", event.target.value),
						className: controlClass(Boolean(errors.email))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Service",
					error: errors.service,
					htmlFor: "service",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "service",
						name: "service",
						value: fields.service,
						onChange: (event) => update("service", event.target.value),
						className: controlClass(Boolean(errors.service)),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Select"
						}), services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: service,
							children: service
						}, service))]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Where",
					error: errors.place,
					htmlFor: "place",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "place",
						name: "place",
						value: fields.place,
						onChange: (event) => update("place", event.target.value),
						className: controlClass(Boolean(errors.place)),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Select"
						}), places.map((place) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: place,
							children: place
						}, place))]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Subject",
				error: errors.note,
				htmlFor: "note",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "note",
					name: "note",
					rows: 4,
					value: fields.note,
					onChange: (event) => update("note", event.target.value),
					className: controlClass(Boolean(errors.note), true),
					placeholder: "Goals, schedule, injuries the trainer should know about…"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "inline-flex h-12 items-center justify-center rounded-full bg-pine px-6 text-sm font-semibold text-cream",
				children: "Send request"
			})
		]
	});
}
function controlClass(invalid, area = false) {
	return [
		area ? "min-h-32 py-3" : "h-12",
		"w-full rounded-xl border bg-cream px-4 text-base text-ink",
		"placeholder:text-muted",
		invalid ? "border-clay" : "border-line"
	].join(" ");
}
function Field({ label, htmlFor, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		htmlFor,
		className: "grid gap-2 text-sm font-medium",
		children: [
			label,
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-normal text-clay",
				role: "alert",
				children: error
			}) : null
		]
	});
}
function RatesTable() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden rounded-card border border-line bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-left text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
					className: "border-b border-line px-4 py-3 text-left font-display text-2xl text-ink",
					children: "Per session"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							scope: "col",
							className: "px-4 py-3 font-medium",
							children: "Format"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							scope: "col",
							className: "px-4 py-3 font-medium",
							children: "60 min"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							scope: "col",
							className: "px-4 py-3 font-medium",
							children: "30 min"
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rates.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							scope: "row",
							className: "px-4 py-4 font-semibold text-ink",
							children: row.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-4 text-lg font-semibold tabular-nums",
							children: row.sixty
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-4 text-lg font-semibold tabular-nums",
							children: row.thirty
						})
					]
				}, row.name)) })
			]
		})
	});
}
//#endregion
export { RatesTable as n, InquiryForm as t };
