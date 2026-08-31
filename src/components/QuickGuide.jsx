import { X } from 'lucide-react';
import { useFirstVisit } from '../hooks/useFirstVisit';

// Small one-time popover pointing at the Navbar's dark-mode and language
// toggles. Renders nothing at all (not just hidden) once dismissed or on
// any return visit, since isFirstVisit becomes false in both cases.
export function QuickGuide({ message, dismissLabel }) {
	const [isFirstVisit, dismiss] = useFirstVisit('hasSeenQuickGuide');

	if (!isFirstVisit) return null;

	return (
		<div className='fixed right-4 top-20 z-20 max-w-xs rounded-xl border border-border bg-surface p-4 shadow-2xl'>
			{/* Small diamond rotated 45deg to read as a speech-bubble arrow,
			    positioned to point up toward the toggle buttons in the Navbar. */}
			<div className='absolute -top-1.5 right-8 h-3 w-3 rotate-45 border-l border-t border-border bg-surface' />

			<button
				onClick={dismiss}
				aria-label='Dismiss'
				className='absolute right-2 top-2 rounded-full p-1 hover:opacity-70'
			>
				<X size={14} />
			</button>

			<p className='pr-4 text-sm text-text-muted'>{message}</p>

			<button
				onClick={dismiss}
				className='mt-3 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-bg transition hover:bg-accent-hover'
			>
				{dismissLabel}
			</button>
		</div>
	);
}
