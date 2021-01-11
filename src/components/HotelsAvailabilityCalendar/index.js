import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AvailabilityCalendarRows from './AvailabilityCalendarRows';
import getDaysInMonth from '../../helpers/getDaysInMonth';
import { editRoomAvailability } from '../../services/roomsAvailability';
import './styles.css';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function HotelAvailabilityCalendar() {
  const [currentYear, setCurrentYear] = useState('2021');
  // const [availability, setAvailability] = useState([]);

  const { id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      availability: months.map((month) => {
        return { name: month, availabilityDays: getDaysInMonth(month) };
      }),
    };
    editRoomAvailability(id, data);
  }

  return (
    <form onSubmit={handleSubmit}>
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
          <AvailabilityCalendarRows currentYear={currentYear} roomId={id} />
        </tbody>
      </table>
      <button type="submit" className="btn btn-primary">
        SUBMIT
      </button>
    </form>
  );
}

export default HotelAvailabilityCalendar;
