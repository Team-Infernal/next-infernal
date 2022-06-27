import { useEffect } from "react";
import { useRouter } from "next/router";

import AccountEmailNotVerified from "components/account/AccountEmailNotVerified";
import Loading from "components/Loading";
import SignOutButton from "components/buttons/SignOutButton";

import localRouter from "config/router";

import { useAuth } from "context/AuthUserContext";
import AccountInfoCard from "components/account/AccountInfoCard";

const Account = () => {
	const { authUser, loading: authLoading } = useAuth();
	const router = useRouter();

	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		if (!authLoading && authUser === null) {
			router.push(localRouter.auth.signin.path);
		}
	}, [authLoading, authUser]);
	/* eslint-enable react-hooks/exhaustive-deps */

	if (authUser === null) {
		return <Loading />;
	}

	return (
		<div className="h-[100%] flex flex-col gap-16">
			{!authUser.emailVerified && <AccountEmailNotVerified />}
			<div className="flex justify-between items-center">
				<div className="text-3xl">
					Bienvenue, <strong>{authUser.displayName}</strong>
				</div>
				<SignOutButton className="self-center" />
			</div>
			<AccountInfoCard authUser={authUser} />
		</div>
	);
};

export default Account;
