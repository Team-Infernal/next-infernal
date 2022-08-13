import { AuthAction, withAuthUserTokenSSR } from "next-firebase-auth";

import AccountLayout from "components/account/Layout";
import GeneralManagement from "components/account/spaces/GeneralManagement";
import SignOutButton from "components/buttons/SignOutButton";

type Props = {
	name: string;
	isAdmin: boolean;
};

const General = ({ name, isAdmin }: Props) => {
	return (
		<>
			<AccountLayout
				pageTitle="Mon compte • Infernal"
				activeTab="general"
				name={name}
				isAdmin={isAdmin}
			>
				<GeneralManagement />
			</AccountLayout>
			<div className="flex justify-center pt-16">
				<SignOutButton />
			</div>
		</>
	);
};

const getServerSideProps = withAuthUserTokenSSR({
	whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
	return {
		props: {
			name: AuthUser.displayName,
			isAdmin: !!AuthUser.claims.admin,
		},
	};
});

export default General;
export { getServerSideProps };
