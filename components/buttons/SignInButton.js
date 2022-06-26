import Link from "next/link";

import localRouter from "../../config/router";

const SignInButton = () => {
	return (
		<Link href={localRouter.auth.signin.path}>
			<button className="btn btn-primary text-primary-content rounded-full">
				{localRouter.auth.signin.name}
			</button>
		</Link>
	);
};

export default SignInButton;
