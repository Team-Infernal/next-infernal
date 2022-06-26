import NavbarMobileLink from "./navbar/NavbarMobileLink";
import Footer from "./footer/Footer";

import Navbar from "./navbar/Navbar";

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
				<Navbar />
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
