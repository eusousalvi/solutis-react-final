import React, { useEffect, useState } from 'react';
import { getRoomAvailability } from '../../../services/roomsAvailability';
import getFirstDayMonth from '../../../helpers/getFirstDayMonth';
import AvailabilityCalendarRow from '../AvailabilityCalendarRow';

function AvailabilityCalendarRows({ currentYear, roomId }) {
  let getDay;
  const [rows, setRows] = useState([]);

  async function generateDayRows() {
    const months = await getRoomAvailability(roomId);
    const rows = months.map((month, index) => {
      return (
        <AvailabilityCalendarRow
          key={index}
          month={month}
          getDay={getDay}
          monthIndex={index}
          currentYear={currentYear}
        />
      );
    });
    setRows(rows);
  }

  useEffect(() => {
    getDay = getFirstDayMonth(currentYear);
    generateDayRows();
  }, [currentYear]);

  return rows;
}

export default AvailabilityCalendarRows;
