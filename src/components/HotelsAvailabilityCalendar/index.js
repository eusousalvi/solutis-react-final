import React, { useEffect, useState } from 'react';
import getFirstDayMonth from '../../helpers/getFirstDayMonth';
import './styles.css';

const months = [
  { name: 'January', totalDays: 31 },
  { name: 'February', totalDays: 28 },
  { name: 'March', totalDays: 31 },
  { name: 'April', totalDays: 30 },
  { name: 'May', totalDays: 31 },
  { name: 'June', totalDays: 30 },
  { name: 'July', totalDays: 31 },
  { name: 'August', totalDays: 31 },
  { name: 'September', totalDays: 30 },
  { name: 'October', totalDays: 31 },
  { name: 'November', totalDays: 30 },
  { name: 'December', totalDays: 31 },
];

function HotelAvailabilityCalendar() {
  let getDay;
  const [currentYear, setCurrentYear] = useState('2021');
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getDay = getFirstDayMonth(currentYear);
    setRows(generateDayRows());
  }, [currentYear]);

  function generateDayRows() {
    const rows = months.map((month, index) => {
      const days = [];
      for (let i = 0; i < getDay(index); i++) {
        days.push(<td key={`empty${i}`}></td>);
      }
      for (let i = 1; i <= month.totalDays; i++) {
        days.push(
          <td key={`filled${i}`} className="d-flex flex-column text-center">
            <label>{i}</label>
            <input
              className="availabilityInput"
              id={`${month.name}${i}`}
              maxLengtd={3}
              value={10}
            />
          </td>,
        );
      }

      return (
        <tr key={index} className="d-flex flex-row">
          <td className="monthName ">{month.name}</td>
          <td>
            <button>{'>>'}</button>
          </td>
          {days}
        </tr>
      );
    });

    return rows;
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
