import type { User } from "firebase/auth";

import AccountEditUsername from "components/account/AccountEditUsername";
import AccountEditEmail from "components/account/AccountEditEmail";

const AccountInfoCard = ({ user }: { user: User }) => {
	return (
		<div className="card w-full max-w-lg shadow-2xl bg-base-100">
			<div className="card-body">
				{user.displayName !== null && (
					<AccountEditUsername currentUsername={user.displayName} />
				)}
				{user.email !== null && <AccountEditEmail currentEmail={user.email} />}
			</div>
		</div>
	);
};

export default AccountInfoCard;
