import { signOut, Auth } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";

import localRouter from "config/router";

const SignOutButton = ({
	auth,
	className,
}: {
	auth: Auth;
	className: string;
}) => {
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
