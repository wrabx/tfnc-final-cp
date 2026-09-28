import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteFrame } from "./site-frame-CaOoi5KS.mjs";
import { n as RatesTable, t as InquiryForm } from "./rates-table-CAse0mll.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CYo6rFDQ.js
var import_jsx_runtime = require_jsx_runtime();
var offers = [
	{
		title: "1-on-1 training",
		image: "/images/session-home.jpg",
		alt: "Coached strength work at home",
		copy: "Enjoy one-on-one sessions in the comfort of your own home, or meet at Lawndale Swim & Tennis Club. Grayson brings the expertise and equipment to guide you safely and effectively.",
		points: [
			"Personalized attention",
			"Convenience",
			"Proven results",
			"Private and focused"
		]
	},
	{
		title: "Semi-private & group",
		image: "/images/sidewalk.jpg",
		alt: "Training together outdoors",
		copy: "A more affordable way to train while still getting expert guidance. The balance of personal attention and a little company.",
		points: [
			"Personal attention",
			"Motivating environment",
			"Affordable and effective"
		]
	},
	{
		title: "Virtual & online programming",
		image: "/images/kit.jpg",
		alt: "A compact training kit for sessions away from a gym",
		copy: "Face-to-face when you can, and a plan that still works when you cannot. Virtual sessions and flexible online programs built around your schedule.",
		points: [
			"Virtual coaching",
			"Online programming",
			"Plans that travel with you"
		]
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-12 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-widest text-pine",
					children: "Services"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl font-display text-5xl",
					children: "Personalized training that fits the week you actually have."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-lg text-muted",
					children: "Face-to-face guidance, virtual sessions, or flexible online programs. One option for the goal, not a stack of packages."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-8 px-5 pb-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatesTable, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Same coach. Three ways to train."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: "Private sessions are one client. Semi-private shares the hour. Group keeps the rate lowest when you want to train with others."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						hash: "visit",
						className: "mt-6 inline-flex h-12 w-fit items-center rounded-full bg-pine px-6 text-sm font-semibold text-cream",
						children: "Contact us"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto grid max-w-6xl gap-6 px-5 py-12 md:py-16",
			children: offers.map((offer) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "grid overflow-hidden rounded-card border border-line bg-cream md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: offer.image,
					alt: offer.alt,
					className: "aspect-video h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl",
							children: offer.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: offer.copy
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 grid gap-2 text-sm",
							children: offer.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-t border-line pt-2",
								children: point
							}, point))
						})
					]
				})]
			}, offer.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "visit",
			className: "scroll-mt-20 border-t border-line bg-foam",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl",
					children: "Let's get stronger together."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Tell us the service and where you want to train. The note goes to travelfitness@gmail.com."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryForm, {})]
			})
		})
	] });
}
//#endregion
export { Services as component };
