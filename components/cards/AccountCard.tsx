const AccountCard = ({ children }: React.PropsWithChildren<{}>) => {
	return (
		<div className="card w-full shadow-2xl bg-base-100">
			<div className="card-body">{children}</div>
		</div>
	);
};

export default AccountCard;
