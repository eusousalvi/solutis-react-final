import React, { useEffect, useState } from 'react';
import getFirstDayMonth from '../../helpers/getFirstDayMonth';

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
      for (let i = 1; i <= getDay(index); i++) {
        days.push(<td key={`empty${i}`}></td>);
      }
      for (let i = 1; i <= month.totalDays; i++) {
        days.push(
          <>
            <td key={`filled${i}`}>
              <label>{i}</label>
              <br />
              <input maxLength={3} value={10} style={{ width: '23px' }} />
            </td>
          </>,
        );
      }

      return (
        <tr key={index}>
          <td>{month.name}</td>
          {days}
        </tr>
      );
    });

    return rows;
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <select onChange={(e) => setCurrentYear(e.target.value)}>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </th>
            <th scope="col">Su</th>
            <th scope="col">Mo</th>
            <th scope="col">Tu</th>
            <th scope="col">We</th>
            <th scope="col">Th</th>
            <th scope="col">Fr</th>
            <th scope="col">Sa</th>
            <th scope="col">Su</th>
            <th scope="col">Mo</th>
            <th scope="col">Tu</th>
            <th scope="col">We</th>
            <th scope="col">Th</th>
            <th scope="col">Fr</th>
            <th scope="col">Sa</th>
            <th scope="col">Su</th>
            <th scope="col">Mo</th>
            <th scope="col">Tu</th>
            <th scope="col">We</th>
            <th scope="col">Th</th>
            <th scope="col">Fr</th>
            <th scope="col">Sa</th>
            <th scope="col">Su</th>
            <th scope="col">Mo</th>
            <th scope="col">Tu</th>
            <th scope="col">We</th>
            <th scope="col">Th</th>
            <th scope="col">Fr</th>
            <th scope="col">Sa</th>
            <th scope="col">Su</th>
            <th scope="col">Mo</th>
            <th scope="col">Tu</th>
            <th scope="col">We</th>
            <th scope="col">Th</th>
            <th scope="col">Fr</th>
            <th scope="col">Sa</th>
            <th scope="col">Su</th>
            <th scope="col">Mo</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default HotelAvailabilityCalendar;
