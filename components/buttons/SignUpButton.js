import Link from "next/link";

import localRouter from "../../config/router";

const SignUpButton = () => {
	return (
		<Link href={localRouter.auth.signup.path}>
			<button className="btn btn-primary text-primary-content rounded-full">
				{localRouter.auth.signup.name}
			</button>
		</Link>
	);
};

export default SignUpButton;
