import { useEffect, useState } from "react";
import hotelServices from "../../services/hotels";

function AddHotel(props) {
  const [addHotel, setAddHotel] = useState({
    url: "",
    name: "",
    star: 1,
    owned_by: "",
    location: "",
    order: 1,
    discount: 0,
    status: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    hotelServices.createHotel(addHotel);
    props.history.push("/hotels");
  }

  return (
    <main className="container pt-5">
      <header className="mb-5">
        <h1>Add Hotel</h1>
      </header>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label for="urlAddHotel" className="form-label">
            Image url
          </label>
          <input
            onChange={(e) => {
              setAddHotel((prev) => ({ ...prev, url: e.target.value }));
            }}
            value={addHotel.url}
            type="text"
            placeholder="Image Url"
            className="form-control"
            id="urlAddHotel"
          />
        </div>
        <div className="col-md-6">
          <label for="nameAddHotel" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => {
              setAddHotel((prev) => ({ ...prev, name: e.target.value }));
            }}
            value={addHotel.name}
            type="text"
            placeholder="Name"
            className="form-control"
            id="nameAddHotel"
          />
        </div>
        <div className="col-12">
          <label for="starAddHotel" className="form-label">
            Star
          </label>
          <input
            onChange={(e) => {
              setAddHotel((prev) => ({ ...prev, star: e.target.value }));
            }}
            value={addHotel.star}
            type="number"
            min="1"
            max="5"
            className="form-control"
            id="starAddHotel"
            placeholder="Star"
          />
        </div>
        <div className="col-12">
          <label for="ownedByAddHotel" className="form-label">
            Owned By
          </label>
          <input
            onChange={(e) => {
              setAddHotel((prev) => ({ ...prev, owned_by: e.target.value }));
            }}
            value={addHotel.owned_by}
            type="text"
            className="form-control"
            id="ownedByAddHotel"
            placeholder="Owned By"
          />
        </div>
        <div className="col-md-6">
          <label for="locationAddHotel" className="form-label">
            Location
          </label>
          <input
            onChange={(e) => {
              setAddHotel((prev) => ({ ...prev, location: e.target.value }));
            }}
            value={addHotel.location}
            type="text"
            className="form-control"
            placeholder="Location"
            id="locationAddHotel"
          />
        </div>
        <div className="col-md-4">
          <label for="orderAddHotel" className="form-label">
            Order
          </label>
          <input
            onChange={(e) => {
              setAddHotel((prev) => ({ ...prev, order: e.target.value }));
            }}
            value={addHotel.order}
            type="number"
            className="form-control"
            id="orderAddHotel"
            placeholder="Order"
          />
        </div>
        <div className="col-md-2">
          <label for="discountAddHotel" className="form-label">
            Discount
          </label>
          <input
            onChange={(e) => {
              setAddHotel((prev) => ({ ...prev, discount: e.target.value }));
            }}
            value={addHotel.discount}
            type="number"
            className="form-control"
            id="discountAddHotel"
            placeholder="Discount"
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              onChange={(e) => {
                setAddHotel((prev) => ({ ...prev, status: !prev.status }));
              }}
              checked={addHotel.status}
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Status
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    </main>
  );
}

export default AddHotel;
