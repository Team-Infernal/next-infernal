const SignOutButton = ({ signOut }: { signOut: () => void }) => {
	return (
		<button
			className={`btn btn-primary btn-outline text-primary-content rounded-full self-center`}
			onClick={() => signOut()}
		>
			Se déconnecter
		</button>
	);
};

export default SignOutButton;
