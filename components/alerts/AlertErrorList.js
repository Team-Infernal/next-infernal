const AlertErrorList = ({ errors }) => {
	return (
		<div className="alert alert-error">
			<ul className="flex-col">
				{errors.map(error => (
					<li key={error}>{error}</li>
				))}
			</ul>
		</div>
	);
};

export default AlertErrorList;
