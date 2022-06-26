//PACKAGE IMPORTS
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
// Component that allows for single dropdown handling and group list Information
// like accordion lists. Highly customizable with props for text and position.
// Uses atomic css, utility, and css props for theme handling.
/*----------------------------------------------------------------------------*/

const SingleAccordion = ({
	children,
	titleText,
	titleClass,
	isExpanded,
	icon,
	width,
	actionPosition
}) => {
	const [expanded, setExpanded] = useState(isExpanded);
	return (
		<article
			tabIndex="0"
			className={classNames(
				'accordion-item b-b-default',
				expanded ? 'active-accordion' : '',
				width
			)}
			role="button"
			onClick={() => setExpanded(!expanded)}
		>
			<span
				className={classNames(
					'flex flex-row items-center pointer',
					actionPosition === 'left'
						? 'flex-direction-row-reverse justify-end'
						: ''
				)}
			>
				<span className="material-icons f-s-3rem">{icon}</span>
				<p
					className={classNames(
						actionPosition === 'left'
							? 'pl-1rem'
							: 'pr-1rem',
						titleClass
					)}
				>
					{titleText}
				</p>
				<button
					className="br-full block accordion-btn box-shadow pointer"
					aria-expanded={expanded}
				>
					<span className="material-icons text-color-primary">
						{!expanded ? 'add' : 'remove'}
					</span>
				</button>
			</span>
			{children}
		</article>
	);
};

const GroupAccordion = ({
	children,
	titleText,
	titleClass,
	icon,
	accordId,
	activeId,
	setActiveId,
	width,
	actionPosition
}) => {
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		setExpanded(activeId === accordId);
	}, [setExpanded, activeId, accordId]);

	function handleExpand() {
		setExpanded(!expanded);
		setActiveId(accordId);
	}

	return (
		<article
			tabIndex="0"
			className={classNames(
				'accordion-group-item b-b-default',
				expanded ? 'active-accordion' : '',
				width
			)}
			onClick={handleExpand}
			aria-expanded={expanded}
		>
			<span
				className={classNames(
					'flex flex-row items-center pointer',
					actionPosition === 'left'
						? 'flex-direction-row-reverse justify-end'
						: ''
				)}
			>
				<span className="material-icons f-s-3rem">{icon}</span>
				<p
					className={classNames(
						actionPosition === 'left'
							? 'pl-1rem'
							: 'pr-1rem',
						titleClass
					)}
				>
					{titleText}
				</p>
				<button
					className="br-full block accordion-btn box-shadow pointer"
					aria-expanded={expanded}
				>
					<span className="material-icons text-color-primary">
						{!expanded ? 'add' : 'remove'}
					</span>
				</button>
			</span>
				<span
				className={classNames(
					expanded
						? 'fadeIn'
						: 'fadeOut',
				)}
				>
							{children}
				</span>
		</article>
	);
};

const Accordion = ({
	children,
	titleText,
	titleClass,
	isExpanded,
	icon,
	type,
	accordId,
	activeId,
	setActiveId,
	width,
	actionPosition
}) => {
	return type === 'single' ? (
		<SingleAccordion
			children={children}
			titleText={titleText}
			titleClass={titleClass}
			isExpanded={isExpanded}
			icon={icon}
			width={width}
			actionPosition={actionPosition}
		/>
	) : (
		<GroupAccordion
			children={children}
			titleText={titleText}
			titleClass={titleClass}
			icon={icon}
			accordId={accordId}
			activeId={activeId}
			setActiveId={setActiveId}
			width={width}
			actionPosition={actionPosition}
		/>
	);
};

export default Accordion;
