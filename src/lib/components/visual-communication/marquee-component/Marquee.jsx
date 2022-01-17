//PACKAGE IMPORTS
import { default as FastMarquee } from 'react-fast-marquee';
import React, { Children } from 'react';
import classNames from 'classnames';

const Marquee = ({ children }) => {
	return (
		<FastMarquee gradient={false}>
			{Children.map(children, child => ({
				...child,
				props: {
					...child.props,
					className: classNames(child.props.className)
				}
			}))}
		</FastMarquee>
	);
};

export default Marquee;
