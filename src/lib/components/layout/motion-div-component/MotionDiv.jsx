//PACKAGE IMPORTS
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
// Wrapper for animated components. No need to import motion or AnimatePresence.
/*----------------------------------------------------------------------------*/

const MotionDiv = ({
	children,
	componentRef,
	custom,
	animation,
	variant,
	classes,
	initialValue
}) => {
	return (
		<AnimatePresence>
			<motion.div
				ref={componentRef}
				custom={custom}
				animate={animation}
				initial={initialValue}
				variants={variant}
				className={classes}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default MotionDiv;
