import { roomsList } from "../../utils/RoomArrays/roomsList";
import { hotelsList } from "../../utils/RoomArrays/hotelsList";
import { amenitiesList } from "../../utils/RoomArrays/amenitiesList";
import { useState } from "react";
import ReactQuill from "react-quill";
import "./styles.css";
import "react-quill/dist/quill.snow.css";

import RoomCreateService from "../../services/roomCreate";

function HotelRoomCreate() {
  const [descriptions, setDescription] = useState({
    english: "",
    portuguese: "",
    japanese: "",
    russian: "",
    arabic: "",
  });

  const [mainForm, setForm] = useState({
    status: "enabled",
    price: 0,
    type: roomsList[0],
    hotel: hotelsList[0],
    quantity: 0,
    stay: 0,
    adult: 0,
    child: 0,
    bed: 0,
    charge: 0,
    descriptions: descriptions,
    amenities: [],
  });

  function handleForm(category, value) {
    const aux = mainForm;
    if (category !== "checklistInput") {
      aux[category] = value;
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
  }

  function handleLanguage(category, value) {
    const auxDesc = descriptions;
    auxDesc[category] = value;
    setDescription(auxDesc);

    const auxForm = mainForm;
    auxForm["descriptions"] = descriptions;
    setForm(auxForm);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await RoomCreateService.addRoom(mainForm);
      if (response.status === 200 || response.status || 201)
        console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const modules = {
    toolbar: [
      [{ direction: "rtl" }],
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ script: "sub" }, { script: "super" }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  //TO-DO: Divide the form in multiple components using Redux for state management.
  return (
    <div className="mx-auto col-6">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-row">
          <div>
            <p>Room Description</p>
            <ReactQuill //To do: Pass language as a prop once it's a component.
              id="english"
              className="rich-text-field"
              modules={modules}
              onChange={(e) => handleLanguage("english", e)}
              required
            />
          </div>
          <div>
            <p>Portuguese</p>
            <ReactQuill
              id="portuguese"
              className="rich-text-field"
              modules={modules}
              onChange={(e) => handleLanguage("portuguese", e)}
            />
          </div>
          <div>
            <p>Japanese</p>
            <ReactQuill
              id="japanese"
              className="rich-text-field"
              modules={modules}
              onChange={(e) => handleLanguage("japanese", e)}
            />
          </div>
          <div>
            <p>Russian</p>
            <ReactQuill
              id="russian"
              className="rich-text-field"
              modules={modules}
              onChange={(e) => handleLanguage("russian", e)}
            />
          </div>
          <div>
            <p>Arabic</p>
            <ReactQuill
              id="arabic"
              className="rich-text-field"
              modules={modules}
              onChange={(e) => handleLanguage("arabic", e)}
            />
          </div>
          <div className="form-group">
            <label for="Status">Status</label>
            <select
              className="form-select"
              aria-label="Status"
              id="status"
              onChange={(e) => handleForm(e.target.id, e.target.value)}
            >
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
          </div>

          <div className="form-col"></div>
          <label for="Price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Price"
            aria-label="Price"
            onChange={(e) => handleForm(e.target.id, parseInt(e.target.value))}
            required
          />
        </div>

        <div className="col">
          <select
            className="form-select"
            aria-label="RoomType"
            onChange={(e) => handleForm(e.target.id, e.target.value)}
          >
            {roomsList.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        </div>

        <div className="col">
          <select
            className="form-select"
            aria-label="Hotel"
            onChange={(e) => handleForm(e.target.id, e.target.value)}
          >
            {hotelsList.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        </div>
        <input
          type="number"
          className="form-control"
          id="quantity"
          placeholder="Quantity"
          aria-label="Quantity"
          onChange={(e) => handleForm(e.target.id, parseInt(e.target.value))}
        />

        <input
          type="number"
          className="form-control"
          id="stay"
          placeholder="Mininum Stay"
          aria-label="MinStay"
          onChange={(e) => handleForm(e.target.id, parseInt(e.target.value))}
        />

        <input
          type="number"
          className="form-control"
          id="adult"
          placeholder="Max Adults"
          aria-label="MaxAdults"
          onChange={(e) => handleForm(e.target.id, parseInt(e.target.value))}
        />

        <input
          type="number"
          className="form-control"
          id="child"
          placeholder="Max Children"
          aria-label="MaxChild"
          onChange={(e) => handleForm(e.target.id, parseInt(e.target.value))}
        />

        <input
          type="number"
          className="form-control"
          id="bed"
          placeholder="Extra Beds"
          aria-label="ExtraBeds"
          onChange={(e) => handleForm(e.target.id, parseInt(e.target.value))}
        />

        <input
          type="number"
          className="form-control"
          id="charge"
          placeholder="Beds Charges"
          aria-label="BedsCharges"
          onChange={(e) => handleForm(e.target.id, parseInt(e.target.value))}
        />

        {amenitiesList.map((amenity) => (
          <div>
            <input
              type="checkbox"
              className="checklistInput"
              aria-label={amenity}
              value={amenity}
              onChange={(e) => handleForm(e.target.className, e.target.value)}
            ></input>
            <label for={amenity} className="form-label">
              {amenity}
            </label>
          </div>
        ))}

        <button type="submit" className="btn btn-primary">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
export default HotelRoomCreate;
