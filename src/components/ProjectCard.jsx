import { ChevronDown, ChevronLeft } from 'lucide-react';

// Falls back to a plain placeholder block when a project has no
// screenshot yet, instead of rendering a broken <img>.
export function ProjectCard({
	title,
	description,
	tags,
	image,
	imageAlt,
	logo,
	logoAlt,
	organization,
	detailed_description,
	bulleted_list,
	showMoreLabel = 'Show more',
	showLessLabel = 'Show less',
	isExpanded,
	onToggleExpand,
}) {
	// Only show the toggle when there's actually extra content behind it —
	// side projects without a detailed writeup shouldn't get a dead button.
	const hasDetails = Boolean(
		detailed_description || (bulleted_list && bulleted_list.length > 0),
	);
	return (
		<div className='flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6'>
			{isExpanded && (
				// "Go back" sits at the very top when expanded, so collapsing
				// the card never requires scrolling past the image and details
				// first — the whole point of this change.
				<button
					onClick={onToggleExpand}
					aria-expanded={isExpanded}
					className='flex items-center gap-1 self-start text-xs font-semibold bg-accent text-bg hover:bg-accent-hover rounded-full px-3 py-3 transition'
				>
					<ChevronLeft size={14} />
					{showLessLabel}
				</button>
			)}

			{isExpanded && (
				// Header block promoted above the image only while expanded —
				// same fields (logo, organization, title, description) as the
				// collapsed layout below, just reordered so identifying info
				// is visible before the screenshot.
				<div className='flex flex-col gap-2'>
					{logo && (
						<div className='flex items-center gap-2'>
							<img
								src={logo}
								alt={logoAlt}
								className='h-5 w-auto object-contain'
							/>
							<span className='text-xs text-text-muted'>
								{logoAlt}
							</span>
						</div>
					)}
					{organization && (
						<p className='text-xs font-medium text-text-muted'>
							{organization}
						</p>
					)}
					<h3 className='text-lg font-bold'>{title}</h3>
					<p className='text-sm leading-relaxed text-text-muted'>
						{description}
					</p>
				</div>
			)}

			{image ? (
				<img
					src={image}
					alt={imageAlt}
					className='mb-2 aspect-video w-full rounded-lg object-cover'
					loading='lazy'
				/>
			) : (
				<div className='mb-2 flex aspect-video w-full items-center justify-center rounded-lg bg-bg text-xs text-text-muted'>
					No preview yet
				</div>
			)}
			{/* Institution credit — small and secondary by design, so it never
			    competes visually with the screenshot above or the title below.
			    Renders nothing at all when a project has no `logo` set. */}
			{!isExpanded && (
				// Same fields as the expanded header above, just left in their
				// original position (below the image) for the collapsed card.
				<>
					{logo && (
						<div className='flex items-center gap-2'>
							<img
								src={logo}
								alt={logoAlt}
								className='h-5 w-auto object-contain'
							/>
							<span className='text-xs text-text-muted'>
								{logoAlt}
							</span>
						</div>
					)}
					{organization && (
						<p className='text-xs font-medium text-text-muted'>
							{organization}
						</p>
					)}
					<h3 className='text-lg font-bold'>{title}</h3>
					<p className='text-sm leading-relaxed text-text-muted'>
						{description}
					</p>
				</>
			)}
			{isExpanded && (
				<div className='mt-1 border-t border-border pt-3'>
					{detailed_description && (
						<p className='mb-3 text-sm leading-relaxed text-text-muted'>
							{detailed_description}
						</p>
					)}
					{bulleted_list && bulleted_list.length > 0 && (
						<ul className='list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted'>
							{bulleted_list.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					)}
				</div>
			)}
			<div className='mt-auto flex flex-wrap gap-2 pt-2'>
				{tags.map((tag) => (
					<span
						key={tag}
						className='rounded-full bg-bg px-3 py-1 text-xs font-medium text-text-muted'
					>
						{tag}
					</span>
				))}
			</div>
			{!isExpanded && hasDetails && (
				<button
					onClick={onToggleExpand}
					aria-expanded={isExpanded}
					className='flex items-center gap-1 self-end text-xs font-semibold bg-accent text-bg hover:bg-accent-hover rounded-full px-3 py-3 transition'
				>
					{isExpanded ? showLessLabel : showMoreLabel}
					<ChevronDown
						size={14}
						className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
					/>
				</button>
			)}
		</div>
	);
}
