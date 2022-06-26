import Link from "next/link";

const NavbarLink = ({ data }) => {
	return (
		<Link href={data.path}>
			<button className="btn btn-ghost rounded-full">{data.name}</button>
		</Link>
	);
};

export default NavbarLink;
