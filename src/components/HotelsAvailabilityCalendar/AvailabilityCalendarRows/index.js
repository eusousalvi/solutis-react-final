import React, { useEffect, useState } from 'react';
import { getRoomAvailability } from '../../../services/roomsAvailability';
import getFirstDayMonth from '../../../helpers/getFirstDayMonth';
import AvailabilityCalendarDay from '../AvailabilityCalendarDay';
import AvailabilityCalendarRow from '../AvailabilityCalendarRow';

function AvailabilityCalendarRows({ currentYear, roomId }) {
  let getDay;
  const [rows, setRows] = useState([]);

  async function generateDayRows() {
    const months = await getRoomAvailability(roomId);
    const rows = months.map((month, index) => {
      const days = [];
      for (let i = 0; i < getDay(index); i++) {
        days.push(<td key={`empty${i}`}></td>);
      }
      for (let i = 1; i <= month.availabilityDays.length; i++) {
        days.push(
          <AvailabilityCalendarDay
            key={`filled${i}`}
            month={month}
            dayIndex={i}
          />,
        );
      }
      return (
        <AvailabilityCalendarRow key={index} month={month}>
          {days}
        </AvailabilityCalendarRow>
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
