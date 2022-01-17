//PACKAGE IMPORTS
import React from 'react';
import { motion } from 'framer-motion';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
// Default Application Loading Component. todo: Need to move styles to global 
// style sheet for css variable classes. 
/*----------------------------------------------------------------------------*/

const loadingContainer = {
	width: '4rem',
	height: '1rem',
	display: 'flex',
	margin: '0px auto',
	justifyContent: 'space-between',
	paddingTop: '30px'
};

const loadingCircle = {
	display: 'block',
	width: '11px',
	height: '11px',
	backgroundColor: '#ABB1B6',
	borderRadius: '50%'
};

const loadingContainerVariants = {
	start: {
		transition: {
			staggerChildren: 0.2
		}
	},
	end: {
		transition: {
			staggerChildren: 0.2
		}
	}
};

const loadingCircleVariants = {
	start: {
		y: '50%'
	},
	end: {
		y: '150%'
	}
};

const loadingCircleTransition = {
	duration: 0.5,
	yoyo: Infinity,
	ease: 'easeInOut'
};

export default function Loading() {
	return (
		<motion.div
			style={loadingContainer}
			variants={loadingContainerVariants}
			initial="start"
			animate="end"
		>
			<motion.span
				style={loadingCircle}
				variants={loadingCircleVariants}
				transition={loadingCircleTransition}
			/>
			<motion.span
				style={loadingCircle}
				variants={loadingCircleVariants}
				transition={loadingCircleTransition}
			/>
			<motion.span
				style={loadingCircle}
				variants={loadingCircleVariants}
				transition={loadingCircleTransition}
			/>
		</motion.div>
	);
}
