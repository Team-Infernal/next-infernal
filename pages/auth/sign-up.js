import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import EmailFormInput from "../../components/form/EmailFormInput";
import PasswordFormInput from "../../components/form/PasswordFormInput";
import FormError from "../../components/form/FormError";

import { useAuth } from "../../context/AuthUserContext";
import errMsg from "../../utils/auth/errMsg";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [passwordOne, setPasswordOne] = useState("");
	const [passwordTwo, setPasswordTwo] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	const { createUserWithEmailAndPassword, sendEmailVerification } = useAuth();

	const onSignUpClick = event => {
		setError(null);
		setLoading(true);

		if (passwordOne === passwordTwo) {
			createUserWithEmailAndPassword(email, passwordOne)
				.then(authUser => {
					sendEmailVerification();
					router.push("/account");
				})
				.catch(error => {
					setError(errMsg(error.code));
					setLoading(false);
				});
		} else {
			setError("Les mots de passe ne correspondent pas.");
			setLoading(false);
		}

		event.preventDefault();
	};

	return (
		<div className="hero">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left max-w-md">
					<h1 className="text-5xl font-bold">Créer un compte</h1>
					<p className="py-6">
						Créer un compte Infernal vous permet d&apos;accéder à des
						fonctionnalités tel que le dashboard INFBOT.
					</p>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<div className="card-body">
						<EmailFormInput
							email={email}
							setEmail={setEmail}
						/>
						<PasswordFormInput
							password={passwordOne}
							setPassword={setPasswordOne}
						/>
						<PasswordFormInput
							password={passwordTwo}
							setPassword={setPasswordTwo}
							confirm
						/>
						{error && <FormError error={error} />}
						<div className="form-control mt-3">
							<button
								className={`btn btn-${loading ? "disabled" : "primary"} ${
									loading && "loading"
								}`}
								onClick={event => onSignUpClick(event)}
							>
								{loading ? "Inscription en cours..." : "S'inscrire"}
							</button>
							<label className="label justify-center">
								<Link href="/auth/sign-in">
									<a className="label-text-alt link link-hover">
										Vous avez déjà un compte?
									</a>
								</Link>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
