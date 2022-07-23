const verifyUsername = (username: string) => {
	const userRegex = /^[a-z0-9]+$/i;
	let errors = [];

	if (username.length < 3 || username.length > 24) {
		errors.push(
			"Votre nom d'utilisateur doit comporter entre 3 et 24 caractères."
		);
	}

	if (!userRegex.test(username)) {
		errors.push(
			"Votre nom d'utilisateur doit contenir des lettres et/ou des chiffres."
		);
	}

	return {
		isValid: errors.length === 0,
		errors,
	};
};

const verifyPassword = (password: string) => {
	const passRegex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]$/;
	let errors = [];

	if (password.length < 8 || password.length > 128) {
		errors.push("Votre mot de passe doit contenir entre 8 et 128 caractères.");
	}

	if (!passRegex.test(password)) {
		errors.push(
			"Votre mot de passe doit contenir au minimum 1 lettre majuscule, 1 lettre minuscule, 1 chiffre et 1 caractère spécial (@$!%*?&_)"
		);
	}

	return {
		isValid: errors.length === 0,
		errors,
	};
};

const verifyEmail = (email: string) => {
	const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
	let errors = [];

	if (!emailRegex.test(email)) {
		errors.push("Votre adresse mail est invalide.");
	}

	return {
		isValid: errors.length === 0,
		errors,
	};
};

export { verifyUsername, verifyPassword, verifyEmail };
