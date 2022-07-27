import { useEffect, useState } from "react";

import CV from "components/jobs/CV";
import NoCV from "components/jobs/NoCV";
import Loading from "components/Loading";

const CVList = () => {
	const [cvs, setCvs] = useState<CVDoc[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch("/api/v1/jobs")
			.then(response => response.json())
			.then(data => {
				setCvs(data.docs);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <Loading />;
	}

	if (cvs.length === 0) {
		return <NoCV />;
	}

	return (
		<div className="grid md:grid-cols-2 gap-8">
			{cvs.map(cv => (
				<CV
					key={cv.id}
					cv={cv}
				/>
			))}
		</div>
	);
};

export default CVList;
