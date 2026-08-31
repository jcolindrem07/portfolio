import { useState } from 'react';
import { ExperienceCard } from './ExperienceCard';

// Mirrors ProjectsGrid's approach: the list needs to know about every
// job at once to hide siblings when one expands, which a single
// ExperienceCard can't coordinate on its own.
export function ExperienceList({ jobs }) {
	// Same reasoning as ProjectsGrid: storing the expanded job's `index`
	// (not a boolean per card) is what enforces "only one open at a time".
	const [expandedIndex, setExpandedIndex] = useState(null);

	const toggleExpand = (index) => {
		setExpandedIndex((current) => (current === index ? null : index));
	};

	return (
		<div className='flex flex-col gap-6'>
			{jobs.map((job) => {
				const isExpanded = expandedIndex === job.index;
				const isHidden = expandedIndex !== null && !isExpanded;

				return (
					<div
						key={job.index}
						aria-hidden={isHidden}
						// Same grid-template-rows technique as ProjectsGrid —
						// animates smoothly against real content height, unlike
						// height/max-height. No md: prefix needed here since
						// experience is a single column at every screen size,
						// so there's no "side-by-side vs. stacked" distinction
						// to scope the collapse to.
						className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
							isHidden
								? 'grid-rows-[0fr] opacity-0 pointer-events-none'
								: 'grid-rows-[1fr] opacity-100'
						}`}
					>
						<div className='overflow-hidden'>
							<ExperienceCard
								{...job}
								isExpanded={isExpanded}
								onToggleExpand={() => toggleExpand(job.index)}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}
