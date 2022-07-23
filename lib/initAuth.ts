import { init } from "next-firebase-auth";

import localRouter from "config/router";

const initAuth = () => {
	init({
		authPageURL: localRouter.auth.signin.path,
		appPageURL: localRouter.account.path,
		loginAPIEndpoint: localRouter.api.signin.path,
		logoutAPIEndpoint: localRouter.api.signout.path,
		onLoginRequestError: err => {
			console.error(err);
		},
		onLogoutRequestError: err => {
			console.error(err);
		},
		firebaseAdminInitConfig: {
			credential: {
				projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
				clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL || "",
				privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY || "",
			},
			databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "",
		},
		firebaseClientInitConfig: {
			apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY || "",
			authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
			databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
			projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
		},
		cookies: {
			name: "NextInfernal",
			keys: [
				process.env.COOKIE_SECRET_CURRENT,
				process.env.COOKIE_SECRET_PREVIOUS,
			],
			httpOnly: true,
			maxAge: 12 * 24 * 60 * 60 * 1000,
			overwrite: true,
			path: "/",
			sameSite: "strict",
			secure: false,
			signed: true,
		},
		onVerifyTokenError: err => {
			console.error(err);
		},
		onTokenRefreshError: err => {
			console.error(err);
		},
	});
};

export default initAuth;