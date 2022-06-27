import { createContext, useContext } from "react";

import useFirebaseAuth from "lib/useFirebaseAuth";

const authUserContext = createContext({
	authUser: null,
	loading: true,
	signInWithEmailAndPassword: async () => {},
	createUserWithEmailAndPassword: async () => {},
	signOut: async () => {},
	sendEmailVerification: async () => {},
	updateUsername: async () => {},
	updateEmail: async () => {},
});

const AuthUserProvider = ({ children }) => {
	const auth = useFirebaseAuth();
	return (
		<authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
	);
};

const useAuth = () => useContext(authUserContext);

export { AuthUserProvider, useAuth };
