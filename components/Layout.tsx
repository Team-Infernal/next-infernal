import { useRef } from "react";

import Navbar from "components/navbar/Navbar";
import NavbarMobileLink from "components/navbar/NavbarMobileLink";
import Footer from "components/footer/Footer";

import localRouter from "config/router";

const navbarMobileLinks = [
	localRouter.home,
	localRouter.infbot,
	localRouter.jobs,
	localRouter.auth.signin,
];

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
	const drawerCheckbox = useRef<HTMLInputElement>(null);

	const closeDrawer = () => {
		if (drawerCheckbox.current !== null) {
			drawerCheckbox.current.checked = false;
		}
	};

	return (
		<div className="drawer">
			<input
				className="drawer-toggle"
				id="nav-drawer"
				ref={drawerCheckbox}
				type="checkbox"
			/>
			<div className="drawer-content flex flex-col h-screen">
				<Navbar />
				<main className="flex-grow relative px-8 lg:px-48 xl:px-64 2xl:px-96">
					{children}
				</main>
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
							closeDrawer={closeDrawer}
							key={el.name}
							link={el}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Layout;
