import { useState } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

import EmailFormInput from "components/form/EmailFormInput";

const AccountAddAdmin = () => {
	const functions = getFunctions();

	const [adminEmail, setAdminEmail] = useState("");

	const onAddAdminRole = () => {
		const addAdminRole = httpsCallable(functions, "addAdminRole");
		addAdminRole({
			email: adminEmail,
		}).then(result => {
			console.log(result);
		});
	};

	return (
		<div className="card w-full sm:max-w-lg shadow-2xl bg-base-100 border-2 border-warning">
			<div className="card-body">
				<div className="flex justify-between items-center">
					<h2 className="card-title">Ajouter un administrateur</h2>
					<FontAwesomeIcon
						icon={faWarning}
						className="fa-fw text-3xl text-warning"
					/>
				</div>
				<div className="flex flex-col sm:flex-row gap-4">
					<div className="flex-grow">
						<EmailFormInput
							email={adminEmail}
							setEmail={setAdminEmail}
							type="warning"
						/>
					</div>
					<button
						className="btn btn-warning btn-outline sm:self-end"
						onClick={() => onAddAdminRole()}
					>
						Ajouter
					</button>
				</div>
			</div>
		</div>
	);
};

export default AccountAddAdmin;
