import { useEffect, useState } from "react";
import firebase from "./firebase";

const formatAuthUser = user => {
	return {
		uid: user.uid,
		email: user.email,
		emailVerified: user.emailVerified,
	};
};

const useFirebaseAuth = () => {
	const [authUser, setAuthUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const authStateChanged = async authState => {
		if (!authState) {
			setLoading(false);
			return;
		}

		setLoading(true);
		const formattedUser = formatAuthUser(authState);
		setAuthUser(formattedUser);
		setLoading(false);
	};

	const clear = () => {
		setAuthUser(null);
		setLoading(true);
	};

	const signInWithEmailAndPassword = (email, password) => {
		return firebase.auth().signInWithEmailAndPassword(email, password);
	};

	const createUserWithEmailAndPassword = (email, password) => {
		return firebase.auth().createUserWithEmailAndPassword(email, password);
	};

	const signOut = () => {
		return firebase.auth().signOut().then(clear);
	};

	const sendEmailVerification = () => {
		firebase.auth().currentUser.sendEmailVerification();
	};

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
		return () => unsubscribe;
	}, []);

	return {
		authUser,
		loading,
		signInWithEmailAndPassword,
		createUserWithEmailAndPassword,
		signOut,
		sendEmailVerification,
	};
};

export default useFirebaseAuth;
