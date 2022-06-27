import { useEffect, useState } from "react";

import firebase from "lib/firebase";

const formatAuthUser = user => {
	return {
		uid: user.uid,
		displayName: user.displayName,
		email: user.email,
		emailVerified: user.emailVerified,
		photoURL: user.photoURL,
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

	const createUserWithEmailAndPassword = (email, password, username) => {
		return firebase.auth().createUserWithEmailAndPassword(email, password);
	};

	const signOut = async () => {
		return firebase.auth().signOut().then(clear);
	};

	const sendEmailVerification = () => {
		firebase.auth().currentUser.sendEmailVerification();
	};

	const sendPasswordResetEmail = email => {
		return firebase.auth().sendPasswordResetEmail(email);
	};

	const updateUsername = async username => {
		return firebase.auth().currentUser.updateProfile({
			displayName: username,
		});
	};

	const uploadUserAvatar = async avatar => {
		if (!avatar) {
			return;
		}
		const user = firebase.auth().currentUser;
		const url = await firebase
			.storage()
			.ref(user.uid + "/avatar/" + "image.png")
			.getDownloadURL();

		return user.updateProfile({
			photoURL: url,
		});
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
		sendPasswordResetEmail,
		updateUsername,
		uploadUserAvatar,
	};
};

export default useFirebaseAuth;
