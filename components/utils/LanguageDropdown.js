import { useRouter } from "next/router";

import config from "../../config";

const LanguageDropdown = () => {
	const router = useRouter();
	const { locale, pathname } = router;

	const changeLanguage = ({ target: newLocale }) => {
		router.push(pathname, pathname, { locale: newLocale.value });
	};

	return (
		<select
			defaultValue={locale}
			onChange={changeLanguage}
		>
			{config.locales.map(locale => (
				<option
					key={locale.locale}
					value={locale.locale}
				>
					{locale.name}
				</option>
			))}
		</select>
	);
};

export default LanguageDropdown;
