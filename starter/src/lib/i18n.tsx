import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

export type Language = "en" | "pl";

const en = {
	brand: "Claude Code course",
	navHome: "Home",
	navAbout: "About",
	navDocs: "Docs",
	themeLight: "Light",
	themeDark: "Dark",
	themeAuto: "System",
	languageSwitch: "Przełącz na polski",
	heroTitle: "Claude Code",
	heroTitleAccent: "in a nutshell",
	heroSubtitle: "for programmers and beyond",
	aboutButton: "About this starter",
	materialsButton: "Course materials",
	logoAlt: "Claude Code course logo",
	gettingStarted: "getting started",
	stepInstall: "install dependencies",
	stepDev: "start the app on :3000",
	stepClaude: "start Claude Code in this folder",
	aboutTitleAccent: "About",
	aboutTitle: "this starter",
	aboutIntro: "Starter project for the course",
	courseName: "Claude Code in a nutshell — for programmers and beyond",
	rights: "All rights reserved.",
	builtWith: "Built with TanStack Start",
};

export type MessageKey = keyof typeof en;

// Typed against `en`, so a missing Polish translation is a compile error.
const pl: Record<MessageKey, string> = {
	brand: "Kurs Claude Code",
	navHome: "Start",
	navAbout: "O projekcie",
	navDocs: "Dokumentacja",
	themeLight: "Jasny",
	themeDark: "Ciemny",
	themeAuto: "Systemowy",
	languageSwitch: "Switch to English",
	heroTitle: "Claude Code",
	heroTitleAccent: "w pigułce",
	heroSubtitle: "dla programistów i nie tylko",
	aboutButton: "O tym starterze",
	materialsButton: "Materiały kursu",
	logoAlt: "Logo kursu Claude Code",
	gettingStarted: "pierwsze kroki",
	stepInstall: "instalacja zależności",
	stepDev: "uruchomienie aplikacji na :3000",
	stepClaude: "uruchomienie Claude Code w tym folderze",
	aboutTitleAccent: "O",
	aboutTitle: "starterze",
	aboutIntro: "Projekt startowy do kursu",
	courseName: "Claude Code w pigułce — dla programistów i nie tylko",
	rights: "Wszelkie prawa zastrzeżone.",
	builtWith: "Zbudowane na TanStack Start",
};

const messages: Record<Language, Record<MessageKey, string>> = { en, pl };

const LanguageContext = createContext<{
	language: Language;
	setLanguage: (language: Language) => void;
}>({ language: "en", setLanguage: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguageState] = useState<Language>("en");

	// SSR always renders English; the stored or browser language is applied after hydration.
	useEffect(() => {
		const stored = window.localStorage.getItem("language");
		const initial =
			stored === "pl" || stored === "en"
				? stored
				: navigator.language.startsWith("pl")
					? "pl"
					: "en";
		setLanguageState(initial);
	}, []);

	useEffect(() => {
		document.documentElement.lang = language;
	}, [language]);

	function setLanguage(next: Language) {
		setLanguageState(next);
		window.localStorage.setItem("language", next);
	}

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	return useContext(LanguageContext);
}

export function useT() {
	const { language } = useLanguage();
	return (key: MessageKey) => messages[language][key];
}
