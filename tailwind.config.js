const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

const customUtilities = plugin(function ({ addUtilities }) {
	addUtilities({
		".backface-visible": {
			"backface-visibility": "visible",
		},
		".backface-hidden": {
			"backface-visibility": "hidden",
		},
		".prevent-selection": {
			"user-select": "none",
			WebkitTouchCallout: "none",
			WebkitUserDrag: "none",
			WebkitUserSelect: "none",
			MozUserSelect: "none",
			MsUserSelect: "none",
		},
		".flex-center": {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
	})
})

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/comps/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
		"./public/data.ts",
	],
	plugins: [require("@tailwindcss/forms"), require("@headlessui/tailwindcss")({ prefix: "ui" }), customUtilities],
	variants: {
		extend: {
			filter: ["hover", "focus"],
		},
	},
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#C3E5F7",
					100: "#B5DEF5",
					200: "#A6D7F2",
					300: "#97D1F0",
					400: "#88CAEE",
					500: "#79C4EC",
					600: "#4CB0E6",
					700: "#2EA3E2",
					800: "#1D92D1",
					900: "#197DB3",
					DEFAULT: "#6ABDEA",
				},
				secondary: {
					100: "#F8EDF5",
					200: "#F0DAEA",
					300: "#E9C8E0",
					400: "#E1B6D5",
					500: "#DAA4CB",
					600: "#D391C0",
					700: "#CB7FB6",
					800: "#C46DAB",
					900: "#BC5AA1",
					DEFAULT: "#B54896",
				},
				third: {
					800: "#C1E2C9",
					900: "#BADFC2",
					DEFAULT: "#B2DBBB",
				},
			},
			keyframes: {
				"blur-in": {
					from: { backdropFilter: "blur(0px)" },
					to: { backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" },
				},
				"gradient-animation": {
					from: { backgroundPosition: "0%" },
					"50%": { backgroundPosition: "100%" },
					to: { backgroundPosition: "0%" },
				},
				fly: { from: { transform: "translate(0.1em, 0.1rem)" }, to: { transform: "translate(-0.1em, -0.1rem)" } },
				scroll: {
					"0%": { opacity: 0, transform: "translateY(10%)" },
					"25%": { opacity: 1, transform: "translateY(0)" },
					"50%": { transform: "translateY(60%)" },
					"100%": { transform: "translateY(50%)", opacity: 0 },
				},

				"to-left-marquee-1": { from: { transform: "translateX(0%)" }, to: { transform: "translateX(-100%)" } },
				"to-left-marquee-2": { from: { transform: "translateX(100%)" }, to: { transform: "translateX(0%)" } },

				"to-right-marquee-1": { from: { transform: "translateX(0%)" }, to: { transform: "translateX(100%)" } },
				"to-right-marquee-2": { from: { transform: "translateX(-100%)" }, to: { transform: "translateX(0%)" } },
			},
			animation: {
				"blur-in": "blur-in 250ms forwards",
				"gradient-animation": "gradient-animation 4s ease infinite",
				fly: "fly 0.6s ease-in-out infinite alternate",
				scroll: "scroll cubic-bezier(0.0, 0.0, 0.6, 1) 2.6s infinite",
				// Marquee animation while tracking moving left
				"to-left-marquee-1": "to-left-marquee-1 60s linear infinite",
				"to-left-marquee-2": "to-left-marquee-2 60s linear infinite",
				// Marquee animation while tracking moving right
				"to-right-marquee-1": "to-right-marquee-1 60s linear infinite",
				"to-right-marquee-2": "to-right-marquee-2 60s linear infinite",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
			screens: {
				baseHeight: { raw: "(max-height: 1000px)" },
				// => @media (max-height: 1000px) { ... }
			},
		},
		screens: {
			"2xs": "400px",
			xs: "576px",
			...defaultTheme.screens,
		},
	},
}
