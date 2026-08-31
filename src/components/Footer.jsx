import { Mail, Phone } from 'lucide-react';
import { Github, Linkedin } from '@thesvg/react';
import { useLanguage } from '../lang/LanguageContext';
import { contact_info } from '../assets/data/contact';

export function Footer() {
	const { t } = useLanguage();

	return (
		<footer
			id='contact'
			className='border-t border-border flex flex-col justify-center gap-7 bg-surface px-6 py-12 text-center md:px-12 md:flex-row'
		>
			<div className='flex flex-col'>
				<h2 className='mb-4 text-2xl font-bold'>{t.contact.title}</h2>
				<p className='mb-6 text-text-muted'>{t.contact.body}</p>
			</div>
			<div className='flex flex-col justify-center gap-3'>
				<a
					href={contact_info.email_href}
					aria-label='Email'
					className='hover:opacity-70'
				>
					<span className='flex items-center justify-center gap-x-2 md:justify-start'>
						<Mail className='h-6 w-6' />
						<span>{contact_info.email}</span>
					</span>
				</a>
				<a
					href={contact_info.whatsapp_link}
					aria-label='Whatsapp'
					className='hover:opacity-70'
				>
					<span className='flex items-center justify-center gap-x-2 md:justify-start'>
						<Phone className='h-6 w-6' />
						<span>{contact_info.phone}</span>
					</span>
				</a>
				<a
					href={contact_info.github_url}
					aria-label='GitHub'
					className='hover:opacity-70'
				>
					<span className='flex items-center justify-center gap-x-2 md:justify-start'>
						<Github className='h-6 w-6' />
						<span>{contact_info.github_handle}</span>
					</span>
				</a>
				<a
					href={contact_info.linkedin_url}
					aria-label='LinkedIn'
					className='hover:opacity-70'
				>
					<span className='flex items-center justify-center gap-x-2 md:justify-start'>
						<Linkedin className='h-6 w-6' />
						<span>{contact_info.linkedin_handle}</span>
					</span>
				</a>
			</div>
		</footer>
	);
}
