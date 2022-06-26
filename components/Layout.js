import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import NavbarMobileLink from "./navbar/NavbarMobileLink";
import Footer from "./footer/Footer";

import localRouter from "../config/router";

const navbarMobileLinks = [
	localRouter.home,
	localRouter.infbot,
	localRouter.jobs,
	localRouter.auth.signin,
];

const Layout = ({ children }) => {
	return (
		<div className="drawer">
			<input
				className="drawer-toggle"
				id="nav-drawer"
				type="checkbox"
			/>
			<div className="drawer-content flex flex-col h-screen">
				<div className="w-full navbar bg-base-100 text-base-content lg:px-96 mb-16 sticky top-0 z-50 shadow-lg">
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
							<li>
								<Link href={localRouter.infbot.path}>
									<button className="btn btn-ghost rounded-full">
										{localRouter.infbot.name}
									</button>
								</Link>
							</li>
							<li>
								<Link href={localRouter.jobs.path}>
									<button className="btn btn-ghost rounded-full">
										{localRouter.jobs.name}
									</button>
								</Link>
							</li>
							<li>
								<Link href={localRouter.auth.signin.path}>
									<button className="btn btn-primary text-primary-content rounded-full">
										{localRouter.auth.signin.name}
									</button>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<main className="flex-grow relative">{children}</main>
				<Footer />
			</div>
			<div className="drawer-side">
				<label
					className="drawer-overlay"
					htmlFor="nav-drawer"
				></label>
				<ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
					{navbarMobileLinks.map(el => (
						<NavbarMobileLink
							link={el}
							key={el.name}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Layout;
