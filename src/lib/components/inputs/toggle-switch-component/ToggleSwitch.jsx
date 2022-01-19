//PACKAGE IMPORTS
import React from 'react';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//Global componet that styles checkboxes as switch i.e "toggle" btn
/*----------------------------------------------------------------------------*/

const ToggleSwitch = ({ isOn, handleToggle, onColor, choice }) => {
	return (
		<div className="flex pointer">
			<input
				checked={isOn}
				onChange={handleToggle}
				className="switch-checkbox"
				id={choice}
				type="checkbox"
				value={choice}
				name={choice}
			/>
			<label
				style={{ background: isOn && onColor }}
				className="switch-label pointer m-t-n-25px"
				htmlFor={choice}
			>
				<span className={`switch-button`} />
			</label>
		</div>
	);
};

export default ToggleSwitch;
