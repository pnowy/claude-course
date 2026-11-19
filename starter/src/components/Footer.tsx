import { useT } from "#/lib/i18n";

export default function Footer() {
	const t = useT();
	const year = new Date().getFullYear();

	return (
		<footer className="mt-auto border-t border-[var(--brand-line)] bg-[var(--brand-panel)] px-4 pb-14 pt-10">
			<div className="page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
				<p className="m-0 text-sm">
					&copy; {year}{" "}
					<a
						href="https://przemeknowak.com/courses"
						target="_blank"
						rel="noopener noreferrer"
					>
						przemeknowak.com
					</a>
					. {t("rights")}
				</p>
				<p className="terminal m-0 text-sm opacity-80">{t("builtWith")}</p>
			</div>
		</footer>
	);
}
