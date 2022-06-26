import { useState } from "react";

import { useAuth } from "../../context/AuthUserContext";

const allowedFileTypes = ["image/jpeg", "image/png"];

const Account = () => {
	const [file, setFile] = useState();
	const { uploadUserAvatar } = useAuth();

	const onFileChange = async event => {
		const uploadedFile = event.target.files[0];
		if (!allowedFileTypes.includes(uploadedFile.type)) {
			return;
		}
		setFile(uploadedFile);
		uploadUserAvatar(uploadedFile);
	};

	return (
		<div>
			<input
				type="file"
				onChange={onFileChange}
			/>
		</div>
	);
};

export default Account;
