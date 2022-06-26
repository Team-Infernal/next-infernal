const config = {
	footer: [
		{
			name: "À propos",
			data: [
				{
					name: "Infernal",
					path: "/",
				},
				{
					name: "INFBOT",
					path: "/infbot",
				},
				{
					name: "Jobs",
					path: "/jobs",
				},
			],
			isLocal: true,
		},
		{
			name: "Réseaux",
			data: [
				{
					name: "Discord",
					link: "https://discord.gg/team-infernal",
				},
				{
					name: "Twitter",
					link: "https://twitter.com/ContactInfernal",
				},
				{
					name: "GitHub",
					link: "https://github.com/Team-Infernal",
				},
			],
			isLocal: false,
		},
		{
			name: "Partenaires",
			data: [
				{
					name: "AtiCommunity",
					link: "https://aticommunity.fr",
				},
			],
			isLocal: false,
		},
	],
	contact: {
		email: "contact@teaminfernal.fr",
	},
	locales: [
		{
			locale: "fr",
			name: "Français",
		},
	],
};

export default config;
