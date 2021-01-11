import React, { useState } from 'react';
import AvailabilityCalendarDay from '../AvailabilityCalendarDay';
import getTotalDaysInMonth from '../../../helpers/getTotalDaysInMonth';
import './styles.css';

function AvailabilityCalendarRow({ month, getDay, monthIndex, currentYear }) {
  const [currentTotalAvailability, setCurrentTotalAvailability] = useState(0);

  const days = [];
  for (let i = 0; i < getDay(monthIndex); i++) {
    days.push(<td key={`empty${i}`}></td>);
  }
  for (
    let i = 1;
    i <=
    (month.availabilityDays.length ||
      getTotalDaysInMonth(currentYear, monthIndex));
    i++
  ) {
    days.push(
      <AvailabilityCalendarDay
        key={`filled${i}`}
        month={month}
        dayIndex={i}
        currentTotalAvailability={currentTotalAvailability}
      />,
    );
  }

  return (
    <tr className="d-flex flex-row">
      <td className="monthName">{month.name}</td>
      <td>
        <button
          type="button"
          onClick={() =>
            setCurrentTotalAvailability((total) => (total > 0 ? 0 : 10))
          }
        >
          {'>>'}
        </button>
      </td>
      {days}
    </tr>
  );
}

export default AvailabilityCalendarRow;
