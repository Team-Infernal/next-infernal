import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";

import EmailFormInput from "components/form/EmailFormInput";
import FormError from "components/form/FormError";

import { auth } from "lib/firebase2";

import errMsg from "utils/auth/errMsg";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const onContinueClick = async event => {
		setError("");
		setSuccess(false);
		setLoading(true);

		sendPasswordResetEmail(auth, email)
			.then(() => {
				setSuccess(true);
				setLoading(false);
			})
			.catch(error => {
				setError(errMsg(error.code));
				setLoading(false);
			});

		event.preventDefault();
	};

	return (
		<div className="hero">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left max-w-md">
					<h1 className="text-5xl font-bold">Mot de passe oublié</h1>
					<p className="py-6">
						Pour réinitialiser votre mot de passe, veuillez renseigner votre
						adresse mail.
					</p>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<div className="card-body">
						<EmailFormInput
							email={email}
							setEmail={setEmail}
						/>
						{error && <FormError error={error} />}
						{success && (
							<div className="form-control mt-3 alert alert-success shadow-lg text-center">
								<span>
									Un mail avec les consignes pour réinitialiser votre mot de
									passe a été envoyé à {email}
								</span>
							</div>
						)}
						{!success && (
							<div className="form-control mt-3">
								<button
									className={`btn btn-${loading ? "disabled" : "primary"} ${
										loading && "loading"
									}`}
									onClick={event => onContinueClick(event)}
								>
									{loading ? "Chargement..." : "Continuer"}
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
