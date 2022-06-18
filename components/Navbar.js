import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import router from "../config/router";

const Navbar = () => {
	const { locale } = useRouter();

	return (
		<nav className="fixed bg-gradient-to-b from-white to-[#ffffff77] top-0 left-0 right-0 py-4 px-12 lg:px-48 xl:px-96 shadow-lg flex justify-between items-center text-xl">
			<div className="flex gap-8 items-center">
				<Image
					alt="Infernal Logo"
					className="overflow-hidden"
					src="/img/inf-grey.png"
					width={96}
					height={49}
				/>
				<Link href={router.home.path}>
					<a>{router.home.name[locale]}</a>
				</Link>
				<Link href={router.jobs.path}>
					<a>{router.jobs.name[locale]}</a>
				</Link>
				<Link href={router.infbot.path}>
					<a>{router.infbot.name[locale]}</a>
				</Link>
			</div>
			<div>
				<Link href={router.auth.signin.path}>
					<a className="px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-600 transition duration-75 rounded-full">
						{router.auth.signin.name[locale]}
					</a>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
