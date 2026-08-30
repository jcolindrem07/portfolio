import { Mail, Phone } from 'lucide-react';
import { Github, Linkedin, Whatsapp } from '@thesvg/react';
import { useLanguage } from '../lang/LanguageContext';
import { contact_info } from '../assets/data/contact';

export function Footer() {
	const { t } = useLanguage();

	return (
		<footer
			id='contact'
			className='border-t border-border bg-surface px-6 py-12 text-center md:px-12'
		>
			<h2 className='mb-4 text-2xl font-bold'>{t.contact.title}</h2>
			<p className='mb-6 text-text-muted'>{t.contact.body}</p>
			<div className='flex justify-center gap-6'>
				<a
					href='mailto:jcolindrem07@outlook.es'
					aria-label='Email'
					className='hover:opacity-70'
				>
					<Mail size={22} />
				</a>
				<a
					href='https://wa.me/50488044372'
					aria-label='Whatsapp'
					className='hover:opacity-70'
				>
					<Whatsapp size={22} />
				</a>
				<a
					href='https://github.com/yourhandle'
					aria-label='GitHub'
					className='hover:opacity-70'
				>
					<Github className='h-6 w-6' />
				</a>
				<a
					href='https://www.linkedin.com/in/joseph-colindres'
					aria-label='LinkedIn'
					className='hover:opacity-70'
				>
					<Linkedin className='h-6 w-6' />
				</a>
			</div>
		</footer>
	);
}
