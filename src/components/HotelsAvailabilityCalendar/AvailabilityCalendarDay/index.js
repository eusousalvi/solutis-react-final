import React, { useEffect, useState } from 'react';
import getWeekend from '../../../helpers/getWeekend';
import './styles.css';

function AvailabilityCalendarDay({
  month,
  dayIndex,
  currentTotalAvailability,
  currentYear,
  monthIndex,
}) {
  const [value, setValue] = useState(
    month.availabilityDays[dayIndex - 1] || 10,
  );

  useEffect(() => {
    return () => setValue(currentTotalAvailability);
  }, [currentTotalAvailability]);

  console.log(value);

  return (
    <td
      className={`d-flex flex-column text-center ${
        getWeekend(currentYear, monthIndex, dayIndex) ? 'weekendDay' : ''
      }`}
    >
      <label>{dayIndex}</label>
      <input
        className={`availabilityInput ${
          Number(value) <= 0
            ? 'input__not'
            : Number(value) === 10
            ? 'input__available'
            : 'input__partial'
        }`}
        id={`${month.name}${dayIndex}`}
        maxLength={3}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name={month.name}
      />
    </td>
  );
}

export default AvailabilityCalendarDay;
