import { useLanguage, useT } from "#/lib/i18n";

export default function LanguageToggle() {
	const { language, setLanguage } = useLanguage();
	const t = useT();

	return (
		<button
			type="button"
			onClick={() => setLanguage(language === "en" ? "pl" : "en")}
			aria-label={t("languageSwitch")}
			title={t("languageSwitch")}
			className="brand-panel inline-flex cursor-pointer items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
		>
			<span className={language === "pl" ? "" : "opacity-50"}>PL</span>
			<span className="opacity-50">/</span>
			<span className={language === "en" ? "" : "opacity-50"}>EN</span>
		</button>
	);
}
