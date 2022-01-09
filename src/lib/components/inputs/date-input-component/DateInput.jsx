//PACKAGE IMPORTS
import React from 'react';
import DatePicker from 'react-datepicker';
import getDay from 'date-fns/getDay';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//Global date picker input. Allows for configurable label
/*----------------------------------------------------------------------------*/
const DateInput = ({
	label,
	labelFor,
	placeholderText,
	selectedDate,
	setSelectedDate
}) => {
	
	const handleColor = time => {
		return time.getHours() > 12 ? 'text-success' : 'text-error';
	};

	const isWeekday = date => {
		const day = getDay(date);
		return day !== 0;
	};

	return (
			<div className="pointer">
				<label for={labelFor}>
					<strong>{label}</strong>
				</label>
				<br />
				<span className="input-container elevate justify-start items-center flex w-100">
					<DatePicker
						className="input-control w-100 pointer min-h-45px"
						showTimeSelect
						selected={selectedDate}
						filterDate={isWeekday}
						onChange={date => setSelectedDate(date)}
						excludeTimes={[
							setHours(setMinutes(new Date(), 0), 17),
							setHours(setMinutes(new Date(), 30), 18),
							setHours(setMinutes(new Date(), 30), 19),
							setHours(setMinutes(new Date(), 30), 17)
						]}
						timeClassName={handleColor}
						placeholderText={placeholderText}
						dateFormat="MMMM d, yyyy h:mm aa"
					/>
				</span>
			</div>
	);
};
export default DateInput;