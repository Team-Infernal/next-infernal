import { useRouter } from "next/router";
import { useAuthUser } from "next-firebase-auth";

import localRouter from "config/router";

const SignOutButton = () => {
	const user = useAuthUser();
	const router = useRouter();

	const handleSignOut = () => {
		user.signOut();
		router.push(localRouter.auth.signin.path);
	};

	return (
		<button
			className={`btn btn-primary btn-outline text-primary-content rounded-full self-center`}
			onClick={() => handleSignOut()}
		>
			Se déconnecter
		</button>
	);
};

export default SignOutButton;
