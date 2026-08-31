import { useState, useEffect } from 'react';

// Tracks whether a given localStorage key has been set before. Takes a
// `key` so this can be reused for other one-time hints later, not just
// this specific guide, without writing a near-duplicate hook each time.
export function useFirstVisit(key) {
	const [isFirstVisit, setIsFirstVisit] = useState(false);

	// Runs once on mount to check localStorage — not in useState's
	// initializer, since reading localStorage during render (rather than
	// after mount) can cause a mismatch warning if this ever runs
	// server-side, and costs nothing here since it's a one-time check.
	useEffect(() => {
		const alreadySeen = localStorage.getItem(key);
		if (!alreadySeen) {
			setIsFirstVisit(true);
		}
	}, [key]);

	// Called when the user dismisses the guide — writes the flag so
	// useEffect above won't set isFirstVisit to true again on a future visit.
	const dismiss = () => {
		localStorage.setItem(key, 'true');
		setIsFirstVisit(false);
	};

	return [isFirstVisit, dismiss];
}
