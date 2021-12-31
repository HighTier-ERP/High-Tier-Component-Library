import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const SingleAccordion = ({
	children,
	accordionTitleText,
	accordionTitleClass,
	isExpanded,
	accordionIcon,
	accordionWidth,
	accordionActionPosition
}) => {
	const [expanded, setExpanded] = useState(isExpanded);
	return (
		<article
			tabIndex="0"
			className={classNames(
				'accordion-item b-b-default',
				expanded ? 'active-accordion' : '',
				accordionWidth
			)}
			onClick={() => setExpanded(!expanded)}
		>
			<span
				className={classNames(
					'flex flex-row items-center pointer',
					accordionActionPosition === 'left'
						? 'flex-direction-row-reverse justify-end'
						: ''
				)}
			>
				<span className="material-icons f-s-3rem">{accordionIcon}</span>
				<p
					className={classNames(
						accordionActionPosition === 'left'
							? 'pl-1rem'
							: 'pr-1rem',
						accordionTitleClass
					)}
				>
					{accordionTitleText}
				</p>
				<button className="br-full block accordion-btn box-shadow pointer">
					<span className="material-icons text-color-primary">
						{!expanded ? 'add' : 'remove'}
					</span>
				</button>
			</span>
			{expanded && children}
		</article>
	);
};

const GroupAccordion = ({
	children,
	accordionTitleText,
	accordionTitleClass,
	accordionIcon,
	accordId,
	activeId,
	setActiveId,
	accordionWidth,
	accordionActionPosition
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
				accordionWidth
			)}
			onClick={handleExpand}
		>
			<span
				className={classNames(
					'flex flex-row items-center pointer',
					accordionActionPosition === 'left'
						? 'flex-direction-row-reverse justify-end'
						: ''
				)}
			>
				<span className="material-icons f-s-3rem">{accordionIcon}</span>
				<p
					className={classNames(
						accordionActionPosition === 'left'
							? 'pl-1rem'
							: 'pr-1rem',
						accordionTitleClass
					)}
				>
					{accordionTitleText}
				</p>
				<button className="br-full block accordion-btn box-shadow pointer">
					<span className="material-icons text-color-primary">
						{!expanded ? 'add' : 'remove'}
					</span>
				</button>
			</span>
			{expanded && children}
		</article>
	);
};

const Accordion = ({
	children,
	accordionTitleText,
	accordionTitleClass,
	isExpanded,
	accordionIcon,
	accordionType,
	accordId,
	activeId,
	setActiveId,
	accordionWidth,
	accordionActionPosition
}) => {
	return accordionType === 'single' ? (
		<SingleAccordion
			children={children}
			accordionTitleText={accordionTitleText}
			accordionTitleClass={accordionTitleClass}
			isExpanded={isExpanded}
			accordionIcon={accordionIcon}
			accordionWidth={accordionWidth}
			accordionActionPosition={accordionActionPosition}
		/>
	) : (
		<GroupAccordion
			children={children}
			accordionTitleText={accordionTitleText}
			accordionTitleClass={accordionTitleClass}
			accordionIcon={accordionIcon}
			accordId={accordId}
			activeId={activeId}
			setActiveId={setActiveId}
			accordionWidth={accordionWidth}
			accordionActionPosition={accordionActionPosition}
		/>
	);
};

export default Accordion;
