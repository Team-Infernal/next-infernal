import { useAuthUser } from "next-firebase-auth";

const AddCVModal = ({
	position,
	description,
}: {
	position: string;
	description: string;
}) => {
	const AuthUser = useAuthUser();

	return (
		<>
			<input
				type="checkbox"
				id="cv-modal"
				className="modal-toggle"
			/>
			<label
				htmlFor="cv-modal"
				className="modal modal-bottom sm:modal-middle cursor-pointer"
			>
				<label className="modal-box relative">
					<div className="card bg-base-100 shadow-2xl">
						<div className="card-body">
							<h2 className="card-title">{AuthUser.displayName}</h2>
							<h2 className="card-title text-base">{position}</h2>
							<p>{description}</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">Consulter le CV</button>
							</div>
						</div>
					</div>
				</label>
			</label>
		</>
	);
};

export default AddCVModal;
