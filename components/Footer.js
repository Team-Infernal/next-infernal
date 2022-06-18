import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import config from "../config";
import LanguageDropdown from "./utils/LanguageDropdown";

const Footer = () => {
	const { locale } = useRouter();

	return (
		<div className="grid lg:grid-cols-2">
			<div className="p-8 pl-12 lg:pl-48 xl:pl-96 bg-indigo-500 flex flex-col gap-4">
				<div>
					<h2 className="text-3xl">Infernal</h2>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="text-xl">
						{locale === "en" ? "Contact us" : "Nous contacter"}
					</h3>
					<div className="flex flex-col text-xl">
						<Link href={config.links.discord}>
							<a>
								<FontAwesomeIcon
									icon={faDiscord}
									className="fa-fw"
								/>{" "}
								Discord
							</a>
						</Link>
						<Link href={`mailto:${config.contact.email}`}>
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
			<div className="p-8 pr-12 lg:pr-48 xl:pr-96 bg-sky-500">
				<LanguageDropdown />
			</div>
		</div>
	);
};

export default Footer;
