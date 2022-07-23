import AccountEditUsername from "components/account/AccountEditUsername";
import AccountEditEmail from "components/account/AccountEditEmail";

const AccountInfoCard = ({ user }) => {
	return (
		<div className="card w-full max-w-lg shadow-2xl bg-base-100">
			<div className="card-body">
				<AccountEditUsername currentUsername={user.displayName} />
				<AccountEditEmail currentEmail={user.email} />
			</div>
		</div>
	);
};

export default AccountInfoCard;
