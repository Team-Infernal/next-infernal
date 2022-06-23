import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { AuthUserProvider } from "../context/AuthUserContext";
import Layout from "../components/Layout";
import "../styles/globals.css";

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }) => {
	return (
		<AuthUserProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AuthUserProvider>
	);
};

export default MyApp;
