import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<div className="bottom-0 left-0 right-0 fixed grid lg:grid-cols-2">
			<div className="p-8 sm:pl-4 lg:pl-48 xl:pl-96 bg-indigo-500 flex flex-col gap-4">
				<div>
					<h2 className="text-3xl">Infernal</h2>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="text-xl">Nous contacter:</h3>
					<div className="flex flex-col text-xl">
						<Link href="https://discord.gg/team-infernal">
							<a>
								<FontAwesomeIcon
									icon={faDiscord}
									className="fa-fw"
								/>{" "}
								Discord
							</a>
						</Link>
						<Link href="mailto:contact@teaminfernal.fr">
							<a>
								<FontAwesomeIcon
									icon={faEnvelope}
									className="fa-fw"
								/>{" "}
								Email
							</a>
						</Link>
					</div>
				</div>
			</div>
			<div className="p-8 sm:pr-4 lg:pr-48 xl:pr-96 bg-sky-500">
				<p>Lorem ipsum dolor sit amet</p>
			</div>
		</div>
	);
};

export default Footer;
