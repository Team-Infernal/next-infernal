import { AuthAction, withAuthUserTokenSSR } from "next-firebase-auth";

import AccountLayout from "components/account/Layout";
import AdminManagement from "components/account/spaces/AdminManagement";

type Props = {
	name: string;
};

const AdminGeneral = ({ name }: Props) => {
	return (
		<AccountLayout
			pageTitle="Général • Administration Infernal"
			activeTab="admin-general"
			name={name}
			isAdmin={true}
		>
			<AdminManagement />
		</AccountLayout>
	);
};

const getServerSideProps = withAuthUserTokenSSR({
	whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
	if (!AuthUser.claims.admin) {
		return {
			redirect: {
				permanent: false,
				destination: "/account",
			},
		};
	}

	return {
		props: {
			name: AuthUser.displayName,
		},
	};
});

export default AdminGeneral;
export { getServerSideProps };
