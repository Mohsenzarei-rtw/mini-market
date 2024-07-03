/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			animation: {
				"swipe-up": "swipe-up 1s ease",
				become: "become 1s ease",
			},
			keyframes: {
				"swipe-up": {
					from: { bottom: "-100%" },
					to: { bottom: 0 },
				},
				become: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
		},
	},
	plugins: [],
};
