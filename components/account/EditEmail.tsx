import { updateEmail, sendEmailVerification } from "firebase/auth";
import { useAuthUser } from "next-firebase-auth";
import { useState } from "react";

import EmailFormInput from "components/form/EmailFormInput";
import AlertErrorList from "components/alerts/AlertErrorList";

import { verifyEmail } from "utils/formVerification";
import errMsg from "utils/auth/errMsg";

const EditEmail = () => {
	const user = useAuthUser();
	const currentEmail = user.email || "";

	const [email, setEmail] = useState(currentEmail);
	const [editingEmail, setEditingEmail] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState<string[]>([]);

	const onEditEmailClick = async () => {
		setErrors([]);

		const { firebaseUser } = user;

		if (!email || !firebaseUser) {
			setEditingEmail(false);
			return;
		}

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

		await updateEmail(firebaseUser, email)
			.then(async () => {
				await sendEmailVerification(firebaseUser);
				window.location.reload();
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
			<div className="flex flex-col sm:flex-row gap-4">
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
						"sm:self-end",
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

export default EditEmail;
