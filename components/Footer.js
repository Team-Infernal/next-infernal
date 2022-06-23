import config from "../config/config";

const Footer = () => {
	return (
		<footer className="footer mt-16 p-10 lg:px-96 bg-primary text-primary-content">
			<div>
				<svg
					role="img"
					width="200"
					height="105"
					viewBox="0 0 400 210"
					xmlns="http://www.w3.org/2000/svg"
					className="fill-white"
				>
					<path d="M0.000 104.380 L 0.000 208.760 20.876 208.760 L 41.752 208.760 41.752 104.380 L 41.752 0.000 20.876 0.000 L 0.000 0.000 0.000 104.380 M53.681 20.690 L 53.681 41.566 137.372 125.256 L 221.062 208.946 221.062 104.473 L 221.062 0.000 200.186 0.000 L 179.310 0.000 179.310 62.721 L 179.310 125.442 116.496 62.628 L 53.681 -0.186 53.681 20.690 M232.992 20.876 L 232.992 41.752 316.496 41.752 L 400.000 41.752 400.000 20.876 L 400.000 0.000 316.496 0.000 L 232.992 0.000 232.992 20.876 M232.992 146.132 L 232.992 208.760 253.868 208.760 L 274.744 208.760 274.744 167.008 L 274.744 125.256 337.372 125.256 L 400.000 125.256 400.000 104.380 L 400.000 83.504 316.496 83.504 L 232.992 83.504 232.992 146.132" />
				</svg>
				<p className="font-bold">Infernal - teaminfernal.fr</p>
				<p>Copyright © 2021-2022 - Tous droits réservés</p>
			</div>
			<div>
				<span className="footer-title">À propos</span>
				<a
					target="_blank"
					className="link link-hover"
				>
					Infernal
				</a>
				<a
					target="_blank"
					className="link link-hover"
				>
					INFBOT
				</a>
				<a
					target="_blank"
					className="link link-hover"
				>
					Jobs
				</a>
			</div>
			<div>
				<span className="footer-title">Réseaux</span>
				<a
					href={config.links.discord}
					target="_blank"
					className="link link-hover"
				>
					Discord
				</a>
				<a
					href={config.links.twitter}
					target="_blank"
					className="link link-hover"
				>
					Twitter
				</a>
				<a
					href={config.links.github}
					target="_blank"
					className="link link-hover"
				>
					GitHub
				</a>
			</div>
		</footer>
	);
};

export default Footer;
