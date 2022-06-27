import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
	return (
		<Html
			lang="fr"
			data-theme="infernal-light"
		>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
