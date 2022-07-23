import { updateProfile } from "firebase/auth";
import { useAuthUser } from "next-firebase-auth";
import { useState } from "react";

import UsernameFormInput from "components/form/UsernameFormInput";
import AlertErrorList from "components/alerts/AlertErrorList";

import { verifyUsername } from "utils/formVerification";

const AccountEditUsername = () => {
	const user = useAuthUser();
	const currentUsername = user.displayName || "";

	const [username, setUsername] = useState(currentUsername);
	const [editingUsername, setEditingUsername] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState<string[]>([]);

	const onEditUsernameClick = async () => {
		setErrors([]);

		const { firebaseUser } = user;

		if (!editingUsername || !firebaseUser) {
			setEditingUsername(true);
			return;
		}

		const { isValid, errors } = verifyUsername(username);

		if (!isValid) {
			setErrors(errors);
			return;
		}

		if (username === currentUsername) {
			setEditingUsername(false);
			return;
		}

		setLoading(true);

		await updateProfile(firebaseUser, { displayName: username });

		setLoading(false);
		setEditingUsername(false);
		window.location.reload();
	};

	return (
		<>
			<div className="flex flex-col sm:flex-row gap-4">
				<div className="flex-grow">
					<UsernameFormInput
						username={username}
						setUsername={setUsername}
						disabled={!editingUsername}
					/>
				</div>
				<button
					className={[
						"btn",
						"btn-primary",
						"sm:self-end",
						!editingUsername && "btn-outline",
						loading && "loading",
					].join(" ")}
					onClick={() => onEditUsernameClick()}
				>
					{editingUsername ? "Confirmer" : "Modifier"}
				</button>
			</div>
			{errors.length > 0 && <AlertErrorList errors={errors} />}
		</>
	);
};

export default AccountEditUsername;
