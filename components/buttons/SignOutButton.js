import { signOut } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";

import localRouter from "config/router";

import { auth } from "lib/firebase2";

const SignOutButton = ({ className }) => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const onSignOutClick = async () => {
		setLoading(true);

		signOut(auth)
			.then(() => {
				router.push(localRouter.home.path);
			})
			.catch(() => {
				setLoading(false);
			});
	};

	return (
		<button
			className={`btn btn-primary btn-outline ${
				loading && "loading"
			} text-primary-content rounded-full ${className}`}
			onClick={() => onSignOutClick()}
		>
			{loading ? "Déconnexion..." : "Se déconnecter"}
		</button>
	);
};

export default SignOutButton;
