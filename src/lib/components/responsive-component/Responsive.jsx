import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';

// UTILS
//
////////////////////////////////////////////////////////////////////////////////

const useShouldCheckMediaQuery = () => {
	const [isClient, setIsClient] = useState(false);

	useIsomorphicLayoutEffect(() => {
		if (typeof window !== 'undefined') {
			setIsClient(true);
		}
	}, []);

	return isClient;
};

// BREAKPOINTS
//
////////////////////////////////////////////////////////////////////////////////

/**
 * These are the default BS4 media breakpoints.
 *
 * Extra small devices (portrait phones, less than 576px)
 * No media query since this is the default in Bootstrap
 *
 * @see https://getbootstrap.com/docs/4.0/layout/grid/#grid-options
 * @type {{small: number, large: number, extraLarge: number, medium: number}}
 *
 * NOTE: If any of these are desired to be changed, please change them here, but
 * also configure the bootstrap 4 sass versions of these as well so everything
 * matches up.
 *
 */
const BreakPoints = {
	// Small devices (landscape phones, 576px and up)
	small: 576,

	// Medium devices (tablets, 768px and up)
	medium: 768,

	// Large devices (desktops, 992px and up)
	large: 992,

	// Extra large devices (large desktops, 1200px and up)
	extraLarge: 1200,

	customLargeUp: 1250,

	customLargeDown: 1250
};

/**
 * These are used for CSS-in-JS styling.
 *
 * @see: https://emotion.sh/docs/media-queries#reusable-media-queries
 * @type {{small: string, large: string, mobile: string, medium: string, mobileL: string}}
 */
export const MediaQueries = {
	// Small
	extraSmall: `@media (max-width: ${BreakPoints.small - 1}px)`,
	smallAndDown: `@media (max-width: ${BreakPoints.medium - 1}px)`,
	small: `@media (min-width: ${
		BreakPoints.small
	}px) and (max-width: ${BreakPoints.medium - 1}px)`,
	smallAndUp: `@media (min-width: ${BreakPoints.small}px)`,

	// Medium
	mediumAndDown: `@media (max-width: ${BreakPoints.large - 1}px)`,
	medium: `@media (min-width: ${
		BreakPoints.medium
	}px) and (max-width: ${BreakPoints.large - 1}px)`,
	mediumAndUp: `@media (min-width: ${BreakPoints.medium}px)`,

	// Large
	largeAndDown: `@media (max-width: ${BreakPoints.extraLarge - 1}px)`,
	large: `@media (min-width: ${
		BreakPoints.large
	}px) and (max-width: ${BreakPoints.extraLarge - 1}px)`,
	largeAndUp: `@media (min-width: ${BreakPoints.large}px)`,

	// Extra Large
	extraLarge: `@media (min-width: ${BreakPoints.extraLarge}px)`,

	// Custom Large
	customLargeUp: `@media (min-width: ${BreakPoints.customLarge}px)`,

	customLargeDown: `@media (max-width: ${BreakPoints.customLarge}px)`
};

// HOOKS
//
////////////////////////////////////////////////////////////////////////////////

// Small Hooks
////////////////////////////////////////////////////////////////////////////////
export const useIsExtraSmall = () => {
	return useMediaQuery({
		maxWidth: BreakPoints.small - 1
	});
};

export const useIsSmallAndDown = () => {
	return useMediaQuery({
		maxWidth: BreakPoints.medium - 1
	});
};

export const useIsSmall = () => {
	return useMediaQuery({
		minWidth: BreakPoints.small,
		maxWidth: BreakPoints.medium - 1
	});
};

export const useIsSmallAndUp = () => {
	return useMediaQuery({
		minWidth: BreakPoints.small
	});
};

// Medium Hooks
////////////////////////////////////////////////////////////////////////////////
export const useIsMediumAndDown = () => {
	return useMediaQuery({
		maxWidth: BreakPoints.large - 1
	});
};

export const useIsMedium = () => {
	return useMediaQuery({
		minWidth: BreakPoints.medium,
		maxWidth: BreakPoints.large - 1
	});
};

export const useIsMediumAndUp = () => {
	const isClient = useShouldCheckMediaQuery();

	const match = useMediaQuery({
		minWidth: BreakPoints.medium
	});

	return !!(isClient && match);
};

// Large Hooks
////////////////////////////////////////////////////////////////////////////////
export const useIsLargeAndDown = () => {
	return useMediaQuery({
		maxWidth: BreakPoints.extraLarge - 1
	});
};

export const useIsLarge = () => {
	return useMediaQuery({
		minWidth: BreakPoints.large,
		maxWidth: BreakPoints.extraLarge - 1
	});
};

export const useIsLargeAndUp = () => {
	const isClient = useShouldCheckMediaQuery();

	const match = useMediaQuery({
		minWidth: BreakPoints.large
	});

	return !!(isClient && match);
};

// Extra Large
// XL has no upper bounds, and XL + Down doesn't make sense.
////////////////////////////////////////////////////////////////////////////////
export const useIsExtraLarge = () => {
	return useMediaQuery({
		minWidth: BreakPoints.extraLarge
	});
};

export const useIsCustomLargeUp = () => {
	return useMediaQuery({
		minWidth: BreakPoints.customLargeUp
	});
};

export const useIsCustomLargeDown = () => {
	return useMediaQuery({
		maxWidth: BreakPoints.customLargeDown
	});
};

// Components
// These components can be used as wrapper components to help adjust styling.
////////////////////////////////////////////////////////////////////////////////

// Small Components
////////////////////////////////////////////////////////////////////////////////
export const ShowForExtraSmall = ({ children }) => {
	return useIsExtraSmall() ? children : null;
};

export const ShowForSmallAndDown = ({ children }) => {
	return useIsSmallAndDown() ? children : null;
};

export const ShowForSmall = ({ children }) => {
	return useIsSmall() ? children : null;
};

export const ShowForSmallAndUp = ({ children }) => {
	return useIsSmallAndUp() ? children : null;
};

// Medium Components
////////////////////////////////////////////////////////////////////////////////
export const ShowForMediumAndDown = ({ children }) => {
	return useIsMediumAndDown() ? children : null;
};

export const ShowForMedium = ({ children }) => {
	return useIsMedium() ? children : null;
};

export const ShowForMediumAndUp = ({ children }) => {
	return useIsMediumAndUp() ? children : null;
};

// Large Components
////////////////////////////////////////////////////////////////////////////////
export const ShowForLargeAndDown = ({ children }) => {
	return useIsLargeAndDown() ? children : null;
};

export const ShowForLarge = ({ children }) => {
	return useIsLarge() ? children : null;
};

export const ShowForLargeAndUp = ({ children }) => {
	return useIsLargeAndUp() ? children : null;
};

// Extra Large Components
////////////////////////////////////////////////////////////////////////////////
export const ShowForExtraLarge = ({ children }) => {
	return useIsExtraLarge() ? children : null;
};

export const ShowForCustomLarge = ({ children }) => {
	return useIsCustomLargeUp() ? children : null;
};

export const ShowForCustomLargeDown = ({ children }) => {
	return useIsCustomLargeDown() ? children : null;
};
