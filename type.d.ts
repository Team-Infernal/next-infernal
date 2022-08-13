type CVDoc = {
	id: string;
	userId: string;
	fullName: string;
	title: string;
	description: string;
	link: string;
	uploaded: number;
	verified: boolean;
};

type CVDocResponse = {
	success: boolean;
	data: CVDoc;
};

type CVDocsResponse = {
	success: boolean;
	data: CVDoc[];
};

type AccountActiveTab = "general" | "admin-general" | "admin-cv";
