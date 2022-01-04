//PACKAGE IMPORTS
import React from 'react';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//Uses Hero Icons x svg
/*----------------------------------------------------------------------------*/
const CloseIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			preserveAspectRatio="none"
			x="0px"
			y="0px"
			height="100%"
			width="100%"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	);
};

export default CloseIcon;
