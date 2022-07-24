import { useAuthUser, withAuthUser } from "next-firebase-auth";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import NavbarLinks from "components/navbar/NavbarLinks";
import RouteButton from "components/buttons/RouteButton";
import ThemeToggleButton from "components/buttons/ThemeToggleButton";

import config from "config/config";
import localRouter from "config/router";

const Navbar = () => {
	const user = useAuthUser();
	const { firebaseUser } = user;

	return (
		<div className="w-full navbar bg-base-100 text-base-content xl:px-64 2xl:px-96 mb-16 sticky top-0 z-50 shadow-lg">
			<div className="flex-none lg:hidden">
				<label
					className="btn btn-square btn-ghost text-xl"
					htmlFor="nav-drawer"
				>
					<FontAwesomeIcon icon={faBars} />
				</label>
			</div>
			<div className="flex-1 px-2 mx-2">
				<Link href={localRouter.home.path}>
					<a className="text-2xl">Infernal</a>
				</Link>
			</div>
			<div className="flex-none hidden lg:block">
				<ul className="menu menu-horizontal gap-2">
					<NavbarLinks data={config.navbar} />
					<li>
						{firebaseUser === null ? (
							<RouteButton route={localRouter.auth.signin} />
						) : (
							<RouteButton route={localRouter.account} />
						)}
					</li>
					<ThemeToggleButton />
				</ul>
			</div>
		</div>
	);
};

export default withAuthUser()(Navbar);
