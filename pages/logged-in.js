import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../context/AuthUserContext";

const LoggedIn = () => {
	const { authUser, loading, signOut } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!loading && !authUser) router.push("/");
	}, [authUser, loading]);

	console.log(authUser);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<>
					<div>
						{authUser && (
							<div>Congratulations {authUser?.email}! You are logged in.</div>
						)}
					</div>
					<div>
						<button onClick={signOut}>Sign out</button>
					</div>
				</>
			)}
		</div>
	);
};

export default LoggedIn;
