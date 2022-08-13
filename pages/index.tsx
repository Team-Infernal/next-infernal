import Head from "next/head";
import { useSession } from "next-auth/react";

import Welcome from "components/home/Welcome";

const Home = () => {
	const { data: session } = useSession();
	console.log(session);

	return (
		<>
			<Head>
				<title>Accueil • Infernal</title>
			</Head>
			<div>
				<Welcome />
			</div>
		</>
	);
};

export default Home;
