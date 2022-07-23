import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import EmailFormInput from "components/form/EmailFormInput";
import PasswordFormInput from "components/form/PasswordFormInput";
import FormError from "components/form/FormError";

import localRouter from "config/router";

import { auth } from "lib/firebase2";

import errMsg from "utils/auth/errMsg";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	const onSignInClick = async event => {
		event.preventDefault();
		setError(null);

		if (!email) {
			setError("Veuillez entrer votre adresse mail.");
			return;
		} else if (!password) {
			setError("Veuillez entrer votre mot de passe.");
			return;
		}

		setLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				router.push(localRouter.account.path);
			})
			.catch(error => {
				setError(errMsg(error.code));
				setLoading(false);
			});
	};

	return (
		<>
			<Head>
				<title>Se connecter • Infernal</title>
			</Head>
			<div className="hero">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left max-w-md">
						<h1 className="text-5xl font-bold">Se connecter</h1>
						<p className="py-6">
							Connectez-vous pour accéder à votre compte Infernal!
						</p>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<div className="card-body">
							<EmailFormInput
								email={email}
								setEmail={setEmail}
							/>
							<PasswordFormInput
								password={password}
								setPassword={setPassword}
								forgotPasswordPrompt={true}
							/>
							{error && <FormError error={error} />}
							<div className="form-control mt-3">
								<button
									className={`btn btn-${loading ? "disabled" : "primary"} ${
										loading && "loading"
									}`}
									onClick={event => onSignInClick(event)}
								>
									{loading ? "Connexion..." : "Se connecter"}
								</button>
								<label className="label justify-center">
									<Link href={localRouter.auth.signup.path}>
										<a className="label-text-alt link link-hover">
											Pas encore de compte?
										</a>
									</Link>
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignIn;
