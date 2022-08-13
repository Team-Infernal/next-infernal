import Head from "next/head";

import Welcome from "components/account/Welcome";
import Tabs from "components/account/Tabs";

type Props = {
	pageTitle: string;
	activeTab: AccountActiveTab;
	name: string;
	isAdmin: boolean;
	children: JSX.Element;
};

const AccountLayout = ({
	pageTitle,
	activeTab,
	name,
	isAdmin = false,
	children,
}: Props) => {
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<div className="flex flex-col gap-16">
				<Welcome
					name={name}
					isAdmin={isAdmin}
				/>
				<Tabs
					activeTab={activeTab}
					role={isAdmin ? "admin" : "member"}
				/>
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-8">{children}</div>
			</div>
		</>
	);
};

export default AccountLayout;
