import Link from "next/link";

import localRouter from "config/router";

const PasswordFormInput = ({
	password,
	setPassword,
	forgotPasswordPrompt,
	confirm,
}) => {
	return (
		<div className="form-control">
			<label className="label">
				<span className="label-text">
					{confirm ? "Confirmez le mot de passe" : "Mot de passe"}
				</span>
			</label>
			<input
				type="password"
				value={password}
				onChange={event => setPassword(event.target.value)}
				placeholder="************"
				className="input input-bordered input-primary"
			/>
			{forgotPasswordPrompt && (
				<label className="label">
					<Link href={localRouter.auth.forgotPassword.path}>
						<a className="label-text-alt link link-hover">
							{localRouter.auth.forgotPassword.name}
						</a>
					</Link>
				</label>
			)}
		</div>
	);
};

export default PasswordFormInput;
