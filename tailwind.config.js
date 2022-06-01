const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			transparent: colors.transparent,
			white: colors.white,
			black: colors.black,
			blue: colors.blue,
			indigo: colors.indigo,
			pink: colors.pink,
			sky: colors.sky,
			violet: colors.violet,
		},
		fontFamily: {
			sans: [
				"-apple-system",
				"BlinkMacSystemFont",
				"Segoe UI",
				"Roboto",
				"Oxygen",
				"Ubuntu",
				"Cantarell",
				"Fira Sans",
				"Droid Sans",
				"Helvetica Neue",
				"sans-serif",
			],
		},
		extend: {},
	},
	plugins: [],
};
