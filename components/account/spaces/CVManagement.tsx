const CVManagement = ({ CVs }: { CVs?: CVDoc[] }) => {
	if (!CVs) {
		CVs = [];
	}

	const handleVerifyCV = (
		e: React.MouseEvent<HTMLButtonElement>,
		id: string
	) => {
		(e.target as Element).classList.add("loading");
	};

	return (
		<div>
			{CVs.map(cv => (
				<div
					key={cv.id}
					className="card bg-base-100 shadow-2xl"
				>
					<div className="card-body">
						<h2 className="card-title">{cv.fullName}</h2>
						<h2 className="card-title text-base">{cv.title}</h2>
						<p>{cv.description}</p>
						<div className="card-actions justify-end">
							<button
								className="btn btn-primary"
								onClick={e => handleVerifyCV(e, cv.id)}
							>
								Valider
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

CVManagement.admin = true;
CVManagement.text = "Gestion CV";

export default CVManagement;
