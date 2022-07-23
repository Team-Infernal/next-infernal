import { updateEmail, sendEmailVerification } from "firebase/auth";
import { useState } from "react";

import EmailFormInput from "components/form/EmailFormInput";
import AlertErrorList from "components/alerts/AlertErrorList";

import { auth } from "lib/firebase2";

import { verifyEmail } from "utils/formVerification";
import errMsg from "utils/auth/errMsg";

const AccountEditEmail = ({ currentEmail }) => {
	const [email, setEmail] = useState(currentEmail);
	const [editingEmail, setEditingEmail] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState([]);

	const user = auth.currentUser;

	const onEditEmailClick = async () => {
		setErrors([]);

		if (!editingEmail) {
			setEditingEmail(true);
			return;
		}

		const { isValid, errors } = verifyEmail(email);

		if (!isValid) {
			setErrors(errors);
			return;
		}

		if (email === currentEmail) {
			setEditingEmail(false);
			return;
		}

		setLoading(true);

		await updateEmail(user, email)
			.then(async () => {
				await sendEmailVerification(user);
				window.location.reload(false);
			})
			.catch(error => {
				const formattedError = errMsg(error.code);
				setErrors([...errors, formattedError]);
				setEmail(currentEmail);
			});

		setLoading(false);
		setEditingEmail(false);
	};

	return (
		<>
			<div className="flex gap-4">
				<div className="flex-grow">
					<EmailFormInput
						email={email}
						setEmail={setEmail}
						disabled={!editingEmail}
						isVerified={user.emailVerified}
					/>
				</div>
				<button
					className={[
						"btn",
						"btn-primary",
						"self-end",
						!editingEmail && "btn-outline",
						loading && "loading",
					].join(" ")}
					onClick={() => onEditEmailClick()}
				>
					{editingEmail ? "Confirmer" : "Modifier"}
				</button>
			</div>
			{errors.length > 0 && <AlertErrorList errors={errors} />}
		</>
	);
};

export default AccountEditEmail;
