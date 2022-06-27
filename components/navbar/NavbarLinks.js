import NavbarLink from "components/navbar/NavbarLink";

const NavbarLinks = ({ data }) => {
	return (
		<div className="flex-none hidden lg:block">
			<ul className="menu menu-horizontal gap-2">
				{data.map(element => (
					<li key={element.name}>
						<NavbarLink data={element} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavbarLinks;
