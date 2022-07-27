import AccountEditUsername from "components/account/AccountEditUsername";
import AccountEditEmail from "components/account/AccountEditEmail";

const AccountInfoCard = () => {
	return (
		<div className="card w-full sm:max-w-lg shadow-2xl bg-base-100">
			<div className="card-body">
				<h2 className="card-title">Vos informations</h2>
				<AccountEditUsername />
				<AccountEditEmail />
			</div>
		</div>
	);
};

export default AccountInfoCard;
