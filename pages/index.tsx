import Head from "next/head";

import Welcome from "components/home/Welcome";

const Home = () => {
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
