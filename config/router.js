const localRouter = {
	home: {
		name: "Infernal",
		path: "/",
		requiresLogin: false,
	},
	jobs: {
		name: "Opportunités",
		path: "/jobs",
		requiresLogin: false,
	},
	infbot: {
		name: "INFBOT",
		path: "/infbot",
		requiresLogin: false,
	},
	games: {
		name: "Jeux",
		path: "/games",
		requiresLogin: false,
	},
	account: {
		name: "Compte",
		path: "/account",
		requiresLogin: true,
	},
	auth: {
		signup: {
			name: "Créer un compte",
			path: "/auth/sign-up",
			requiresLogin: false,
		},
		signin: {
			name: "Se connecter",
			path: "/auth/sign-in",
			requiresLogin: false,
		},
		signout: {
			name: "Se déconnecter",
			path: "/auth/sign-out",
			requiresLogin: false,
		},
	},
};

export default localRouter;
