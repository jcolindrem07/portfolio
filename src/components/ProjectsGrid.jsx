import { useState } from 'react';
import { ProjectCard } from './ProjectCard';

// Owns the layout/animation logic that needs visibility into every
// project at once — this can't live inside ProjectCard itself, since a
// single card has no way to know whether a sibling is expanded.
export function ProjectsGrid({ projects }) {
	// Storing the expanded project's `index` (rather than a boolean per
	// card) is what enforces "only one expanded at a time" — expanding a
	// new card just overwrites this value instead of needing to close the
	// previous one first.
	const [expandedIndex, setExpandedIndex] = useState(null);

	const toggleExpand = (index) => {
		setExpandedIndex((current) => (current === index ? null : index));
	};

	return (
		<div className='grid gap-6 md:grid-cols-2'>
			{projects.map((project) => {
				const isExpanded = expandedIndex === project.index;
				// True only when SOME card is expanded and it isn't this one —
				// this is what drives a sibling's collapse-and-disappear effect.
				const isHidden = expandedIndex !== null && !isExpanded;

				return (
					<div
						key={project.index}
						// Removes the collapsed sibling from the accessibility
						// tree while it's visually collapsed, so screen reader
						// users don't land on a card that looks empty.
						aria-hidden={isHidden}
						// grid-template-rows animates smoothly between 0fr and 1fr
						// based on actual content height — unlike height/max-height,
						// which can't transition against "auto" without guessing a
						// pixel cap. Scoped to md: only, per your ask — on mobile
						// (grid-cols-1 already), every card stays visible and
						// expands in place via ProjectCard's own layout.
						className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out grid-rows-[1fr] opacity-100 ${
							isExpanded ? 'md:col-span-2' : ''
						} ${
							isHidden
								? 'md:grid-rows-[0fr] md:opacity-0 md:pointer-events-none'
								: 'md:grid-rows-[1fr] md:opacity-100'
						}`}
					>
						{/* overflow-hidden is required for the 0fr state to actually
						    clip content rather than just squish it visibly */}
						<div className='overflow-hidden h-full'>
							<ProjectCard
								{...project}
								isExpanded={isExpanded}
								onToggleExpand={() =>
									toggleExpand(project.index)
								}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}
