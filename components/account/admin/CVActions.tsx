import { useState } from "react";
import { useAuthUser } from "next-firebase-auth";

import sleep from "utils/sleep";

const CVActions = ({
	cv,
	setCVs,
}: {
	cv: CVDoc;
	setCVs: React.Dispatch<React.SetStateAction<CVDoc[]>>;
}) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const [isVerifying, setIsVerifying] = useState(false);
	const AuthUser = useAuthUser();

	const handleDeleteCV = async (e: React.MouseEvent<HTMLButtonElement>) => {
		const token = await AuthUser.getIdToken();
		if (!token) {
			return;
		}

		setIsDeleting(true);
		const button = e.target as Element;
		button.classList.add("loading");

		fetch(`/api/v1/jobs/${cv.id}`, {
			method: "DELETE",
			headers: {
				Authorization: token,
			},
		}).then(async () => {
			button.classList.add("btn-success");
			button.classList.remove("btn-warning", "loading");
			button.textContent = "Supprimé";

			await sleep(2000);

			setCVs(cvs => cvs.filter(currentCV => currentCV.id !== cv.id));
		});
	};

	const handleVerifyCV = async (e: React.MouseEvent<HTMLButtonElement>) => {
		const token = await AuthUser.getIdToken();
		if (!token) {
			return;
		}

		setIsVerifying(true);
		const button = e.target as Element;
		button.classList.add("loading");

		fetch(`/api/v1/jobs/${cv.id}`, {
			method: "PATCH",
			headers: {
				Authorization: token,
			},
		}).then(async () => {
			button.classList.add("btn-success");
			button.classList.remove("btn-primary", "loading");
			button.textContent = "Validé";

			await sleep(2000);

			setCVs(cvs => cvs.filter(currentCV => currentCV.id !== cv.id));
		});
	};

	return (
		<div className="card-actions justify-end">
			{!isVerifying && (
				<button
					className="btn btn-warning"
					onClick={e => handleDeleteCV(e)}
				>
					Supprimer
				</button>
			)}
			{!isDeleting && !cv.verified && (
				<button
					className="btn btn-primary"
					onClick={e => handleVerifyCV(e)}
				>
					Valider
				</button>
			)}
		</div>
	);
};

export default CVActions;
