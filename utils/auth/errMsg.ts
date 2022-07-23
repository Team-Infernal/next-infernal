/**
 * Provided with a Firebase authentication error code, return appropriate error message.
 * @param {string} errorCode
 * @returns {string}
 */
const errMsg = (errorCode: string): string => {
	if (errors.hasOwnProperty(errorCode)) {
		return errors[errorCode];
	}
	return errors.default;
};

const errors: tErrors = {
	"auth/email-already-in-use":
		"Cette adresse mail est déjà utilisée. Veuillez réessayer avec une autre.",
	"auth/invalid-email": "L'adresse mail est invalide.",
	"auth/invalid-password": "Le mot de passe est invalide.",
	"auth/missing-email": "Veuillez renseigner votre adresse mail.",
	"auth/requires-recent-login":
		"Cette opération nécessite que vous vous reconnectiez.",
	"auth/user-not-found": "Votre adresse mail et/ou mot de passe est incorrect.",
	"auth/wrong-password": "Mot de passe est incorrecte.",
	default: "Une erreur est survenue. Veuillez réessayer.",
};

type tErrors = {
	[key: string]: string;
};

export default errMsg;
