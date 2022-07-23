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
		name: "Mon Compte",
		path: "/account",
		requiresLogin: true,
	},
	auth: {
		signup: {
			name: "Créer un compte",
			path: "/sign-up",
			requiresLogin: false,
		},
		signin: {
			name: "Se connecter",
			path: "/sign-in",
			requiresLogin: false,
		},
		signout: {
			name: "Se déconnecter",
			path: "/sign-out",
			requiresLogin: false,
		},
		forgotPassword: {
			name: "Mot de passe oublié",
			path: "/forgot-password",
			requiresLogin: false,
		},
	},
};

export default localRouter;
