import localRouter from "config/router";

const config = {
	navbar: [localRouter.infbot, localRouter.jobs, localRouter.games],
	footer: [
		{
			name: "À propos",
			data: [
				localRouter.home,
				localRouter.infbot,
				localRouter.jobs,
				localRouter.games,
			],
			isLocal: true,
		},
		{
			name: "Réseaux",
			data: [
				{
					name: "Discord",
					path: "https://discord.gg/team-infernal",
				},
				{
					name: "Twitter",
					path: "https://twitter.com/ContactInfernal",
				},
				{
					name: "GitHub",
					path: "https://github.com/Team-Infernal",
				},
			],
			isLocal: false,
		},
		{
			name: "Partenaires",
			data: [
				{
					name: "AtiCommunity",
					path: "https://aticommunity.fr",
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
