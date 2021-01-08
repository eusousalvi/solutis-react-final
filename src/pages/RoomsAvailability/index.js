import Header from '../../components/Header';
import HotelAvailabilityCalendar from '../../components/HotelsAvailabilityCalendar';
import HotelsHeader from '../../components/HotelsHeader';

function RoomsAvailability() {
  return (
    <>
      <HotelsHeader />
      <div className="container">
        <div className="row">
          <HotelAvailabilityCalendar />
        </div>
      </div>
    </>
  );
}

export default RoomsAvailability;
