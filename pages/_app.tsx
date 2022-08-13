import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Layout from "components/Layout";

// import initAuth from "lib/initAuth";
// initAuth();

import "styles/globals.css";
config.autoAddCss = false;

const MyApp = ({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) => {
	return (
		<SessionProvider session={session}>
			{/* <Layout>
				<Component {...pageProps} />
			</Layout> */}
			<Component {...pageProps} />
		</SessionProvider>
	);
};

export default MyApp;
