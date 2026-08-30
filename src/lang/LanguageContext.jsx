import { createContext, useContext, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
	// Persisted to localStorage so a returning visitor keeps their choice
	const [lang, setLang] = useState(
		() => localStorage.getItem('lang') || 'en',
	);

	const toggleLang = () => {
		const next = lang === 'en' ? 'es' : 'en';
		setLang(next);
		localStorage.setItem('lang', next);
	};

	// `t` is the translation dictionary for the CURRENT language only —
	// components read t.hero.heading, not translations.en.hero.heading,
	// so they never need to know which language is active.
	const t = translations[lang];

	return (
		<LanguageContext.Provider value={{ lang, toggleLang, t }}>
			{children}
		</LanguageContext.Provider>
	);
}

// Custom hook so components just call useLanguage() instead of
// importing useContext + LanguageContext everywhere.
export function useLanguage() {
	return useContext(LanguageContext);
}
