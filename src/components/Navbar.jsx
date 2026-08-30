import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useLanguage } from '../lang/LanguageContext';

export function Navbar() {
	const { isDark, toggle } = useDarkMode();
	const { lang, toggleLang, t } = useLanguage();

	return (
		<header className='sticky top-0 z-10 flex items-center justify-between border-b border-border bg-surface px-6 py-4 md:px-12'>
			<span className='text-lg font-bold tracking-tight'>
				Joseph Colindres
			</span>

			<nav className='hidden gap-8 text-sm font-medium md:flex'>
				<a href='#about' className='hover:opacity-70'>
					{t.nav.about}
				</a>
				<a href='#skills' className='hover:opacity-70'>
					{t.nav.skills}
				</a>{' '}
				<a href='#experience' className='hover:opacity-70'>
					{t.nav.experience}
				</a>
				<a href='#projects' className='hover:opacity-70'>
					{t.nav.projects}
				</a>
				<a href='#contact' className='hover:opacity-70'>
					{t.nav.contact}
				</a>
			</nav>

			<div className='flex items-center gap-4'>
				<button
					onClick={toggle}
					aria-label='Toggle dark mode'
					className='rounded-full p-2 transition hover:opacity-70'
				>
					{isDark ? <Sun size={20} /> : <Moon size={20} />}
				</button>
				<button
					onClick={toggleLang}
					aria-label='Toggle language'
					className='text-sm font-semibold hover:opacity-70'
				>
					{lang === 'en' ? 'ES' : 'EN'}
				</button>
			</div>
		</header>
	);
}
