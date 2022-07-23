import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";

import AccountEmailNotVerified from "components/account/AccountEmailNotVerified";
import Loading from "components/Loading";
import SignOutButton from "components/buttons/SignOutButton";
import AccountInfoCard from "components/account/AccountInfoCard";

import localRouter from "config/router";

const Account = () => {
	const { currentUser: user, loading } = getAuth();
	const router = useRouter();

	useEffect(() => {
		if (!loading && user === null) {
			router.push(localRouter.auth.signin.path);
		}
	}, [loading, user, router]);

	if (user === null) {
		return <Loading />;
	}

	return (
		<div className="h-[100%] flex flex-col gap-16">
			{!user.emailVerified && <AccountEmailNotVerified email={user.email} />}
			<span className="text-3xl">
				Bienvenue, <strong>{user.displayName}</strong>
			</span>
			<AccountInfoCard user={user} />
			<SignOutButton className="self-center" />
		</div>
	);
};

export default Account;
