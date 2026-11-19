import { createFileRoute } from "@tanstack/react-router";
import { type MessageKey, useT } from "#/lib/i18n";

export const Route = createFileRoute("/")({ component: App });

const STEPS: { command: string; note: MessageKey }[] = [
	{ command: "npm install", note: "stepInstall" },
	{ command: "npm run dev", note: "stepDev" },
	{ command: "claude", note: "stepClaude" },
];

function App() {
	const t = useT();

	return (
		<main className="page-wrap px-4 pb-20 pt-14">
			<section className="rise-in grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
				<div>
					<h1 className="display-title mb-6 text-5xl leading-[1.05] sm:text-6xl">
						{t("heroTitle")}{" "}
						<span className="accent-underline">{t("heroTitleAccent")}</span>
					</h1>
					<p className="display-title mb-8 text-2xl sm:text-3xl">
						{t("heroSubtitle")}
					</p>
					<div className="flex flex-wrap gap-3">
						<a
							href="/about"
							className="brand-panel rounded-full px-5 py-2.5 text-sm font-semibold no-underline transition hover:-translate-y-0.5"
						>
							{t("aboutButton")}
						</a>
						<a
							href="https://github.com/pnowy/claude-course"
							target="_blank"
							rel="noreferrer"
							className="rounded-full bg-[var(--brand-accent)] px-5 py-2.5 text-sm font-semibold text-black no-underline transition hover:-translate-y-0.5"
						>
							{t("materialsButton")}
						</a>
					</div>
				</div>
				<img
					src="/course-logo.jpg"
					alt={t("logoAlt")}
					width={1600}
					height={896}
					className="w-full rounded-2xl border border-[var(--brand-line)] shadow-2xl"
				/>
			</section>

			<section
				className="rise-in brand-panel terminal mt-14 rounded-2xl p-6 text-sm sm:p-8 sm:text-base"
				style={{ animationDelay: "0.7s" }}
			>
				<p className="mb-4 text-[var(--brand-accent)]">
					# {t("gettingStarted")}
				</p>
				<ul className="m-0 list-none space-y-2 p-0">
					{STEPS.map((step) => (
						<li key={step.command}>
							<span className="text-[var(--brand-accent)]">$</span>{" "}
							{step.command}{" "}
							<span className="opacity-60"># {t(step.note)}</span>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
