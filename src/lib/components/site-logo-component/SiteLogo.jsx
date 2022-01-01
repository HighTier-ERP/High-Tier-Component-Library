//PACKAGE IMPORTS
import React from 'react';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
// Default site configurable logo. Has a guard clause to check if an svg 
// is passed or if an img tag required. 
/*----------------------------------------------------------------------------*/

const SiteLogo = ({children, isSVG, classes, logoImgRef, imgAltText}) => {
	return isSVG ? (
		children
	) : (<img src={logoImgRef} className={classes} alt={imgAltText} />);
};

export default SiteLogo;