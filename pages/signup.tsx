import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
	sendEmailVerification,
} from "firebase/auth";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import EmailFormInput from "components/form/EmailFormInput";
import UsernameFormInput from "components/form/UsernameFormInput";
import PasswordFormInput from "components/form/PasswordFormInput";
import FormError from "components/form/FormError";

import localRouter from "config/router";

import errMsg from "utils/auth/errMsg";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [passwordOne, setPasswordOne] = useState("");
	const [passwordTwo, setPasswordTwo] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const router = useRouter();
	const auth = getAuth();

	const onSignUpClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setError("");

		if (!email) {
			setError("Veuillez entrer votre adresse mail.");
			return;
		} else if (!username) {
			setError("Veuillez entrer un nom d'utilisateur.");
			return;
		} else if (!passwordOne || !passwordTwo) {
			setError("Veuillez entrer votre mot de passe.");
			return;
		} else if (passwordOne !== passwordTwo) {
			setError("Les mots de passe ne correspondent pas.");
			return;
		}

		setLoading(true);
		createUserWithEmailAndPassword(auth, email, passwordOne)
			.then(async userCredential => {
				const user = userCredential.user;

				await updateProfile(user, { displayName: username });
				sendEmailVerification(user);

				router.push("/");
			})
			.catch(error => {
				setError(errMsg(error.code));
				setLoading(false);
			});
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
						<UsernameFormInput
							username={username}
							setUsername={setUsername}
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
								<Link href={localRouter.auth.signin.path}>
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
