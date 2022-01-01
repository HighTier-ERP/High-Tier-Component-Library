//Hooks
/*----------------------------------------------------------------------------*/
// React hooks that can be used for guard cases.
/*----------------------------------------------------------------------------*/

export const useIsNotProduction = () => {
	return process.env.REACT_APP_ENV !== 'PROD';
};

export const useIsProduction = () => {
	return process.env.REACT_APP_ENV === 'PROD';
};

export const useIsStaging = () => {
	return process.env.REACT_APP_ENV === 'DEV';
};

export const useIsLocal = () => {
	return process.env.REACT_APP_ENV === 'LOCAL';
};

//COMPONENTS
/*----------------------------------------------------------------------------*/
// These components can be used as wrapper components to help adjust styling.
/*----------------------------------------------------------------------------*/

export const NotInProduction = (props) => {
	if (useIsProduction()) {
		return null;
	}

	return props.children;
};

export const OnlyInProduction = (props) => {
	if (!useIsProduction()) {
		return null;
	}

	return props.children;
};

export const OnlyInStaging = (props) => {
	if (!useIsStaging()) {
		return null;
	}

	return props.children;
};

export const OnlyInLocal = (props) => {
	if (!useIsLocal()) {
		return null;
	}

	return props.children;
};
