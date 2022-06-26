import { createContext, useContext, Context } from "react";

import useFirebaseAuth from "../lib/useFirebaseAuth";

const authUserContext = createContext({
	authUser: null,
	loading: true,
	signInWithEmailAndPassword: async () => {},
	createUserWithEmailAndPassword: async () => {},
	signOut: async () => {},
	uploadUserAvatar: async () => {},
});

const AuthUserProvider = ({ children }) => {
	const auth = useFirebaseAuth();
	return (
		<authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
	);
};

const useAuth = () => useContext(authUserContext);

export { AuthUserProvider, useAuth };
