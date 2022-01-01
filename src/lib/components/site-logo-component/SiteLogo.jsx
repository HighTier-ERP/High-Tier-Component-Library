//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
// Default site configurable logo. Has a guard clause to check if an svg 
// is passed or if an img tag required. 
/*----------------------------------------------------------------------------*/

const SiteLogo = ({children, isSVG, classes, logoImgRef}) => {
	return isSVG ? (
		children
	) : (<img src={logoImgRef} className={classes} />);
};

export default SiteLogo;