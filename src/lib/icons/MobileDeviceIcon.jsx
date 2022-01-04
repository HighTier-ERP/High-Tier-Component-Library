//PACKAGE IMPORTS
import React from 'react';
import PropTypes from 'prop-types';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//Uses Hero Icons Moblie Device Icon svg
/*----------------------------------------------------------------------------*/
const MobileDeviceIcon = ({ strokeWidth }) => {
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
				strokeWidth={strokeWidth ? strokeWidth : 1}
				d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
			/>
		</svg>
	);
};

MobileDeviceIcon.propTypes = {
	strokeWidth: PropTypes.number
};

export default MobileDeviceIcon;
