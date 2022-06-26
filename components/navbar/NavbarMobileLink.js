import Link from "next/link";

const NavbarMobileLink = ({ link }) => {
	return (
		<li>
			<Link href={link.path}>
				<a>{link.name}</a>
			</Link>
		</li>
	);
};

export default NavbarMobileLink;
