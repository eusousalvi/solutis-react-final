import { hotelsList } from "../../utils/RoomArrays/hotelsList";
import { roomsList } from "../../utils/RoomArrays/roomsList";
import { languagesList } from "../../utils/RoomArrays/languagesList";
import { amenitiesList } from "../../utils/RoomArrays/amenitiesList";
import { useState } from "react";
import RoomFormDescriptions from "./RoomFormDescriptions";
import RoomAmenitiesList from "./RoomAmenitiesList";
import RoomInputList from "./RoomInputList";
import RoomStatus from "./RoomStatus";
import RoomHotel from "./RoomHotel";
import RoomType from "./RoomType";
import "./styles.css";
import "react-quill/dist/quill.snow.css";

export default function HotelsRoomForm({ onSubmit: handleSubmit, ...data }) {
  const [descriptions, setDescription] = useState(
    languagesList.reduce(
      (obj, item) =>
        Object.assign(obj, {
          [item.toLowerCase().replace(/ /g, "-")]: "",
        }),
      {}
    )
  );

  const [amenities, setAmenity] = useState(
    amenitiesList.reduce(
      (obj, item) =>
        Object.assign(obj, {
          [item]: false,
        }),
      {}
    )
  );

  const [mainForm, setForm] = useState({
    status: "enabled",
    type: roomsList[0],
    hotel: hotelsList[0],
    price: 0,
    quantity: 0,
    stay: 0,
    adult: 0,
    child: 0,
    bed: 0,
    charge: 0,
    descriptions: descriptions,
    amenities: amenities,
  });

  const handleForm = (category, value) => {
    const auxForm = mainForm;
    if (category !== "room-amenity") {
      if (value) {
        auxForm[category] = value;
      } else {
        auxForm[category] = 0;
      }
      setForm(auxForm);
    } else {
      const auxAmenity = amenities;
      auxAmenity[value.value] = value.checked;
      setAmenity(auxAmenity);
      auxForm["amenities"] = amenities;
      setForm(auxForm);
    }
  };

  const handleLanguage = (category, value) => {
    const auxDesc = descriptions;
    auxDesc[category] = value;
    setDescription(auxDesc);

    const auxForm = mainForm;
    auxForm["descriptions"] = descriptions;
    setForm(auxForm);
  };

  return (
    <div className="mx-auto col-6">
      <form onSubmit={(e) => handleSubmit(e, mainForm)}>
        <RoomFormDescriptions
          className="description-list"
          handleChange={handleLanguage}
        />

        <RoomStatus handleForm={handleForm} />

        <RoomType handleForm={handleForm} />

        <RoomHotel handleForm={handleForm} />

        <RoomInputList handleForm={handleForm} />

        <RoomAmenitiesList id="room-languages" handleForm={handleForm} />

        <button type="submit" className="btn btn-primary">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
