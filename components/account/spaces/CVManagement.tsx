import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import CVActions from "components/account/admin/CVActions";

const CVManagement = ({
	CVs,
	setCVs,
}: {
	CVs: CVDoc[];
	setCVs: React.Dispatch<React.SetStateAction<CVDoc[]>>;
}) => {
	return (
		<>
			{CVs.map(cv => (
				<div
					key={cv.id}
					className="card bg-base-100 shadow-2xl"
				>
					<div className="card-body">
						<div className="flex justify-between items-center">
							<h2 className="card-title">{cv.fullName}</h2>
							{cv.verified && (
								<span className="text-success">
									<FontAwesomeIcon
										icon={faCheck}
										className="fa-fw"
									/>{" "}
									Validé
								</span>
							)}
						</div>
						<h2 className="card-title text-base">{cv.title}</h2>
						<p>{cv.description}</p>
						<div className="flex justify-between items-center">
							<a
								className="link link-hover hover:link-primary"
								href={cv.link}
								target="_blank"
								rel="noreferrer"
							>
								{cv.link}
							</a>
							<CVActions
								cv={cv}
								setCVs={setCVs}
							/>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

CVManagement.admin = true;
CVManagement.text = "Gestion CV";

export default CVManagement;
