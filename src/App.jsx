import {
	ArrowRight,
	MessageCircleMore,
	FileDown,
	MapPin,
	MonitorSmartphone,
} from 'lucide-react';
import { useLanguage } from './lang/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { ProjectsGrid } from './components/ProjectsGrid';
import { projects } from './assets/data/projects';
import { skills, languages } from './assets/data/skills';
import { experience } from './assets/data/experience';
import { SkillCard } from './components/SkillCard';
import { ExperienceList } from './components/ExperienceList';
import { LanguagesList } from './components/LanguagesList';
import { contact_info, SIMPLE_NAME } from './assets/data/contact';
import { QuickGuide } from './components/QuickGuide';

export default function PortfolioHome() {
	const { t, lang } = useLanguage();

	const resumeHref = `./resume/resume-${lang}.pdf`;

	return (
		<div className='min-h-screen bg-bg font-sans text-text transition-colors duration-300 dark:bg-bg dark:text-text'>
			<Navbar />
			<QuickGuide
				message={t.quickGuide.message}
				dismissLabel={t.quickGuide.dismiss}
			/>
			<div className='flex flex-col md:flex-row'>
				{/* ---------- Hero ---------- */}
				<section className='flex flex-col justify-items-center gap-6 px-6 pb-16 pt-10 w-full md:px-12 md:py-24 md:w-2/3 md:justify-start'>
					<p className='text-sm font-semibold uppercase tracking-widest text-text-muted text-center md:text-start'>
						{t.hero.role}
					</p>
					<h1 className='text-4xl font-extrabold leading-tight text-center md:text-start md:text-6xl'>
						{t.hero.heading}
					</h1>
					<p className='text-lg text-text-muted w-full text-center md:text-start'>
						{t.hero.tagline}
					</p>
					<div className='flex flex-row gap-x-2 w-full justify-center overflow-x-hidden flex-wrap md:justify-start'>
						<Button
							as='a'
							href='#projects'
							variant='primary'
							className='mt-2'
						>
							{t.hero.cta} <ArrowRight size={18} />{' '}
						</Button>
						<Button
							as='a'
							href='#contact'
							variant='primary'
							className='mt-2'
						>
							{t.hero.contact_btn}{' '}
							<MessageCircleMore size={18} />{' '}
						</Button>
						<Button
							as='a'
							href={resumeHref}
							download={`${SIMPLE_NAME.replace(/\s/g, '-')}-${t.resume}-${lang.toUpperCase()}.pdf`}
							variant='secondary'
							className='mt-2'
						>
							{t.hero.resume_btn} <FileDown size={18} />{' '}
						</Button>
					</div>
				</section>
				{/* ---------- About ---------- */}
				<section
					id='about'
					className='px-6 pb-16 pt-0 w-full md:pr-12 md:pl-6 md:pt-20 md:w-1/3'
				>
					<h2 className='mb-4 text-2xl font-bold'>{t.about.title}</h2>{' '}
					<p className='leading-relaxed text-text-muted'>
						{t.about.body}
					</p>
					<div className='mt-10'>
						<h3 className='mb-4 text-sm font-semibold uppercase tracking-widest text-text-muted'>
							{t.about.location_title}
						</h3>
						<div className='flex flex-wrap gap-3'>
							<span className='flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm'>
								<MapPin size={18} />
								<span className='font-semibold'>
									{contact_info.location}
								</span>
							</span>

							<span className='flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm'>
								<MonitorSmartphone size={18} />
								<span className='text-text-muted'>
									{t.about.availability_title}
									{': '}
									<strong className='font-semibold'>
										{t.about.availability}
									</strong>
								</span>
							</span>
						</div>
					</div>
				</section>
			</div>
			{/* ---------- Skills ---------- */}
			<section
				id='skills'
				className='mx-auto max-w-6xl px-6 pb-16 md:py-16 md:px-12'
			>
				<h2 className='mb-8 text-2xl font-bold'>{t.skills.title}</h2>
				<div className='grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6'>
					{skills.map((skill) => (
						<SkillCard
							key={skill.index}
							title={skill.title[lang]}
							icon={skill.icon}
						/>
					))}
				</div>
				<LanguagesList
					title={t.languages.title}
					languages={languages.map((language) => ({
						index: language.index,
						name: language.name[lang],
						level: language.level[lang],
					}))}
				/>
			</section>
			{/* ---------- Experience ---------- */}
			<section
				id='experience'
				className='mx-auto max-w-6xl px-6 pb-16 md:px-12 md:py-16'
			>
				<h2 className='mb-8 text-2xl font-bold'>{t.jobs.title}</h2>
				<ExperienceList
					jobs={experience.map((job) => ({
						...job,
						title: job.title[lang],
						organization: job.organization[lang],
						start_date: job.start_date[lang],
						end_date: job.end_date[lang],
						type: job.type[lang],
						list: job.list[lang],
						imageAlt: job.imageAlt[lang],
						showLessLabel: t.jobs.showLess,
					}))}
				/>
			</section>
			{/* ---------- Projects ---------- */}
			<section
				id='projects'
				className='mx-auto max-w-6xl px-6 pb-16 md:px-12 md:py-16'
			>
				<h2 className='mb-8 text-2xl font-bold'>{t.projects.title}</h2>
				{/* ProjectsGrid stays language-agnostic — resolve every
				    translated field into a plain object here, same as before,
				    just built once as an array instead of inline per-card */}
				<ProjectsGrid
					projects={projects.map((project) => ({
						...project,
						title: project.title[lang],
						description: project.description[lang],
						imageAlt: project.imageAlt[lang],
						organization: project.organization?.[lang],
						detailed_description:
							project.detailed_description?.[lang],
						bulleted_list: project.bulleted_list?.[lang],
						showMoreLabel: t.projects.showMore,
						showLessLabel: t.projects.showLess,
					}))}
				/>
			</section>
			{/* ---------- Contact / Footer ---------- */}
			<Footer />
		</div>
	);
}
