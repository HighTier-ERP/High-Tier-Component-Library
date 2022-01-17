//PACKAGE IMPORTS
import React from 'react';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
// Configurable element with background image. Can control size and position.
/*----------------------------------------------------------------------------*/

const ElementWithBg = ({
	variant,
	children,
	classes,
	imageUrl,
	bgPosition,
	bgSize
}) => {
	return variant === 'section' ? (
		<section
			className={classes}
			style={{
				backgroundImage: `url(${imageUrl})`,
				backgroundSize: bgSize,
				backgroundPosition: bgPosition
			}}
		>
			{children}
		</section>
	) : (
		<div
			className={classes}
			style={{
				backgroundImage: `url(${imageUrl})`,
				backgroundSize: bgSize,
				backgroundPosition: bgPosition
			}}
		>
			{children}
		</div>
	);
};

export default ElementWithBg;
