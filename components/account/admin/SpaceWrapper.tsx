import { useEffect, useState } from "react";
import cn from "classnames";

import spaces from "utils/spaces";

const SpaceWrapper = ({ isAdmin }: { isAdmin: boolean }) => {
	const newSpaces = spaces.filter(space => isAdmin || !space.admin);
	const [activeSpace, setActiveSpace] = useState(0);

	const [CVs, setCVs] = useState([]);

	useEffect(() => {
		if (isAdmin) {
			fetch(
				"/api/v1/jobs?" +
					new URLSearchParams({
						verified: "0",
					})
			)
				.then(res => res.json())
				.then(data => setCVs(data.data));
		}
	}, [isAdmin]);

	return (
		<div className="flex flex-col gap-16">
			<div className="tabs tabs-boxed self-center md:self-start">
				{newSpaces.map((space, index) => (
					<a
						key={space.text}
						className={cn("tab", {
							"tab-active": index === activeSpace,
						})}
						onClick={() => setActiveSpace(index)}
					>
						{space.text}
					</a>
				))}
			</div>
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
				{newSpaces[activeSpace].name === "CVManagement"
					? newSpaces[activeSpace]({ CVs })
					: newSpaces[activeSpace]({})}
			</div>
		</div>
	);
};

export default SpaceWrapper;
