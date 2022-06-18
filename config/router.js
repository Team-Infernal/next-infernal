const router = {
	home: {
		name: {
			en: "Home",
			fr: "Accueil",
		},
		path: "/",
	},
	jobs: {
		name: {
			en: "Jobs",
			fr: "Opportunités",
		},
		path: "/jobs",
	},
	infbot: {
		name: {
			en: "INFBOT",
			fr: "INFBOT",
		},
		path: "/infbot",
	},
	auth: {
		signup: {
			name: {
				en: "Sign up",
				fr: "Créer un compte",
			},
			path: "/auth/signup",
		},
		signin: {
			name: {
				en: "Sign in",
				fr: "Se connecter",
			},
			path: "/auth/signin",
		},
		signout: {
			name: {
				en: "Sign out",
				fr: "Se déconnecter",
			},
			path: "/auth/signout",
		},
	},
};

export default router;
