//PACKAGE IMPORTS
import React, { useState } from 'react';
import {
	format,
	subMonths,
	addMonths,
	addDays,
	startOfWeek,
	startOfMonth,
	endOfMonth,
	endOfWeek,
	isSameMonth,
	isSameDay,
	toDate
} from 'date-fns';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
// Calendar Component for Vacations, Service, and Detailing in ERP
/*----------------------------------------------------------------------------*/

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
	let dateFormat = 'MMMM yyyy';

	return (
		<div className="header flex flex-row w-full justify-between px-30px">
			<div className="justify-center w-100 items-center text-center">
				<span>{format(currentMonth, dateFormat)}</span>
			</div>
			<div className="justify-end items-center flex flex-row">
				<div
					className="w-30px pointer"
					onClick={prevMonth}
					onKeyPress={prevMonth}
					role="button"
					tabIndex="0"
				>
					<span className="material-icons text-color-primary">
						navigate_before
					</span>
				</div>
				<div
					className="w-30px pointer"
					onClick={nextMonth}
					onKeyPress={nextMonth}
					role="button"
					tabIndex="0"
				>
					<span className="material-icons text-color-primary">
						navigate_next
					</span>
				</div>
			</div>
		</div>
	);
};

const RenderDays = ({ currentMonth }) => {
	let dateFormat = 'eee';
	let days = [];

	let startDate = startOfWeek(currentMonth);

	for (let i = 0; i < 7; i++) {
		days.push(
			<div className="col col-center f-w-700" key={i}>
				{format(addDays(startDate, i), dateFormat)}
			</div>
		);
	}

	return <div className="days row f-w-700">{days}</div>;
};

const RenderCells = ({ currentMonth, selectedDate, setSelectedDate }) => {
	const monthStart = startOfMonth(currentMonth);
	const monthEnd = endOfMonth(monthStart);
	const startDate = startOfWeek(monthStart);
	const endDate = endOfWeek(monthEnd);

	const dateFormat = 'dd';
	const rows = [];

	let days = [];
	let day = startDate;
	let formattedDate = '';

	while (day <= endDate) {
		for (let i = 0; i < 7; i++) {
			formattedDate = format(day, dateFormat);
			let cloneDay = day;
			days.push(
				<div
					className={`col cell ${
						!isSameMonth(day, monthStart)
							? 'disabled'
							: isSameDay(day, selectedDate)
							? 'selected'
							: ''
					}`}
					key={day}
					onClick={() => setSelectedDate(toDate(cloneDay))}
					onKeyPress={() => setSelectedDate(toDate(cloneDay))}
					role="button"
					tabIndex="0"
				>
					<span className="number">{formattedDate}</span>
					<span className="bg">{formattedDate}</span>
				</div>
			);
			day = addDays(day, 1);
		}
		rows.push(
			<div className="row" key={day}>
				{days}
			</div>
		);
		days = [];
	}
	return <div className="body">{rows}</div>;
};

const Calendar = () => {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(new Date());
	return (
		<div className="calendar-component">
			<div className="calendar w-full flex flex-column br-24px overflow-hidden box-shadow">
				<RenderHeader
					nextMonth={() =>
						setCurrentMonth(addMonths(currentMonth, 1))
					}
					prevMonth={() =>
						setCurrentMonth(subMonths(currentMonth, 1))
					}
					currentMonth={currentMonth}
				/>
				<RenderDays currentMonth={currentMonth} />
				<RenderCells
					currentMonth={currentMonth}
					selectedDate={selectedDate}
					setSelectedDate={setSelectedDate}
				/>
				<span
					onClick={() => setSelectedDate(subMonths(currentMonth, 1))}
					onKeyPress={() =>
						setSelectedDate(subMonths(currentMonth, 1))
					}
					role="button"
					tabIndex="0"
				/>
				<span
					onClick={() => setCurrentMonth('nov')}
					onKeyPress={() => setCurrentMonth('nov')}
					role="button"
					tabIndex="0"
				/>
			</div>
		</div>
	);
};

export default Calendar;
