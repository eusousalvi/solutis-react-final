import { amenitiesList } from "../../../utils/RoomArrays/amenitiesList";
import RoomAmenity from "./RoomAmenity";

function RoomAmenitiesList({ handleForm: handleAmenity, ...data }) {
  return (
    <>
      {amenitiesList.map((e) => (
        <RoomAmenity
          key={e}
          amenity={e}
          className="amenity"
          handleChange={(category, value) => handleAmenity(category, value)}
        />
      ))}
    </>
  );
}

export default RoomAmenitiesList;
