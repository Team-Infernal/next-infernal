import localRouter from "config/router";
import Link from "next/link";

const Welcome = () => {
	return (
		<div className="hero min-h-[80vh]">
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">Infernal</h1>
					<p className="mb-5">
						Petite communauté de développeurs ainsi que les créateurs
						d&apos;INFBOT, le bot Discord multifonction.
					</p>
					<Link href={localRouter.auth.signup.path}>
						<button className="btn btn-primary">
							<a>Créer un compte</a>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
