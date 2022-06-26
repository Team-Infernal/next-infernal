import { useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthUserContext";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [passwordOne, setPasswordOne] = useState("");
	const [passwordTwo, setPasswordTwo] = useState("");
	const [error, setError] = useState(null);

	const router = useRouter();

	const { createUserWithEmailAndPassword, sendEmailVerification } = useAuth();

	const onSubmit = event => {
		setError(null);

		if (passwordOne === passwordTwo) {
			createUserWithEmailAndPassword(email, passwordOne)
				.then(authUser => {
					sendEmailVerification();
					console.log("Success. The user is created in Firebase");
					router.push("/logged-in");
				})
				.catch(error => {
					setError(error.message);
				});
		} else {
			setError("Passwords do not match");
		}

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
						id="signUpEmail"
						className="input input-bordered w-full max-w-xs"
					/>
					<br />
					<input
						type="password"
						value={passwordOne}
						onChange={event => setPasswordOne(event.target.value)}
						name="passwordOne"
						id="signUpPasswordOne"
						className="input input-bordered w-full max-w-xs"
					/>
					<br />
					<input
						type="password"
						value={passwordTwo}
						onChange={event => setPasswordTwo(event.target.value)}
						name="passwordTwo"
						id="signUpPasswordTwo"
						className="input input-bordered w-full max-w-xs"
					/>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
				>
					Créer un compte
				</button>
			</form>
		</div>
	);
};

export default SignUp;
