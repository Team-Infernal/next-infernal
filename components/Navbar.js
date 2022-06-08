import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 py-4 sm:px-4 lg:px-48 xl:px-96 shadow-lg flex justify-between items-center text-xl">
			<div className="flex gap-8 items-center">
				<Image
					className="overflow-hidden"
					src="/img/inf-grey.png"
					width={96}
					height={49}
				/>
				<Link href="/">
					<a className="">Accueil</a>
				</Link>
				<Link href="/">
					<a>Jobs</a>
				</Link>
				<Link href="/">
					<a>INFBOT</a>
				</Link>
			</div>
			<div>
				<Link href="/">
					<a className="px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-600 transition duration-75 rounded-full">
						Se connecter
					</a>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
