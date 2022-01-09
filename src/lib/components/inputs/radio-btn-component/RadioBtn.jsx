//PACKAGE IMPORTS
import React from 'react';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//Custom Radio Btn
/*----------------------------------------------------------------------------*/

const RadioBtn = ({ selected, onChange, text, value }) => {
	return (
		<div
			className="modern-radio-container justify-start flex-row items-center w-100 my-2rem text-body outline-none"
			onClick={onChange}
			onKeyPress={onChange}
			role="button"
			tabIndex="0"
		>
			<div
				className={`radio-outer-circle ${
					value !== selected && 'unselected'
				}`}
			>
				<div
					className={`radio-inner-circle ${
						value !== selected && 'unselected-circle'
					}`}
				/>
			</div>
			<div className="f-w-500">{text}</div>
		</div>
	);
};

export default RadioBtn;
