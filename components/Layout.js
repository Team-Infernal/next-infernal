import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import router from "../config/router";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div className="drawer">
			<input
				className="drawer-toggle"
				id="nav-drawer"
				type="checkbox"
			/>
			<div className="drawer-content flex flex-col">
				<div className="w-full navbar bg-base-100 text-base-content lg:px-96 mb-16">
					<div className="flex-none lg:hidden">
						<label
							className="btn btn-square btn-ghost text-xl"
							htmlFor="nav-drawer"
						>
							<FontAwesomeIcon icon={faBars} />
						</label>
					</div>
					<div className="flex-1 px-2 mx-2">
						<Link href={router.home.path}>
							<a className="text-2xl">Infernal</a>
						</Link>
					</div>
					<div className="flex-none hidden lg:block">
						<ul className="menu menu-horizontal gap-2">
							<li>
								<Link href={router.infbot.path}>
									<button className="btn btn-ghost rounded-full">
										{router.infbot.name}
									</button>
								</Link>
							</li>
							<li>
								<Link href={router.jobs.path}>
									<button className="btn btn-ghost rounded-full">
										{router.jobs.name}
									</button>
								</Link>
							</li>
							<li>
								<Link href={router.auth.signin.path}>
									<button className="btn btn-primary text-primary-content rounded-full">
										{router.auth.signin.name}
									</button>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<main>{children}</main>
				<Footer />
			</div>
			<div className="drawer-side">
				<label
					className="drawer-overlay"
					htmlFor="nav-drawer"
				></label>
				<ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
					<li>
						<Link href={router.home.path}>
							<a>{router.home.name}</a>
						</Link>
					</li>
					<li>
						<Link href={router.infbot.path}>
							<a>{router.infbot.name}</a>
						</Link>
					</li>
					<li>
						<Link href={router.jobs.path}>
							<a>{router.jobs.name}</a>
						</Link>
					</li>
					<li>
						<Link href={router.auth.signin.path}>
							<a>{router.auth.signin.name}</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Layout;
