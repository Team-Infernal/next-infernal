import Head from "next/head";

import Layout from "../components/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;1,100;1,200;1,400;1,500;1,600&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
