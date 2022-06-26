import { useState } from "react";
import { useRouter } from "next/router";

import EmailFormInput from "../../components/form/EmailFormInput";
import PasswordFormInput from "../../components/form/PasswordFormInput";
import FormError from "../../components/form/FormError";
import { useAuth } from "../../context/AuthUserContext";
import localRouter from "../../config/router";
import errMsg from "../../utils/auth/errMsg";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	const { signInWithEmailAndPassword } = useAuth();

	const onSignInClick = async event => {
		setError(null);
		setLoading(true);
		signInWithEmailAndPassword(email, password)
			.then(authUser => {
				router.push(localRouter.home.path);
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
				<div className="text-center lg:text-left">
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
