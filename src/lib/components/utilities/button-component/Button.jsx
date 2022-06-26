//PACKAGE IMPORTS
import React from 'react';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//Site configurable button for UI using react router dom
/*----------------------------------------------------------------------------*/

const Button = ({ classes, label, hasLink, type, disabled, margin, children, groupName }) => {
	return hasLink ? (
		<div className={`text-decoration-none hasLink ${margin}`}>
			{children}
		</div>
	) : (
		<button type={type} className={classes} disabled={disabled} name={groupName}>
			{' '}
			{label}
		</button>
	);
};

export default Button;