const router = {
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
			path: "/auth/signup",
		},
		signin: {
			name: "Se connecter",
			path: "/auth/signin",
		},
		signout: {
			name: "Se déconnecter",
			path: "/auth/signout",
		},
	},
};

export default router;
