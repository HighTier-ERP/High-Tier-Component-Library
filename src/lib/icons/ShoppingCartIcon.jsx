//PACKAGE IMPORTS
import React from 'react';
import PropTypes from 'prop-types';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//Uses Hero Icons Shopping Cart Icon Svg
/*----------------------------------------------------------------------------*/
const ShoppingCartIcon = ({ strokeWidth }) => {
	return (
		<svg
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			x="0px"
			y="0px"
			height="100%"
			width="100%"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth ? strokeWidth : 1}
				d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
			/>
		</svg>
	);
};

ShoppingCartIcon.propTypes = {
	strokeWidth: PropTypes.number
};

export default ShoppingCartIcon;
