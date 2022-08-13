const Welcome = ({
	name,
	isAdmin,
}: {
	name: string | null;
	isAdmin: boolean;
}) => {
	return (
		<div className="flex flex-col md:flex-row gap-3 items-center">
			<span className="text-3xl">
				{!!name ? (
					<>
						Bienvenue, <strong>{name}</strong>
					</>
				) : (
					<>Bienvenue</>
				)}
			</span>
			{isAdmin && (
				<div className="badge badge-warning badge-lg">Administrateur</div>
			)}
		</div>
	);
};

export default Welcome;
