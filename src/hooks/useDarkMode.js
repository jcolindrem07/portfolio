import { useState, useEffect } from 'react';

// Bundles the toggle state, the "dark" class side-effect on <html>, and
// localStorage persistence into one reusable unit — any component can
// call useDarkMode() instead of re-implementing this logic.
export function useDarkMode() {
	const [isDark, setIsDark] = useState(
		() => localStorage.getItem('theme') === 'dark',
	);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDark);
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}, [isDark]); // re-runs only when isDark changes

	const toggle = () => setIsDark((prev) => !prev);

	return { isDark, toggle };
}
