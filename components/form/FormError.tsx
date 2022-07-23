const FormError = ({ error }: { error: string }) => {
	return (
		<div className="form-control mt-3 alert alert-error shadow-lg text-center">
			<span>{error}</span>
		</div>
	);
};

export default FormError;
