import InfoCard from "components/account/InfoCard";
import AddCV from "components/account/AddCV";

const GeneralManagement = () => {
	return (
		<>
			<div className="flex flex-col items-center xl:items-end gap-8">
				<InfoCard />
			</div>
			<div className="flex flex-col items-center xl:items-start gap-8">
				<AddCV />
			</div>
		</>
	);
};

GeneralManagement.admin = false;
GeneralManagement.text = "Général";

export default GeneralManagement;
