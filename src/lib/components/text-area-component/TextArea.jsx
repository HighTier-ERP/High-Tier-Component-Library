//PACKAGE IMPORTS
import React from 'react';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
// Reusable textarea component to speed up form development.
/*----------------------------------------------------------------------------*/

const TextArea = ({
	classes,
	groupClasses,
	name,
	onChange,
	rows,
	type,
	value
}) => {
	return (
		<div className={`form__group field ${groupClasses}`}>
			<textarea
				type={type}
				name={name}
				defaultValue={value}
				className={`form__field ${classes}`}
				onChange={onChange}
				rows={rows}
			/>
			<label htmlFor={name} className="form__label text-capitalize">
				{name}
			</label>
		</div>
	);
};

export default TextArea;
