import { amenitiesList } from "../../../utils/RoomArrays/amenitiesList";

function RoomAmenities({ handleForm, amenity, ...data }) {
  return (
    <>
      {amenitiesList.map((amenity) => (
        <div
          key={amenity}
          id={"amenity-" + amenity.toLowerCase().replace(/ /g, "-")}
        >
          <input
            type="checkbox"
            className="room-amenity"
            aria-label={amenity}
            value={amenity}
            onChange={(e) => handleForm(e.target.className, e.target.value)}
          ></input>
          <label htmlFor={amenity} className="form-label">
            {amenity}
          </label>
        </div>
      ))}
    </>
  );
}

export default RoomAmenities;
