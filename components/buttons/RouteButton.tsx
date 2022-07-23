import { LocalRoute } from "config/router";
import Link from "next/link";

const RouteButton = ({ route }: { route: LocalRoute }) => {
	return (
		<Link href={route.path}>
			<button className="btn btn-primary focus:btn-primary text-primary-content rounded-full">
				{route.name}
			</button>
		</Link>
	);
};

export default RouteButton;
