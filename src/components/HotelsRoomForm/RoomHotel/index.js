import { hotelsList } from "../../../utils/RoomArrays/hotelsList";
function RoomHotel({ handleForm, ...data }) {
  console.log(handleForm);
  return (
    <select
      id="hotel"
      className="form-select"
      aria-label="Hotel"
      onChange={(e) => handleForm(e.target.id, e.target.value)}
    >
      {hotelsList.map((e) => (
        <option key={e} value={e}>
          {e}
        </option>
      ))}
    </select>
  );
}

export default RoomHotel;
