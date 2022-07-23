module.exports = {
	content: [
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				"infernal-light": {
					primary: "#6419E6",
					secondary: "#D926A9",
					accent: "#1FB2A6",
					neutral: "#ffffff",
					"base-100": "#ffffff",
					info: "#3ABFF8",
					success: "#36D399",
					warning: "#FBBD23",
					error: "#F87272",
				},
			},
			{
				"infernal-dark": {
					primary: "#6419E6",
					secondary: "#D926A9",
					accent: "#1FB2A6",
					neutral: "#191D24",
					"base-100": "#2A303C",
					info: "#3ABFF8",
					success: "#36D399",
					warning: "#FBBD23",
					error: "#F87272",
				},
			},
		],
		darkTheme: "dark",
	},
};
