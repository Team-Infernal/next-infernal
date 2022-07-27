import {
	useAuthUser,
	withAuthUser,
	withAuthUserTokenSSR,
	AuthAction,
} from "next-firebase-auth";
import { useState } from "react";

import AccountEmailNotVerified from "components/account/AccountEmailNotVerified";
import SignOutButton from "components/buttons/SignOutButton";
import AccountInfoCard from "components/account/AccountInfoCard";
import AccountAddAdmin from "components/account/AccountAddAdmin";
import Loading from "components/Loading";

const Account = () => {
	const [isAdmin, setIsAdmin] = useState(false);

	const AuthUser = useAuthUser();
	const { firebaseUser } = AuthUser;

	firebaseUser?.getIdTokenResult().then(idTokenResult => {
		if (idTokenResult.claims.admin) {
			setIsAdmin(true);
		}
	});

	return (
		<div className="flex flex-col gap-16">
			{!AuthUser.emailVerified && <AccountEmailNotVerified />}
			<div className="flex gap-3 items-center">
				<span className="text-3xl">
					Bienvenue, <strong>{AuthUser.displayName}</strong>
				</span>
				{isAdmin && (
					<div className="badge badge-warning badge-lg">Administration</div>
				)}
			</div>
			<div className="grid grid-cols-2 gap-8">
				<div className="flex flex-col items-end gap-8">
					<AccountInfoCard />
				</div>
				<div className="flex flex-col items-start gap-8">
					{isAdmin && <AccountAddAdmin />}
				</div>
			</div>
			<SignOutButton signOut={AuthUser.signOut} />
		</div>
	);
};

const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser({
	whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
	whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
	LoaderComponent: Loading,
})(Account);
export { getServerSideProps };
