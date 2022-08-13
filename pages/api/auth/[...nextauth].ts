import NextAuth from "next-auth/next";
import Email from "next-auth/providers/email";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { initializeApp, getApp, getApps } from "firebase/app";
import {
	getFirestore,
	query,
	where,
	limit,
	doc,
	collection,
	getDoc,
	getDocs,
	addDoc,
	updateDoc,
	deleteDoc,
	runTransaction,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	appId: process.env.FIREBASE_APP_ID,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export default NextAuth({
	adapter: FirestoreAdapter(firebaseConfig),
	providers: [
		Email({
			server: {
				host: process.env.EMAIL_SERVER_HOST,
				port: process.env.EMAIL_SERVER_PORT,
				auth: {
					user: process.env.EMAIL_SERVER_USER,
					pass: process.env.EMAIL_SERVER_PASS,
				},
			},
			from: process.env.EMAIL_FROM,
		}),
	],
});
