import AccountEditUsername from "components/account/AccountEditUsername";
import AccountEditEmail from "components/account/AccountEditEmail";

const AccountInfoCard = () => {
	return (
		<div className="card w-full w-100 sm:max-w-lg shadow-2xl bg-base-100">
			<div className="card-body">
				<AccountEditUsername />
				<AccountEditEmail />
			</div>
		</div>
	);
};

export default AccountInfoCard;
