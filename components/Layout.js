import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col">
			<Navbar />
			<main className="min-h-100 mt-32 mb-16 px-12 lg:px-36 xl:px-72 text-justify">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
