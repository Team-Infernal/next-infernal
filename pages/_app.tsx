import { useRef } from "react";
import type { AppProps } from "next/app";
import { useAuthUser, withAuthUser } from "next-firebase-auth";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Navbar from "components/navbar/Navbar";
import NavbarMobileLink from "components/navbar/NavbarMobileLink";
import Footer from "components/footer/Footer";
import ThemeToggleButton from "components/buttons/ThemeToggleButton";

import localRouter from "config/router";

import initAuth from "lib/initAuth";
initAuth();

import "styles/globals.css";
config.autoAddCss = false;

const navbarMobileLinks = [
	localRouter.home,
	localRouter.infbot,
	localRouter.jobs,
];

const MyApp = ({ Component, pageProps }: AppProps) => {
	const drawerCheckbox = useRef<HTMLInputElement>(null);

	const closeDrawer = () => {
		if (drawerCheckbox.current !== null) {
			drawerCheckbox.current.checked = false;
		}
	};

	const { firebaseUser } = useAuthUser();

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
				<main className="flex-grow relative px-8 lg:px-36 xl:px-54 2xl:px-72">
					<Component {...pageProps} />
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
					{firebaseUser === null ? (
						<NavbarMobileLink
							closeDrawer={closeDrawer}
							link={localRouter.auth.signin}
						/>
					) : (
						<NavbarMobileLink
							closeDrawer={closeDrawer}
							link={localRouter.account}
						/>
					)}
					<div className="mt-auto">
						<ThemeToggleButton />
					</div>
				</ul>
			</div>
		</div>
	);
};

export default withAuthUser()(MyApp as () => JSX.Element);
