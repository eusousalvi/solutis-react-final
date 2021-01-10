import React, { useState } from 'react';
import './styles.css';

function AvailabilityCalendarDay({ month, dayIndex }) {
  const [value, setValue] = useState(month.availabilityDays[dayIndex - 1]);

  return (
    <td className="d-flex flex-column text-center">
      <label>{dayIndex}</label>
      <input
        className="availabilityInput"
        id={`${month.name}${dayIndex}`}
        maxLength={3}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </td>
  );
}

export default AvailabilityCalendarDay;
