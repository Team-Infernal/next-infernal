import Introduction from "components/jobs/Introduction";
import CVList from "components/jobs/CVList";

const Jobs = () => {
	return (
		<div className="flex flex-col gap-16">
			<span className="text-3xl">
				<strong>Opportunités</strong>
			</span>

			<Introduction />

			<div>
				<CVList />
			</div>
		</div>
	);
};

export default Jobs;
