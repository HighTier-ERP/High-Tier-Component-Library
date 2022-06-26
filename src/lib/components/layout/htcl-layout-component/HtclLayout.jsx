//PACKAGE IMPORTS
import React from 'react';
import classNames from 'classnames';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
// High Tier Reseach and Develop Component Lib Layout / Template Handler
/*----------------------------------------------------------------------------*/

const HtclLayoutSection = ({
	layoutZone,
	children
}) => {
    return(
        <div className={classNames(
            layoutZone === 'a'
                ? 'htcl-layout-section-a'
                : null,
            layoutZone === 'b'
                ? 'htcl-layout-section-b'
                : null,
            layoutZone === 'c'
                ? 'htcl-layout-section-c'
                : null,
        )}>
            {children}
        </div>
    );
}

const HtclLayout = ({
	layoutVariant,
	childrenA,
    childrenB,
    childrenC,
    children
}) => {
    return(
        <div className={classNames(
            layoutVariant === 'a'
                ? 'htcl-layout-grid-one-column'
                : null,
            layoutVariant === 'b'
                ? 'htcl-layout-grid-two-column'
                : null,
            layoutVariant === 'c'
                ? 'htcl-layout-grid-one-plus-two-column'
                : null,
            layoutVariant === ''
                ? 'flex flex-row'
                : null,
        )}>
            <HtclLayoutSection layoutZone="a">
                {childrenA}
            </HtclLayoutSection>
            <HtclLayoutSection layoutZone="b">
                {childrenB}
            </HtclLayoutSection>
            <HtclLayoutSection layoutZone="c">
                {childrenC}
            </HtclLayoutSection>
            {children}
        </div>
    );
}

export default HtclLayout;