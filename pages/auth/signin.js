import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthUserContext";
import localRouter from "../../config/router";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const router = useRouter();

	const { signInWithEmailAndPassword } = useAuth();

	const onSubmit = event => {
		setError(null);
		signInWithEmailAndPassword(email, password)
			.then(authUser => {
				router.push("/logged-in");
			})
			.catch(error => {
				setError(error.message);
			});

		event.preventDefault();
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				{error && <div className="alert alert-error shadow-lg">{error}</div>}
				<div>
					<input
						type="email"
						value={email}
						onChange={event => setEmail(event.target.value)}
						placeholder="exemple@exemple.fr"
						name="email"
						id="signInEmail"
						className="input input-bordered w-full max-w-xs"
					/>
					<br />
					<input
						type="password"
						value={password}
						onChange={event => setPassword(event.target.value)}
						name="password"
						id="signUpPassword"
						className="input input-bordered w-full max-w-xs"
					/>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
				>
					Se connecter
				</button>
				<div>
					Pas de compte?{" "}
					<Link href={localRouter.auth.signup.path}>
						<a className="link link-hover">Créer un compte</a>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
