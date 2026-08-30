import { ArrowRight, MessageCircleMore, FileDown } from 'lucide-react';
import { useLanguage } from './lang/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { ProjectCard } from './components/ProjectCard';
import { projects } from './assets/data/projects';
import { skills, languages } from './assets/data/skills';
import { experience } from './assets/data/experience';
import { SkillCard } from './components/SkillCard';
import { ExperienceCard } from './components/ExperienceCard';
import { LanguagesList } from './components/LanguagesList';
import { contact_info } from './assets/data/contact';

export default function PortfolioHome() {
	const { t, lang } = useLanguage();

	const a = [
		{
			index: 1,
			name: contact_info.location,
			level: {
				en: contact_info.avaliability.en,
				es: contact_info.avaliability.es,
			},
		},
	];

	return (
		<div className='min-h-screen bg-bg font-sans text-text transition-colors duration-300 dark:bg-bg dark:text-text'>
			<Navbar />
			<div className='flex flex-col md:flex-row'>
				{/* ---------- Hero ---------- */}
				<section className='flex flex-col items-start gap-6 px-6 py-24 w-full md:px-12 md:w-2/3'>
					<p className='text-sm font-semibold uppercase tracking-widest text-text-muted'>
						{t.hero.role}
					</p>
					<h1 className='text-4xl font-extrabold leading-tight md:text-6xl'>
						{t.hero.heading}
					</h1>
					<p className='max-w-xl text-lg text-text-muted'>
						{t.hero.tagline}
					</p>
					<div className='flex flex-row gap-x-2'>
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
							href='#contact'
							variant=''
							className='mt-2'
						>
							{t.hero.resume_btn} <FileDown size={18} />{' '}
						</Button>
					</div>
				</section>
				{/* ---------- About ---------- */}
				<section
					id='about'
					className='px-6 py-16 w-full md:pr-12 md:pl-6 md:pt-20 md:w-1/3'
				>
					<h2 className='mb-4 text-2xl font-bold'>{t.about.title}</h2>{' '}
					<p className='leading-relaxed text-text-muted'>
						{t.about.body}
					</p>
					<div>
						<LanguagesList
							title={t.about.location_title}
							languages={a.map((item) => ({
								index: item.index,
								name: item.name,
								level: item.level[lang],
							}))}
						/>
					</div>
				</section>
			</div>
			{/* ---------- Skills ---------- */}
			<section
				id='skills'
				className='mx-auto max-w-5xl px-6 py-16 md:px-12'
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
				className='mx-auto max-w-3xl px-6 py-16 md:px-12'
			>
				<h2 className='mb-8 text-2xl font-bold'>{t.jobs.title}</h2>
				<div className='flex flex-col gap-6'>
					{experience.map((job) => (
						<ExperienceCard
							key={job.index}
							title={job.title[lang]}
							organization={job.organization[lang]}
							start_date={job.start_date[lang]}
							end_date={job.end_date[lang]}
							type={job.type[lang]}
							list={job.list[lang]}
							image={job.image}
							imageAlt={job.imageAlt[lang]}
							tags={job.tags}
						/>
					))}
				</div>
			</section>
			{/* ---------- Projects ---------- */}
			<section
				id='projects'
				className='mx-auto max-w-5xl px-6 py-16 md:px-12'
			>
				<h2 className='mb-8 text-2xl font-bold'>{t.projects.title}</h2>
				<div className='grid gap-6 md:grid-cols-3'>
					{/* .map() over the `projects` array declared at the top of the file —
                add/remove/edit objects there, not here, to update this grid */}
					{projects.map((project) => (
						<ProjectCard
							key={project.index}
							{...project}
							title={project.title[lang]}
							description={project.description[lang]}
							imageAlt={project.imageAlt[lang]}
							organization={project.organization?.[lang]}
							detailed_description={
								project.detailed_description?.[lang]
							}
							bulleted_list={project.bulleted_list?.[lang]}
							showMoreLabel={t.projects.showMore}
							showLessLabel={t.projects.showLess}
						/>
					))}
				</div>
			</section>
			{/* ---------- Contact / Footer ---------- */}
			<Footer />
		</div>
	);
}
