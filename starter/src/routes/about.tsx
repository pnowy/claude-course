import { createFileRoute } from "@tanstack/react-router";
import { useT } from "#/lib/i18n";

export const Route = createFileRoute("/about")({
	component: About,
});

const STACK = [
	"TanStack Start + Router",
	"TanStack Query",
	"Tailwind CSS + shadcn/ui",
	"Drizzle ORM + SQLite",
	"Biome + Vitest",
];

function About() {
	const t = useT();

	return (
		<main className="page-wrap px-4 pt-12 pb-20">
			<h1 className="display-title rise-in mb-8 text-4xl sm:text-5xl">
				<span className="accent-underline">{t("aboutTitleAccent")}</span>{" "}
				{t("aboutTitle")}
			</h1>
			<section className="rise-in brand-panel rounded-2xl p-6 sm:p-8">
				<p className="m-0 max-w-3xl text-base leading-8">
					{t("aboutIntro")} <span className="font-bold">{t("courseName")}</span>
					.
				</p>
				<ul className="terminal mt-6 mb-0 list-none space-y-1 p-0 text-sm">
					{STACK.map((item) => (
						<li key={item}>
							<span className="text-[var(--brand-accent)]">▸</span> {item}
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
