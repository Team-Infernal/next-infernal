import {
	useAuthUser,
	withAuthUser,
	withAuthUserTokenSSR,
	AuthAction,
} from "next-firebase-auth";
import { useState } from "react";
import Head from "next/head";

import SpaceWrapper from "components/account/admin/SpaceWrapper";
import Welcome from "components/account/Welcome";
import EmailNotVerified from "components/account/EmailNotVerified";
import InfoCard from "components/account/InfoCard";
import AddAdmin from "components/account/AddAdmin";
import AddCV from "components/account/AddCV";
import SignOutButton from "components/buttons/SignOutButton";
import Loading from "components/Loading";

const Account = () => {
	const [isAdmin, setIsAdmin] = useState(false);

	const user = useAuthUser();
	const { firebaseUser } = user;

	firebaseUser?.getIdTokenResult().then(idTokenResult => {
		if (idTokenResult.claims.admin) {
			setIsAdmin(true);
		}
	});

	return (
		<>
			<Head>
				<title>Mon compte • Infernal</title>
			</Head>
			<div className="flex flex-col gap-16">
				{!user.emailVerified && <EmailNotVerified />}
				<Welcome
					name={user.displayName}
					isAdmin={isAdmin}
				/>
				<SpaceWrapper isAdmin={isAdmin} />
				<SignOutButton signOut={user.signOut} />
			</div>
		</>
	);
};

const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser({
	whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
	whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
	LoaderComponent: Loading,
})(Account);
export { getServerSideProps };
