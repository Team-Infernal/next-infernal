import Link from "next/link";

const FooterColumn = ({ name, data, isLocal }) => {
	if (isLocal) {
		return (
			<div>
				<span className="footer-title">{name}</span>
				{data.map(el => (
					<Link
						key={el.name}
						href={el.path}
					>
						<a className="link link-hover">{el.name}</a>
					</Link>
				))}
			</div>
		);
	}

	return (
		<div>
			<span className="footer-title">{name}</span>
			{data.map(el => (
				<a
					key={el.name}
					href={el.link}
					target="_blank"
					className="link link-hover"
					rel="noreferrer"
				>
					{el.name}
				</a>
			))}
		</div>
	);
};

export default FooterColumn;
