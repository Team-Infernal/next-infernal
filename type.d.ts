type CVDoc = {
	id: string;
	userId: string;
	fullName: string;
	title: string;
	description: string;
	link: string;
};

type CVDocResponse = {
	success: boolean;
	docs: CVDoc[];
};
