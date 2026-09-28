import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-frame-CaOoi5KS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var phoneDisplay = "(936) 499-0032";
var phoneHref = "tel:+19364990032";
var email = "travelfitness@gmail.com";
var hours = [
	["Monday – Friday", "8:00 AM – 5:00 PM"],
	["Saturday", "8:00 AM – 12:00 PM"],
	["Sunday", "Closed"]
];
var services = [
	"1-on-1 Training",
	"Semi-private & Group",
	"Virtual Training",
	"Online Programming"
];
var places = [
	"At my home",
	"Lawndale Swim & Tennis Club",
	"Virtual",
	"Not sure yet"
];
var rates = [
	{
		name: "Private",
		sixty: "$65",
		thirty: "$35"
	},
	{
		name: "Semi-private",
		sixty: "$40",
		thirty: "$20"
	},
	{
		name: "Group",
		sixty: "$20",
		thirty: "$20"
	}
];
var bio = [
	"I am a personal trainer with professional experience in at-home training, virtual coaching, and personalized online programming. My goal is to help clients achieve their fitness goals with confidence and a clear, science-backed approach.",
	"With a Bachelor of Science in Exercise and Health Promotion from Louisiana Tech University, I bring over six years of experience as a personal trainer in campus, boutique, and corporate gym settings. As President of the Louisiana Tech Powerlifting Team, I honed my leadership and athletic skills, achieving top 5 finishes in three consecutive years at USA Powerlifting Nationals.",
	"My expertise spans functional fitness, resistance training, and sport-specific conditioning, with a strong emphasis on biomechanics, proper form, and injury prevention. I have worked extensively with older clients, designing personalized programs that prioritize mobility, strength, and overall well-being.",
	"My certifications include NASM Certified Personal Trainer and CPR/AED, ensuring safe and effective sessions. Whether working one-on-one or with small groups, I am committed to creating a positive experience that promotes sustainable health, strength, and confidence."
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-pine-deep text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: "Travel Fitness LLC"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-foam",
					children: "Bringing the gym to you. North Carolina Triad."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-widest text-foam",
					children: "Hours"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-1 text-sm",
					children: hours.map(([day, time]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: day }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: time })]
					}, day))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-widest text-foam",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "font-semibold",
							href: phoneHref,
							children: phoneDisplay
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "break-all",
							href: `mailto:${email}`,
							children: email
						})
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "border-t border-foam/20 px-5 py-4 text-center text-xs text-foam",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Travel Fitness NC LLC. All rights reserved."
			]
		})]
	});
}
var links = [
	{
		to: "/",
		label: "Home",
		hash: void 0
	},
	{
		to: "/services",
		label: "Services",
		hash: void 0
	},
	{
		to: "/about",
		label: "About",
		hash: void 0
	},
	{
		to: "/",
		label: "Contact",
		hash: "visit"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 border-b border-line bg-paper ${open ? "" : "md:bg-paper/95 md:backdrop-blur"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-w-0 items-center gap-2.5",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/mark.png?v=3",
						alt: "",
						className: "h-12 w-auto shrink-0",
						width: 446,
						height: 360
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate whitespace-nowrap font-display text-base tracking-tight sm:text-lg",
						children: "Travel Fitness LLC"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-6 md:flex",
					"aria-label": "Primary",
					children: [links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						hash: link.hash,
						className: "text-sm font-medium text-ink",
						onClick: () => setOpen(false),
						children: link.label
					}, link.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						hash: "visit",
						className: "inline-flex h-11 items-center rounded-full bg-pine px-5 text-sm font-semibold text-cream",
						children: "Request a consult"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-cream md:hidden",
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					onClick: () => setOpen((value) => !value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: open ? "Close menu" : "Open menu"
					}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			id: "mobile-nav",
			className: "fixed inset-x-0 bottom-0 top-16 z-50 flex flex-col overflow-y-auto overscroll-contain bg-paper px-5 pt-6 md:hidden",
			"aria-label": "Mobile",
			children: [links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: link.to,
				hash: link.hash,
				className: "flex h-14 items-center border-b border-line font-display text-3xl",
				onClick: () => setOpen(false),
				children: link.label
			}, link.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "tel:+19364990032",
				className: "mt-4 inline-flex h-12 items-center justify-center rounded-full bg-pine text-base font-semibold text-cream",
				children: "Call (936) 499-0032"
			})]
		}) : null]
	});
}
function SiteFrame({ children }) {
	const [showBar, setShowBar] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const visit = document.getElementById("visit");
		if (!visit) return;
		const observer = new IntersectionObserver(([entry]) => setShowBar(!entry.isIntersecting), { threshold: .12 });
		observer.observe(visit);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-24 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-cream focus:px-4 focus:py-2",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			showBar ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: phoneHref,
					className: "inline-flex h-12 items-center justify-center rounded-full border border-ink text-sm font-semibold",
					children: phoneDisplay
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/#visit",
					className: "inline-flex h-12 items-center justify-center rounded-full bg-pine text-sm font-semibold text-cream",
					children: "Request"
				})]
			}) : null
		]
	});
}
//#endregion
export { rates as a, places as i, bio as n, services as o, email as r, SiteFrame as t };
