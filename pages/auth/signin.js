import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const createUser = async (email, password) => {
	const response = await fetch("/api/auth/signup", {
		method: "POST",
		body: JSON.stringify({ email, password }),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Something went wrong!");
	}

	return data;
};

const AuthForm = () => {
	const { locale } = useRouter();
	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const [isLogin, setIsLogin] = useState(true);
	const router = useRouter();

	const switchAuthModeHandler = () => {
		setIsLogin(prevState => !prevState);
	};

	const submitHandler = async event => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		if (isLogin) {
			const result = await signIn("credentials", {
				redirect: false,
				email: enteredEmail,
				password: enteredPassword,
			});

			if (!result.error) {
				router.replace("/profile");
			}
		} else {
			try {
				const result = await createUser(enteredEmail, enteredPassword);
				console.log(result);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div>
			<h1>
				{isLogin
					? locale === "en"
						? "Sign In"
						: "Se connecter"
					: locale === "en"
					? "Sign Up"
					: "Créer un compte"}
			</h1>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						required
						ref={emailInputRef}
					/>
				</div>
				<div>
					<label htmlFor="password">
						{locale === "en" ? "Password" : "Mot de passe"}
					</label>
					<input
						type="password"
						id="password"
						required
						ref={passwordInputRef}
					/>
				</div>
				<div>
					<button>
						{isLogin
							? locale === "en"
								? "Login"
								: "Se connecter"
							: locale === "en"
							? "Sign Up"
							: "Créer un compte"}
					</button>
					<button
						type="button"
						onClick={switchAuthModeHandler}
					>
						{isLogin
							? locale === "en"
								? "Create new account"
								: "Créer un nouveau compte"
							: locale === "en"
							? "Login with existing account"
							: "Se connecter avec un compte existant"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default AuthForm;
