import FooterInfo from "components/footer/FooterInfo";
import FooterColumns from "components/footer/FooterColumns";

import config from "config/config";

const Footer = () => {
	return (
		<footer className="footer mt-16 p-10 lg:px-96 bg-primary text-primary-content">
			<FooterInfo />
			<FooterColumns columns={config.footer} />
		</footer>
	);
};

export default Footer;
