import Link from "next/link";

import { LocalRoute } from "config/router";

const NavbarMobileLink = ({
	link,
	closeDrawer,
}: {
	link: LocalRoute;
	closeDrawer: () => void;
}) => {
	return (
		<li>
			<Link href={link.path}>
				<a onClick={() => closeDrawer()}>{link.name}</a>
			</Link>
		</li>
	);
};

export default NavbarMobileLink;
