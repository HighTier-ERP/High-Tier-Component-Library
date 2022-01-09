//PACKAGE IMPORTS
import React from 'react';
import classNames from 'classnames';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//Global counter picker input. Allows for configurable label
/*----------------------------------------------------------------------------*/

const Select = ({
	classes,
	labelFor,
	label,
	placeholderText,
	handleChange,
	defaultValue,
	options
}) => {
	return (
		<div className={classNames(classes, 'my-2')}>
			<label htmlFor={labelFor} className="text-left w-100 f-s-14px">
				{label}
			</label>
			<select
				name={labelFor}
				onChange={handleChange}
				onBlur={handleChange}
				className="form-control box-shadow border br-24px"
			>
				<option selected>
					{defaultValue ? defaultValue : placeholderText}
				</option>
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
