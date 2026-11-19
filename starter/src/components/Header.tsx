import { Link } from "@tanstack/react-router";
import { useT } from "#/lib/i18n";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
	const t = useT();

	return (
		<header className="sticky top-0 z-50 border-b border-[var(--brand-line)] bg-[var(--brand-panel)] px-4 backdrop-blur-lg">
			<nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4">
				<h2 className="m-0 flex-shrink-0 text-base font-semibold tracking-tight">
					<Link
						to="/"
						className="display-title inline-flex items-center gap-2 text-lg no-underline"
					>
						<span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-accent)]" />
						{t("brand")}
					</Link>
				</h2>

				<div className="ml-auto flex items-center gap-1.5 sm:ml-0 sm:gap-2">
					<ThemeToggle />
					<LanguageToggle />
				</div>

				<div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-2 sm:w-auto sm:flex-nowrap sm:pb-0">
					<Link
						to="/"
						className="nav-link"
						activeProps={{ className: "nav-link is-active" }}
					>
						{t("navHome")}
					</Link>
					<Link
						to="/about"
						className="nav-link"
						activeProps={{ className: "nav-link is-active" }}
					>
						{t("navAbout")}
					</Link>
					<a
						href="https://tanstack.com/start/latest/docs/framework/react/overview"
						className="nav-link"
						target="_blank"
						rel="noreferrer"
					>
						{t("navDocs")}
					</a>
				</div>
			</nav>
		</header>
	);
}
