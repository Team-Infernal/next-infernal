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
		name: "Mon Compte",
		path: "/account",
	},
	auth: {
		signup: {
			name: "Créer un compte",
			path: "/sign-up",
		},
		signin: {
			name: "Se connecter",
			path: "/sign-in",
		},
		signout: {
			name: "Se déconnecter",
			path: "/sign-out",
		},
		forgotPassword: {
			name: "Mot de passe oublié",
			path: "/forgot-password",
		},
	},
};

export default localRouter;

export interface LocalRoute {
	name: string;
	path: string;
}
