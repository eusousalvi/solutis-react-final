import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import AvailabilityCalendarRows from './AvailabilityCalendarRows';
import getDaysInMonth from '../../helpers/getDaysInMonth';
import { editRoomAvailability } from '../../services/roomsAvailability';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import './styles.css';
import { AvailabilityContext } from './AvailabilityContext';
import getMonths from '../../helpers/getMonths';

const months = getMonths();

function HotelAvailabilityCalendar() {
  const { setCurrentYear } = useContext(AvailabilityContext);
  const [submit, setSubmit] = useState(false);
  const { roomId } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      availability: months.map((month) => {
        return { name: month.name, availabilityDays: getDaysInMonth(month.name) };
      }),
    };
    editRoomAvailability(roomId, data);
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 4000);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="availabilityForm">
        <header>
          <h1 className="availabilityCalendar__title"> ROOM AVAILABILITY</h1>
          <p className="availabilityCalendar__subtitle">
            Define a maximum number of rooms available for booking for a specified day or date range
            (maximum availability 10 rooms)
            <br /> To edit room availability simply change the value in a day cell and then click
            'Submit' button
          </p>
        </header>
        <table className="table availabilityTable table-borderless">
          <tbody>
            <tr className="d-flex flex-row">
              <td className="d-flex text-center monthName availabilityCalendar__empty">
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
            <AvailabilityCalendarRows />
            <tr className="availabilityCalendar__legend">
              <td>
                <div className="legend">
                  <div className="legend--available"></div>
                  <div> - Available</div>
                </div>
              </td>
            </tr>
            <tr className="availabilityCalendar__legend">
              <td>
                <div className="legend">
                  <div className="legend--partial"></div> - Partially Available
                </div>
              </td>
            </tr>
            <tr className="availabilityCalendar__legend">
              <td>
                <div className="legend">
                  <div className="legend--not"></div> - Not Available
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <footer className="availabilityCalendar__footer">
          <button type="submit" className="btn availabilityCalendar__submit">
            SUBMIT
          </button>
        </footer>
      </form>
      <div className={`availabilityMsg ${submit ? 'activeAvailabilityMsg' : ''}`}>
        <BsFillInfoCircleFill color="#fff" />
        <h5>CHANGED SAVED!</h5>
      </div>
    </>
  );
}

export default HotelAvailabilityCalendar;
