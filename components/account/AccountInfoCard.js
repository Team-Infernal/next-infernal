import AccountEditUsername from "components/account/AccountEditUsername";
import AccountEditEmail from "components/account/AccountEditEmail";

const AccountInfoCard = ({ authUser }) => {
	return (
		<div className="card w-full max-w-lg shadow-2xl bg-base-100">
			<div className="card-body">
				<AccountEditUsername currentUsername={authUser.displayName} />
				<AccountEditEmail currentEmail={authUser.email} />
			</div>
		</div>
	);
};

export default AccountInfoCard;
