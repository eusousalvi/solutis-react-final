import React from 'react';
import './styles.css';

function AvailabilityCalendarRow({ month, children }) {
  return (
    <tr className="d-flex flex-row">
      <td className="monthName ">{month.name}</td>
      <td>
        <button>{'>>'}</button>
      </td>
      {children}
    </tr>
  );
}

export default AvailabilityCalendarRow;
