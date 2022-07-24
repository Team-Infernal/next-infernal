import { useEffect, useState } from "react";

const useDarkMode = (): [
	string,
	React.Dispatch<React.SetStateAction<string>>
] => {
	const [theme, setTheme] = useState<string>(
		typeof window !== "undefined" ? localStorage.theme : "infernal-light"
	);
	const colorTheme =
		theme === "infernal-dark" ? "infernal-light" : "infernal-dark";

	useEffect(() => {
		const root = window.document.documentElement;
		root.setAttribute("data-theme", theme);

		if (typeof window !== "undefined") {
			localStorage.setItem("theme", theme);
		}
	}, [theme]);

	return [colorTheme, setTheme];
};

export default useDarkMode;
