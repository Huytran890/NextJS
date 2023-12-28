'use client';

import { useState, useEffect } from 'react';

const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(() => {
		if (typeof window !== 'undefined') {
			const media = window.matchMedia(query);
			return media.matches;
		}
		return false;
	});

	useEffect(() => {
		
		const handleResize = () => {
			if (typeof window !== 'undefined') {
				const media = window.matchMedia(query);
				if (media.matches !== matches) {
					setMatches(media.matches);
				}
			}
		};

		// Throttle the resize event to improve performance
		const handleResizeThrottled = () => {
			let timeoutId: ReturnType<typeof setTimeout>;
			return () => {
				if (timeoutId) {
					clearTimeout(timeoutId);
				}
				timeoutId = setTimeout(() => {
					handleResize();
				}, 100);
			};
		};

		window.addEventListener('resize', handleResizeThrottled());

		return () =>
			window.removeEventListener('resize', handleResizeThrottled());
	}, [matches, query]);

	return matches;
};

export default useMediaQuery;
