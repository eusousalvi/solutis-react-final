import React, { useContext, useEffect, useState } from 'react';
import getWeekend from '../../../helpers/getWeekend';
import { AvailabilityContext } from '../AvailabilityContext';
import './styles.css';

function AvailabilityCalendarDay({ month, dayIndex, currentTotalAvailability, monthIndex }) {
  const { currentYear, availabilityConstants } = useContext(AvailabilityContext);
  const [value, setValue] = useState(
    month.availabilityDays[dayIndex - 1] || availabilityConstants.maxAvailability,
  );

  useEffect(() => {
    return () => setValue(currentTotalAvailability);
  }, [currentTotalAvailability]);

  return (
    <td
      className={`d-flex flex-column text-center availabilityDay ${
        getWeekend(currentYear, monthIndex, dayIndex) ? 'weekendDay' : ''
      }`}
    >
      <label>{dayIndex}</label>
      <input
        className={`availabilityInput ${
          Number(value) <= availabilityConstants.minAvailability
            ? 'input__not'
            : Number(value) === availabilityConstants.maxAvailability
            ? 'input__available'
            : 'input__partial'
        }`}
        id={`${month.name}${dayIndex}`}
        maxLength={2}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name={month.name}
        type="number"
        required
      />
    </td>
  );
}

export default AvailabilityCalendarDay;
