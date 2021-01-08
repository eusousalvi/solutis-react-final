import { roomsList } from "../../utils/RoomArrays/roomsList";
import { hotelsList } from "../../utils/RoomArrays/hotelsList";
import { amenitiesList } from "../../utils/RoomArrays/amenitiesList";
import { useState } from "react";
import Quill from "quill";

function HotelRoomCreate() {
  const [mainForm, setForm] = useState({
    status: "enabled",
    price: 0,
    type: "",
    hotel: "",
    quantity: 0,
    stay: 0,
    adult: 0,
    child: 0,
    bed: 0,
    charge: 0,
    amenities: [],
  });

  function handleChange(category, value) {
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
    console.log(category, "-", value, "-", mainForm);
  }
  var toolbarOptions = [
    ["bold", "italic"],
    ["link", "image"],
  ];
  var quill = new Quill("#editor", {
    modules: {
      toolbar: toolbarOptions,
    },
    theme: "snow",
  });

  return (
    <div className="mx-auto">
      <form>
        <div className="form-row">
          <div id="editor">
            <p>Hello World!</p>
          </div>
          <div className="form-group col-6">
            <label for="Status">Status</label>
            <select
              className="form-select"
              aria-label="Status"
              id="status"
              onChange={(e) => handleChange(e.target.id, e.target.value)}
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
            id="Price"
            placeholder="Price"
            aria-label="Price"
            required
          />
        </div>

        <div className="col">
          <select className="form-select" aria-label="RoomType">
            {roomsList.map((e) => (
              <option
                value={e}
                onChange={(e) => handleChange(e.target.id, e.target.value)}
              >
                {e}
              </option>
            ))}
          </select>
        </div>

        <div className="col">
          <select className="form-select" aria-label="Hotel">
            {hotelsList.map((e) => (
              <option
                value={e}
                onChange={(e) => handleChange(e.target.id, e.target.value)}
              >
                {e}
              </option>
            ))}
          </select>
        </div>
        <input
          type="number"
          className="form-control"
          placeholder="Quantity"
          aria-label="Quantity"
        />

        <input
          type="number"
          className="form-control"
          placeholder="Mininum Stay"
          aria-label="MinStay"
        />

        <input
          type="number"
          className="form-control"
          placeholder="Max Adults"
          aria-label="MaxAdults"
        />

        <input
          type="number"
          className="form-control"
          placeholder="Max Children"
          aria-label="MaxChild"
        />

        <input
          type="number"
          className="form-control"
          placeholder="Extra Beds"
          aria-label="ExtraBeds"
        />

        <input
          type="number"
          className="form-control"
          placeholder="Beds Charges"
          aria-label="BedsCharges"
        />

        <input type="checkbox" aria-label="SelectAll"></input>
        <label for="SelectAll" className="form-label">
          SelectAll
        </label>

        {amenitiesList.map((amenity) => (
          <div>
            <input
              type="checkbox"
              className="checklistInput"
              aria-label={amenity}
              value={amenity}
              onChange={(e) => handleChange(e.target.className, e.target.value)}
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
