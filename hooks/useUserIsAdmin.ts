import { User } from "firebase/auth";

const useUserIsAdmin = async (user: User | null) => {
	let isAdmin = false;

	await user?.getIdTokenResult().then(idTokenResult => {
		if (idTokenResult.claims.admin) {
			isAdmin = true;
		}
	});

	return isAdmin;
};

export default useUserIsAdmin;
