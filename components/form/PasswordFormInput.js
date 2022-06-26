import Link from "next/link";

const PasswordFormInput = ({ password, setPassword, forgotPasswordPrompt }) => {
	return (
		<div className="form-control">
			<label className="label">
				<span className="label-text">Mot de passe</span>
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
					<Link href="/auth/forgot-password">
						<a className="label-text-alt link link-hover">
							Mot de passe oublié?
						</a>
					</Link>
				</label>
			)}
		</div>
	);
};

export default PasswordFormInput;
