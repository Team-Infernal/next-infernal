import { useState } from "react";
import { useRouter } from "next/router";

import localRouter from "../../config/router";
import { useAuth } from "../../context/AuthUserContext";

const SignOutButton = () => {
	const [loading, setLoading] = useState(false);
	const { signOut } = useAuth();
	const router = useRouter();

	const onSignOutClick = async () => {
		setLoading(true);

		await signOut();
		router.push(localRouter.home.path);

		setLoading(false);
	};

	return (
		<button
			className={`btn btn-primary ${
				loading && "loading"
			} text-primary-content rounded-full`}
			onClick={() => onSignOutClick()}
		>
			{loading ? "Déconnexion..." : "Se déconnecter"}
		</button>
	);
};

export default SignOutButton;
