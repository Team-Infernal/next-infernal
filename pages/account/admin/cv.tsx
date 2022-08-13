import { useEffect, useState } from "react";
import { AuthAction, withAuthUserTokenSSR } from "next-firebase-auth";

import AccountLayout from "components/account/Layout";
import CVManagement from "components/account/spaces/CVManagement";

const AdminManageCV = ({ name }: { name: string }) => {
	const [CVs, setCVs] = useState<CVDoc[]>([]);

	useEffect(() => {
		fetch("/api/v1/jobs", {
			method: "GET",
		})
			.then(res => res.json())
			.then(data => {
				const sortedData = data.data.sort(
					(a: CVDoc, b: CVDoc) => a.uploaded < b.uploaded
				);
				setCVs(sortedData);
			});
	}, []);

	return (
		<AccountLayout
			pageTitle="Gestion CV • Administration Infernal"
			activeTab="admin-cv"
			name={name}
			isAdmin={true}
		>
			<CVManagement
				CVs={CVs}
				setCVs={setCVs}
			/>
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

export default AdminManageCV;
export { getServerSideProps };
