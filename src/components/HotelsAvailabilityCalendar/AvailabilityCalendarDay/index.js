import React, { useEffect, useState } from 'react';
import './styles.css';

function AvailabilityCalendarDay({
  month,
  dayIndex,
  currentTotalAvailability,
}) {
  const [value, setValue] = useState(
    month.availabilityDays[dayIndex - 1] || 10,
  );

  useEffect(() => {
    return () => setValue(currentTotalAvailability);
  }, [currentTotalAvailability]);

  return (
    <td className="d-flex flex-column text-center">
      <label>{dayIndex}</label>
      <input
        className="availabilityInput"
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
