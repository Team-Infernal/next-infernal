const Card = ({
	title,
	subtitle,
	description,
	link,
	linkText,
	linkTarget,
}: {
	title: string;
	subtitle?: string;
	description: string;
	link?: string;
	linkText?: string;
	linkTarget?: "_blank" | "_self";
}) => {
	const createButton = (link: string, text: string) => {
		return (
			<div className="card-actions justify-end">
				<a
					href={link}
					target={linkTarget}
					rel={linkTarget === "_blank" ? "noreferrer" : ""}
				>
					<button className="btn btn-primary">{text}</button>
				</a>
			</div>
		);
	};

	return (
		<div className="card bg-base-100 shadow-2xl">
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				{subtitle && <h2 className="card-title text-base">{subtitle}</h2>}
				<p>{description}</p>
				{link && linkText && createButton(link, linkText)}
			</div>
		</div>
	);
};

export default Card;
