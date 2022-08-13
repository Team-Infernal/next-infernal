const localRouter = {
	home: {
		name: "Infernal",
		path: "/",
	},
	jobs: {
		name: "Opportunités",
		path: "/jobs",
	},
	infbot: {
		name: "INFBOT",
		path: "/infbot",
	},
	games: {
		name: "Jeux",
		path: "/games",
	},
	account: {
		name: "Mon compte",
		path: "/account",
	},
	auth: {
		signup: {
			name: "Créer un compte",
			path: "/signup",
		},
		signin: {
			name: "Se connecter",
			path: "/signin",
		},
		signout: {
			name: "Se déconnecter",
			path: "/signout",
		},
		forgotPassword: {
			name: "Mot de passe oublié",
			path: "/forgot-password",
		},
	},
	api: {
		signin: {
			path: "/api/v1/auth/sign-in",
		},
		signout: {
			path: "/api/v1/auth/sign-out",
		},
	},
};

export default localRouter;

export interface LocalRoute {
	name: string;
	path: string;
}
