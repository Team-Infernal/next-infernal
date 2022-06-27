import FooterColumn from "components/footer/FooterColumn";

const FooterColumns = ({ columns }) => {
	return columns.map(column => (
		<FooterColumn
			key={column.name}
			name={column.name}
			data={column.data}
			isLocal={column.isLocal}
		/>
	));
};

export default FooterColumns;
