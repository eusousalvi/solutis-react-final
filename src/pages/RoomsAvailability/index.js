import HotelAvailabilityCalendar from '../../components/HotelsAvailabilityCalendar';
import HotelsHeader from '../../components/HotelsHeader';
import { AvailabilityCurrentYear } from '../../components/HotelsAvailabilityCalendar/AvailabilityContext';
import './styles.css';

function RoomsAvailability() {
  return (
    <>
      <HotelsHeader />
      <div className="availabilityContainer">
        <div className="availabilityContainer__calendar">
          <AvailabilityCurrentYear>
            <HotelAvailabilityCalendar />
          </AvailabilityCurrentYear>
        </div>
      </div>
    </>
  );
}

export default RoomsAvailability;
