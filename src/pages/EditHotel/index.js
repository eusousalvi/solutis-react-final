import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import hotelServices from "../../services/hotels";

function EditHotel(props) {
  const [hotelInfo, setHotelInfo] = useState({
    image: "",
    name: "",
    star: 1,
    owned_by: "",
    location: "",
    order: 1,
    discount: 0,
    status: false,
  });
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const res = await hotelServices.getHotel(params.id);
      setHotelInfo(res.data);
    }

    fetchData();
    console.log(hotelInfo);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    hotelServices.editHotel(hotelInfo);
    props.history.push("/hotels");
  }

  return (
    <main className="container pt-5">
      <header className="mb-5">
        <h1>Edit Hotel</h1>
      </header>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label for="urlhotelInfo" className="form-label">
            Image url
          </label>
          <input
            onChange={(e) => {
              setHotelInfo((prev) => ({ ...prev, image: e.target.value }));
            }}
            value={hotelInfo.image}
            type="text"
            placeholder="Image Url"
            className="form-control"
            id="urlhotelInfo"
          />
        </div>
        <div className="col-md-6">
          <label for="namehotelInfo" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => {
              setHotelInfo((prev) => ({ ...prev, name: e.target.value }));
            }}
            value={hotelInfo.name}
            type="text"
            placeholder="Name"
            className="form-control"
            id="namehotelInfo"
          />
        </div>
        <div className="col-12">
          <label for="starhotelInfo" className="form-label">
            Star
          </label>
          <input
            onChange={(e) => {
              setHotelInfo((prev) => ({ ...prev, star: e.target.value }));
            }}
            value={hotelInfo.star}
            type="number"
            min="1"
            max="5"
            className="form-control"
            id="starhotelInfo"
            placeholder="Star"
          />
        </div>
        <div className="col-12">
          <label for="ownedByhotelInfo" className="form-label">
            Owned By
          </label>
          <input
            onChange={(e) => {
              setHotelInfo((prev) => ({ ...prev, owned_by: e.target.value }));
            }}
            value={hotelInfo.owned_by}
            type="text"
            className="form-control"
            id="ownedByhotelInfo"
            placeholder="Owned By"
          />
        </div>
        <div className="col-md-6">
          <label for="locationhotelInfo" className="form-label">
            Location
          </label>
          <input
            onChange={(e) => {
              setHotelInfo((prev) => ({ ...prev, location: e.target.value }));
            }}
            value={hotelInfo.location}
            type="text"
            className="form-control"
            placeholder="Location"
            id="locationhotelInfo"
          />
        </div>
        <div className="col-md-4">
          <label for="orderhotelInfo" className="form-label">
            Order
          </label>
          <input
            onChange={(e) => {
              setHotelInfo((prev) => ({ ...prev, order: e.target.value }));
            }}
            value={hotelInfo.order}
            type="number"
            className="form-control"
            id="orderhotelInfo"
            placeholder="Order"
          />
        </div>
        <div className="col-md-2">
          <label for="discounthotelInfo" className="form-label">
            Discount
          </label>
          <input
            onChange={(e) => {
              setHotelInfo((prev) => ({ ...prev, discount: e.target.value }));
            }}
            value={hotelInfo.discount}
            type="number"
            className="form-control"
            id="discounthotelInfo"
            placeholder="Discount"
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              onChange={(e) => {
                setHotelInfo((prev) => ({ ...prev, status: !prev.status }));
              }}
              checked={hotelInfo.status}
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

export default EditHotel;
