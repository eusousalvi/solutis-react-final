import React, { useContext, useEffect, useState } from 'react';
import { getRoomAvailability } from '../../../services/roomsAvailability';
import AvailabilityCalendarRow from '../AvailabilityCalendarRow';
import { useParams } from 'react-router-dom';
import { AvailabilityContext } from '../AvailabilityContext';

function AvailabilityCalendarRows() {
  const [rows, setRows] = useState([]);
  const { roomId } = useParams();
  const { currentYear } = useContext(AvailabilityContext);

  useEffect(() => {
    async function generateDayRows() {
      const months = await getRoomAvailability(roomId);
      const rows = months.map((month, index) => {
        return <AvailabilityCalendarRow key={index} month={month} monthIndex={index} />;
      });
      setRows(rows);
    }
    generateDayRows();
  }, [currentYear, roomId]);

  return rows;
}

export default AvailabilityCalendarRows;
