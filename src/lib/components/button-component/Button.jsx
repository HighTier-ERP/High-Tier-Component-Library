//PACKAGE IMPORTS
import React from 'react';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//Site configurable button for UI using react router dom
/*----------------------------------------------------------------------------*/

const Button = ({ classes, label, navTo, hasLink, type, disabled, margin, children }) => {
	return hasLink ? (
		<div className={`text-decoration-none hasLink ${margin}`}>
			{children}
		</div>
	) : (
		<button type={type} className={classes} disabled={disabled}>
			{' '}
			{label}
		</button>
	);
};

export default Button;