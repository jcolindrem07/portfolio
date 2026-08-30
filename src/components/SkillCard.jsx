// Renders one skill as an icon + label. The icon is loaded straight from
// theSVG's public CDN by slug (https://thesvg.org/icons/{slug}/default.svg)
// rather than importing a named React component — this avoids needing to
// know each icon's exact export name in @thesvg/react, and only needs the
// slug from that icon's URL on thesvg.org. If an icon doesn't render, the
// slug in skills.js is almost certainly the thing to check first.
export function SkillCard({ title, icon }) {
	return (
		<div className='flex flex-col items-center gap-2 rounded-xl border border-border bg-surface p-4 text-center'>
			<img
				src={`https://thesvg.org/icons/${icon}/default.svg`}
				alt={title}
				className='h-8 w-8'
				loading='lazy'
			/>
			<span className='text-xs font-medium text-text-muted'>{title}</span>
		</div>
	);
}
