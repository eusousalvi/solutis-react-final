import { hotelsList } from "../../utils/RoomArrays/hotelsList";
import { roomsList } from "../../utils/RoomArrays/roomsList";
import { languagesList } from "../../utils/RoomArrays/languagesList";
import { useState } from "react";
import RoomFormDescriptions from "./RoomFormDescriptions";
import RoomAmenities from "./RoomAmenities";
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
          [item.toLowerCase().toLowerCase().replace(/ /g, "-")]: "",
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
    amenities: [],
  });

  const handleForm = (category, value) => {
    const aux = mainForm;
    if (category !== "room-amenity") {
      if (value) {
        aux[category] = value;
      } else {
        aux[category] = 0;
      }
      setForm(aux);
    } else {
      let index = aux["amenities"].indexOf(value);
      if (index === -1) {
        aux["amenities"].push(value);
        setForm(aux);
      } else {
        aux["amenities"].splice(index, 1);
        setForm(aux);
      }
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

        <RoomAmenities id="room-languages" handleForm={handleForm} />

        <button type="submit" className="btn btn-primary">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
