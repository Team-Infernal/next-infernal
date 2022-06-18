import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import dbConnect from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";

export default NextAuth({
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text", placeholder: "nom@exemple.fr" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const client = await dbConnect();
				const usersCollection = client.db().collection("users");

				const user = await usersCollection.findOne({
					email: credentials.email,
				});

				if (!user) {
					client.close();
					throw new Error("No user found");
				}

				const isValid = await verifyPassword(
					credentials.password,
					user.password
				);

				if (!isValid) {
					client.close();
					throw new Error("Invalid password");
				}

				client.close();
				return { email: user.email };
			},
		}),
	],
	pages: {
		signIn: "/auth/signin",
		signOut: "/auth/signout",
	},
});
