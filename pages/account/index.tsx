import {
	useAuthUser,
	withAuthUser,
	withAuthUserTokenSSR,
	AuthAction,
} from "next-firebase-auth";

import AccountEmailNotVerified from "components/account/AccountEmailNotVerified";
import SignOutButton from "components/buttons/SignOutButton";
import AccountInfoCard from "components/account/AccountInfoCard";
import Loading from "components/Loading";

const Account = () => {
	const AuthUser = useAuthUser();

	return (
		<div className="flex flex-col gap-16">
			{!AuthUser.emailVerified && <AccountEmailNotVerified />}
			<span className="text-3xl">
				👋 Bienvenue, <strong>{AuthUser.displayName}</strong>
			</span>
			<AccountInfoCard />
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
