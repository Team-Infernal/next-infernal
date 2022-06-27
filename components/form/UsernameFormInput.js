const UsernameFormInput = ({ username, setUsername }) => {
	return (
		<div className="form-control">
			<label className="label">
				<span className="label-text">Nom d&apos;utilisateur</span>
			</label>
			<input
				type="text"
				value={username}
				onChange={event => setUsername(event.target.value)}
				placeholder="John"
				className="input input-bordered input-primary"
			/>
		</div>
	);
};

export default UsernameFormInput;
