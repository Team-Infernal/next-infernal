import Image from "next/image";

const NavbarAvatar = ({ avatarUrl }: { avatarUrl: string }) => {
	if (!avatarUrl) {
		return (
			<div className="avatar placeholder">
				<div className="bg-neutral-focus text-neutral-content rounded-full">
					<span className="">INF</span>
				</div>
			</div>
		);
	}
	return (
		<div className="avatar">
			<div className="w-8 rounded-full">
				<Image
					height={32}
					width={32}
					src={avatarUrl}
					alt="Avatar"
				/>
			</div>
		</div>
	);
};

export default NavbarAvatar;
