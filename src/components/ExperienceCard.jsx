import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Same expand/collapse shape as ProjectCard below: shows a compact
// summary (role, organization, dates) by default, and only reveals the
// full responsibilities list + tech tags when the user asks for them —
// otherwise a page with several jobs gets very long very fast.
export function ExperienceCard({
	title,
	organization,
	start_date,
	end_date,
	type,
	list,
	image,
	imageAlt,
	tags,
}) {
	// Each card owns its own expanded state — expanding one job has no
	// effect on any other, so this doesn't need to live in App.jsx.
	const [expanded, setExpanded] = useState(false);

	return (
		<div className='rounded-2xl border border-border bg-surface p-6'>
			<div className='flex items-start justify-between gap-4'>
				<div className='flex items-center gap-4'>
					{image && (
						<img
							src={image}
							alt={imageAlt}
							className='h-10 w-auto object-contain'
						/>
					)}
					<div>
						<h3 className='text-lg font-bold'>{title}</h3>
						<p className='text-sm text-text-muted'>
							{organization} · {type}
						</p>
						<p className='text-xs text-text-muted'>
							{start_date} – {end_date}
						</p>
					</div>
				</div>

				{/* aria-expanded tells screen readers this button controls
				    collapsible content — the rotate-180 is purely the visual cue. */}
				<button
					onClick={() => setExpanded((prev) => !prev)}
					aria-label='Toggle details'
					aria-expanded={expanded}
					className='shrink-0 rounded-full p-2 transition hover:opacity-70'
				>
					<ChevronDown
						size={20}
						className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
					/>
				</button>
			</div>

			{expanded && (
				<div className='mt-4 border-t border-border pt-4'>
					<ul className='list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted'>
						{list.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
					<div className='mt-4 flex flex-wrap gap-2'>
						{tags.map((tag) => (
							<span
								key={tag}
								className='rounded-full bg-bg px-3 py-1 text-xs font-medium text-text-muted'
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
