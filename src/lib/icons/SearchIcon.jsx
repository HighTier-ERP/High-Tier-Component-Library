//PACKAGE IMPORTS
import React from 'react';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//Uses Hero Icons search-circle svg
/*----------------------------------------------------------------------------*/
const SearchIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
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
				strokeWidth={1.5}
				d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	);
};

export default SearchIcon;
