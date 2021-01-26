import React, { useContext, useState } from 'react';
import AvailabilityCalendarDay from '../AvailabilityCalendarDay';
import getTotalDaysInMonth from '../../../helpers/getTotalDaysInMonth';
import './styles.css';
import { AvailabilityContext } from '../AvailabilityContext';
import getFirstDayMonth from '../../../helpers/getFirstDayMonth';

function AvailabilityCalendarRow({ month, monthIndex }) {
  const { currentYear, availabilityConstants } = useContext(AvailabilityContext);
  const [currentTotalAvailability, setCurrentTotalAvailability] = useState(
    availabilityConstants.minAvailability,
  );
  let getDay = getFirstDayMonth(currentYear);

  const days = [];
  for (let i = 0; i < getDay(monthIndex); i++) {
    days.push(<td key={`empty${i}`}></td>);
  }
  for (
    let i = 1;
    i <= (month.availabilityDays.length || getTotalDaysInMonth(currentYear, monthIndex));
    i++
  ) {
    days.push(
      <AvailabilityCalendarDay
        key={`filled${i}`}
        month={month}
        monthIndex={monthIndex}
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
            setCurrentTotalAvailability((total) =>
              total > availabilityConstants.minAvailability
                ? availabilityConstants.minAvailability
                : availabilityConstants.maxAvailability,
            )
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
