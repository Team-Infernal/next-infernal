import Card from "components/cards/Card";

const CV = ({ cv }: { cv: CVDoc }) => {
	const { userId, fullName, title, description, link } = cv;

	return (
		<Card
			title={fullName}
			subtitle={title}
			description={description}
			link={link}
			linkText={"Consulter le CV"}
			linkTarget={"_blank"}
		/>
	);
};

export default CV;
