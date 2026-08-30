// `variant` swaps the color treatment; `as` lets this render as either
// a <button> (onClick actions) or an <a> (anchor links like "#projects"),
// since your current CTA is a link styled as a button. `className` is
// accepted separately (not just spread via ...props) so callers can add
// extra spacing (e.g. "mt-2") without overwriting the base styles.
export function Button({
	children,
	variant = 'primary',
	as = 'button',
	className = '',
	...props
}) {
	const Tag = as;

	const styles =
		variant === 'primary'
			? 'bg-accent text-bg hover:bg-accent-hover'
			: 'bg-surface text-text border border-border hover:opacity-90';

	return (
		<Tag
			className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition ${styles} ${className}`}
			{...props} // passes through href, onClick, aria-label, etc.
		>
			{children}
		</Tag>
	);
}
