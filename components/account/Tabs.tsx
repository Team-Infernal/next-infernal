import Link from "next/link";
import cn from "classnames";

const tabs = [
	{
		id: "general",
		title: "Général",
		path: "/account",
		requires: [],
	},
	{
		id: "admin-general",
		title: "Administration",
		path: "/account/admin",
		requires: ["admin"],
	},
	{
		id: "admin-cv",
		title: "Gestion CV",
		path: "/account/admin/cv",
		requires: ["admin"],
	},
];

type Props = {
	activeTab: "general" | "admin-general" | "admin-cv";
	role: "member" | "admin";
};

const Tabs = ({ activeTab, role = "member" }: Props) => {
	return (
		<div className="tabs tabs-boxed self-center md:self-start">
			{tabs
				.filter(tab => {
					return tab.requires.includes(role) || tab.requires.length === 0;
				})
				.map(tab => (
					<Link
						key={tab.id}
						href={tab.path}
					>
						<a
							className={cn("tab", {
								"tab-active": tab.id === activeTab,
							})}
						>
							{tab.title}
						</a>
					</Link>
				))}
		</div>
	);
};

export default Tabs;
