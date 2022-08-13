import AddAdmin from "components/account/AddAdmin";

const AdminManagement = () => {
	return (
		<>
			<div className="flex flex-col items-center xl:items-end gap-8">
				<AddAdmin />
			</div>
			<div className="flex flex-col items-center xl:items-start gap-8"></div>
		</>
	);
};

AdminManagement.admin = true;
AdminManagement.text = "Administration";

export default AdminManagement;
