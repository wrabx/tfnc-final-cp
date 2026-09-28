import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as bio, t as SiteFrame } from "./site-frame-CaOoi5KS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CqEkJLXI.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-12 md:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "order-2 md:order-1 md:col-span-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/grayson.jpg",
				alt: "Grayson Brown",
				className: "max-h-screen w-full rounded-card object-cover object-top",
				width: 912,
				height: 1400
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "order-1 md:order-2 md:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-widest text-pine",
					children: "About"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl",
					children: "Grayson Brown"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: "Owner / Personal Trainer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 text-lg",
					children: bio.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: paragraph
					}, paragraph.slice(0, 24)))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-2 text-sm sm:grid-cols-2",
					children: [
						"NASM Certified Personal Trainer",
						"CPR / AED",
						"B.S. Exercise & Health Promotion, Louisiana Tech",
						"Former president, Louisiana Tech Powerlifting"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-xl border border-line bg-cream px-4 py-3",
						children: item
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					hash: "visit",
					className: "mt-8 inline-flex h-12 items-center rounded-full bg-pine px-6 text-sm font-semibold text-cream",
					children: "Request a consultation"
				})
			]
		})]
	}) });
}
//#endregion
export { About as component };
