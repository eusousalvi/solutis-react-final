import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getFirstDayMonth from '../../helpers/getFirstDayMonth';
import { getRoomAvailability } from '../../services/roomsAvailability';
import './styles.css';

function HotelAvailabilityCalendar() {
  let getDay;
  const [currentYear, setCurrentYear] = useState('2021');
  const [rows, setRows] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getDay = getFirstDayMonth(currentYear);
    generateDayRows();
  }, [currentYear]);

  async function generateDayRows() {
    const months = await getRoomAvailability(id);
    const rows = months.map((month, index) => {
      const days = [];
      for (let i = 0; i < getDay(index); i++) {
        days.push(<td key={`empty${i}`}></td>);
      }
      for (let i = 1; i <= month.availabilityDays.length; i++) {
        days.push(
          <td key={`filled${i}`} className="d-flex flex-column text-center">
            <label>{i}</label>
            <input
              className="availabilityInput"
              id={`${month.name}${i}`}
              maxLength={3}
              value={month.availabilityDays[i - 1]}
            />
          </td>,
        );
      }
      return (
        <tr key={index} className="d-flex flex-row">
          <td className="monthName ">{month.name}</td>
          <td>
            <button onClick={() => getRoomAvailability(2)}>{'>>'}</button>
          </td>
          {days}
        </tr>
      );
    });

    setRows(rows);
  }

  return (
    <table className="table availabilityTable">
      <tbody>
        <tr className="d-flex flex-row">
          <td className="d-flex text-center monthName">
            <select onChange={(e) => setCurrentYear(e.target.value)}>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </td>
          <td></td>
          <td>Su</td>
          <td>Mo</td>
          <td>Tu</td>
          <td>We</td>
          <td>Th</td>
          <td>Fr</td>
          <td>Sa</td>
          <td>Su</td>
          <td>Mo</td>
          <td>Tu</td>
          <td>We</td>
          <td>Th</td>
          <td>Fr</td>
          <td>Sa</td>
          <td>Su</td>
          <td>Mo</td>
          <td>Tu</td>
          <td>We</td>
          <td>Th</td>
          <td>Fr</td>
          <td>Sa</td>
          <td>Su</td>
          <td>Mo</td>
          <td>Tu</td>
          <td>We</td>
          <td>Th</td>
          <td>Fr</td>
          <td>Sa</td>
          <td>Su</td>
          <td>Mo</td>
          <td>Tu</td>
          <td>We</td>
          <td>Th</td>
          <td>Fr</td>
          <td>Sa</td>
          <td>Su</td>
          <td>Mo</td>
        </tr>
        {rows}
      </tbody>
    </table>
  );
}

export default HotelAvailabilityCalendar;
