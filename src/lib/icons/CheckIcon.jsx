//PACKAGE IMPORTS
import React from 'react';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//Uses Hero Icons check-icon svg
/*----------------------------------------------------------------------------*/
const CheckIcon = props => {
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
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M5 13l4 4L19 7"
			/>
		</svg>
	);
};

export default CheckIcon;
