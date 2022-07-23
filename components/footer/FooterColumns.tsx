import FooterColumn from "components/footer/FooterColumn";

import { LocalRoute } from "config/router";

interface FooterColumnType {
	name: string;
	data: LocalRoute[];
	isLocal: boolean;
}

const FooterColumns = ({ columns }: { columns: FooterColumnType[] }) => {
	return (
		<>
			{columns.map(column => (
				<FooterColumn
					key={column.name}
					name={column.name}
					data={column.data}
					isLocal={column.isLocal}
				/>
			))}
		</>
	);
};

export default FooterColumns;
