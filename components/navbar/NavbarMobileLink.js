import Link from "next/link";

const NavbarMobileLink = ({ link, closeDrawer }) => {
	return (
		<li>
			<Link href={link.path}>
				<a onClick={() => closeDrawer()}>{link.name}</a>
			</Link>
		</li>
	);
};

export default NavbarMobileLink;
