import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Layout from "components/Layout";

import initAuth from "lib/initAuth";
initAuth();

import "styles/globals.css";
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
