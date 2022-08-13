import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuthUser } from "next-firebase-auth";
import cn from "classnames";

import AccountCard from "components/cards/AccountCard";
import AccountAddCVModal from "components/account/AddCVModal";

import localRouter from "config/router";

import { verifyUrl, cvVerification as cvv } from "utils/formVerification";

const AddCV = () => {
	const AuthUser = useAuthUser();

	useEffect(() => {
		fetch(
			"/api/v1/jobs?" +
				new URLSearchParams({
					userId: AuthUser.id || "",
				})
		)
			.then(res => res.json())
			.then(data => console.log(data));
	}, [AuthUser.id]);

	const defaultCVInputState: CVInputState = {
		value: "",
		errors: [],
		isValid: false,
	};

	const [position, setPosition] = useState(defaultCVInputState);
	const [description, setDescription] = useState(defaultCVInputState);
	const [url, setUrl] = useState(defaultCVInputState);
	const [loading, setLoading] = useState(false);

	const onPositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		const { errors, isValid } = cvv.position(value);
		setPosition({
			value,
			errors,
			isValid,
		});
	};

	const onDescriptionChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const { value } = event.target;
		const { errors, isValid } = cvv.description(value);
		setDescription({
			value,
			errors,
			isValid,
		});
	};

	const onUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		const { errors, isValid } = verifyUrl(value);
		setUrl({
			value,
			errors,
			isValid,
		});
	};

	const canPreview = position.isValid && description.isValid;
	const canSend = position.isValid && description.isValid && url.isValid;

	const onCvSend = async () => {
		if (!canSend) {
			return;
		}

		setLoading(true);

		const bodyObj = {
			userId: AuthUser.id,
			fullName: AuthUser.displayName,
			title: position.value,
			description: description.value,
			link: url.value,
		};

		await fetch("/api/v1/jobs", {
			method: "POST",
			body: JSON.stringify(bodyObj),
			headers: {
				"Content-Type": "application/json",
			},
		});

		setLoading(false);
	};

	return (
		<>
			<AccountCard>
				<h2 className="card-title">Ajouter votre CV</h2>
				<span>
					Dès que votre CV sera analysé et validé, il sera disponible sur la
					page{" "}
					<Link href={localRouter.jobs.path}>
						<a className="font-semibold link hover:text-primary">
							{localRouter.jobs.name}
						</a>
					</Link>
					, visible à tous les utilisateurs du site.
				</span>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Poste</span>
					</label>
					<input
						type="text"
						placeholder="Poste que vous occupez ou que vous souhaitez trouver"
						className={cn("input", "input-bordered", {
							"input-primary": position.isValid || !position.errors.length,
							"input-error": !position.isValid && position.errors.length,
						})}
						onChange={e => onPositionChange(e)}
					/>
					{!!position.errors.length && (
						<label className="label">
							<span className="label-text-alt text-error">
								{position.errors.join(" ")}
							</span>
						</label>
					)}
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Description courte</span>
					</label>
					<textarea
						placeholder="Qu'est ce que vous recherchez ?"
						className={cn("textarea", {
							"textarea-primary":
								description.isValid || !description.errors.length,
							"textarea-error":
								!description.isValid && description.errors.length,
						})}
						onChange={e => onDescriptionChange(e)}
					/>
					{!!description.errors.length && (
						<label className="label">
							<span className="label-text-alt text-error">
								{description.errors.join(" ")}
							</span>
						</label>
					)}
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">URL</span>
					</label>
					<input
						type="text"
						placeholder="https://exemple.fr/cv"
						className={cn("input", "input-bordered", {
							"input-primary": url.isValid || !url.errors.length,
							"input-error": !url.isValid && url.errors.length,
						})}
						onChange={e => onUrlChange(e)}
					/>
					{!!url.errors.length && (
						<label className="label">
							<span className="label-text-alt text-error">
								{url.errors.join(" ")}
							</span>
						</label>
					)}
				</div>
				<div className="flex flex-col sm:flex-row gap-4 pt-2">
					<div className="sm:w-0 flex-grow">
						<label
							htmlFor="cv-modal"
							className={cn({
								"w-full": true,
								btn: true,
								"btn-primary": canPreview,
								"btn-outline": true,
								"btn-disabled": !canPreview,
								"modal-button": true,
							})}
						>
							Prévisualiser
						</label>
					</div>
					<div className="sm:w-0 flex-grow">
						<button
							className={cn({
								"w-full": true,
								btn: true,
								"btn-primary": canSend,
								"btn-disabled": !canSend,
								"btn-outline": !canSend,
								loading: loading,
							})}
							onClick={() => onCvSend()}
						>
							{loading ? "Ajout de votre CV..." : "Envoyer"}
						</button>
					</div>
				</div>
			</AccountCard>
			<AccountAddCVModal
				position={position.value}
				description={description.value}
			/>
		</>
	);
};

interface CVInputState {
	value: string;
	errors: string[];
	isValid: boolean;
}

export default AddCV;
