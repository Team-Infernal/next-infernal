import { useRouter } from "next/router";

import AccountEmailNotVerified from "components/account/AccountEmailNotVerified";
import SignOutButton from "components/buttons/SignOutButton";
import AccountInfoCard from "components/account/AccountInfoCard";

import localRouter from "config/router";

import { auth } from "lib/firebase";

const Account = () => {
	const router = useRouter();

	const user = auth.currentUser;

	if (user === null) {
		router.push(localRouter.auth.signin.path);
		return <></>;
	}

	return (
		<div className="h-[100%] flex flex-col gap-16">
			{!user.emailVerified && <AccountEmailNotVerified user={user} />}
			<span className="text-3xl">
				Bienvenue, <strong>{user.displayName}</strong>
			</span>
			<AccountInfoCard user={user} />
			<SignOutButton
				auth={auth}
				className="self-center"
			/>
		</div>
	);
};

export default Account;
