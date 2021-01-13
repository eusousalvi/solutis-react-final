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
    <form onSubmit={handleSubmit} className="container pt-3 pb-3">
      <div>
        <h1 className="mt-5 fs-2"> ROOM AVAILABILITY</h1>
        <p className="fs-7">
          Define a maximum number of rooms available for booking for a specified
          day or date range (maximum availability 10 rooms) To edit room
          availability simply change the value in a day cell and then click
          'Submit' button
        </p>
      </div>
      <table className="table availabilityTable table-hover table-borderless">
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
            <td className="availabilityCalendar__empty"></td>
            <td className="availabilityCalendar__weekend">Su</td>
            <td>Mo</td>
            <td>Tu</td>
            <td>We</td>
            <td>Th</td>
            <td>Fr</td>
            <td className="availabilityCalendar__weekend">Sa</td>
            <td className="availabilityCalendar__weekend">Su</td>
            <td>Mo</td>
            <td>Tu</td>
            <td>We</td>
            <td>Th</td>
            <td>Fr</td>
            <td className="availabilityCalendar__weekend">Sa</td>
            <td className="availabilityCalendar__weekend">Su</td>
            <td>Mo</td>
            <td>Tu</td>
            <td>We</td>
            <td>Th</td>
            <td>Fr</td>
            <td className="availabilityCalendar__weekend">Sa</td>
            <td className="availabilityCalendar__weekend">Su</td>
            <td>Mo</td>
            <td>Tu</td>
            <td>We</td>
            <td>Th</td>
            <td>Fr</td>
            <td className="availabilityCalendar__weekend">Sa</td>
            <td className="availabilityCalendar__weekend">Su</td>
            <td>Mo</td>
            <td>Tu</td>
            <td>We</td>
            <td>Th</td>
            <td>Fr</td>
            <td className="availabilityCalendar__weekend">Sa</td>
            <td className="availabilityCalendar__weekend">Su</td>
            <td>Mo</td>
          </tr>
          <AvailabilityCalendarRows currentYear={currentYear} roomId={id} />
          <tr>
            <td>
              <div className="legend">
                <div className="legend__available"></div>
                <div> - Available</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="legend">
                <div className="legend__partial"></div> - Partially Available
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="legend">
                <div className="legend__not"></div> - Not Available
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit" className="btn btn-primary">
        SUBMIT
      </button>
    </form>
  );
}

export default HotelAvailabilityCalendar;
