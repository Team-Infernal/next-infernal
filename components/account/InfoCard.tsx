import AccountEditUsername from "components/account/EditUsername";
import AccountEditEmail from "components/account/EditEmail";

const InfoCard = () => {
	return (
		<div className="card w-full shadow-2xl bg-base-100">
			<div className="card-body">
				<h2 className="card-title">Vos informations</h2>
				<AccountEditUsername />
				<AccountEditEmail />
			</div>
		</div>
	);
};

export default InfoCard;
