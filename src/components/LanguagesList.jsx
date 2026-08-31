// Deliberately small — not a full <section>, since it's meant to sit
// inside another section (Skills, in App.jsx below) rather than have its
// own scroll anchor and heading level.
export function LanguagesList({ title, languages }) {
	return (
		<div className='mt-10'>
			<h3 className='mb-4 text-sm font-semibold uppercase tracking-widest text-text-muted'>
				{title}
			</h3>
			<ul className='flex flex-wrap gap-4'>
				{languages.map((language) => (
					<li
						key={language.index}
						className='rounded-full border border-border bg-surface px-4 py-2 text-sm'
					>
						<span className='font-semibold'>{language.name}:</span>
						<span className='text-text-muted'>
							{' '}
							{language.level}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
