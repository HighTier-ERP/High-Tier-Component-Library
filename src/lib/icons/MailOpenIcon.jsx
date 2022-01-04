//PACKAGE IMPORTS
import React from 'react';
import PropTypes from 'prop-types';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//Uses Hero Icons Mail Open Svg
/*----------------------------------------------------------------------------*/
const MailOpenIcon = ({ style }) => {
	return style === 'line' ? (
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
				strokeWidth={1}
				d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
			/>
		</svg>
	) : (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			x="0px"
			y="0px"
			height="100%"
			width="100%"
		>
			<path
				fillRule="evenodd"
				d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

MailOpenIcon.propTypes = {
	style: PropTypes.string
};

export default MailOpenIcon;
