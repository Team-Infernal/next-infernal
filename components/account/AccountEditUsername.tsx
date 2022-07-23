import { updateProfile } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";

import UsernameFormInput from "components/form/UsernameFormInput";
import AlertErrorList from "components/alerts/AlertErrorList";

import { auth } from "lib/firebase";

import { verifyUsername } from "utils/formVerification";

const AccountEditUsername = ({
	currentUsername,
}: {
	currentUsername: string;
}) => {
	const router = useRouter();

	const [username, setUsername] = useState<string>(currentUsername);
	const [editingUsername, setEditingUsername] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [errors, setErrors] = useState<string[]>([]);

	const user = auth.currentUser;

	if (user === null) {
		router.push("/");
		return <></>;
	}

	const onEditUsernameClick = async () => {
		setErrors([]);

		if (!editingUsername) {
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

		await updateProfile(user, { displayName: username });

		setLoading(false);
		setEditingUsername(false);
		window.location.reload();
	};

	return (
		<>
			<div className="flex gap-4">
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
						"self-end",
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
