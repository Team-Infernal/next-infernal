import Link from "next/link";

import { LocalRoute } from "config/router";

const NavbarLink = ({ data }: { data: LocalRoute }) => {
	return (
		<Link href={data.path}>
			<button className="btn btn-ghost rounded-full focus:text-inherit">
				{data.name}
			</button>
		</Link>
	);
};

export default NavbarLink;
