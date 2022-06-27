const EmailFormInput = ({ email, setEmail }) => {
	return (
		<div className="form-control">
			<label className="label">
				<span className="label-text">Adresse mail</span>
			</label>
			<input
				type="text"
				value={email}
				onChange={event => setEmail(event.target.value)}
				placeholder="john@exemple.fr"
				className="input input-bordered input-primary"
			/>
		</div>
	);
};

export default EmailFormInput;
