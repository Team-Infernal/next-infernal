const localRouter = {
	home: {
		name: "Accueil",
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
	auth: {
		signup: {
			name: "Créer un compte",
			path: "/auth/sign-up",
		},
		signin: {
			name: "Se connecter",
			path: "/auth/sign-in",
		},
		signout: {
			name: "Se déconnecter",
			path: "/auth/sign-out",
		},
	},
};

export default localRouter;
