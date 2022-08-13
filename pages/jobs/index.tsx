import Head from "next/head";

import Introduction from "components/jobs/Introduction";
import CVList from "components/jobs/CVList";

const Jobs = () => {
	return (
		<>
			<Head>
				<title>Opportunités • Infernal</title>
			</Head>
			<div className="flex flex-col gap-16">
				<span className="text-3xl">
					<strong>Opportunités</strong>
				</span>
				<div>
					<CVList />
				</div>
			</div>
		</>
	);
};

export default Jobs;
