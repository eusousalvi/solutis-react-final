import HotelsHeader from "../../components/HotelsHeader";
import { withRouter } from "react-router-dom";
import hotelServices from "../../services/hotels";

import "./styles.css";

import { useEffect, useState } from "react";
import HotelsTableHeader from "../../components/Hotels/HotelsTableHeader";
import HotelsTableRow from "../../components/Hotels/HotelsTableRow";
import HotelsTopBar from "../../components/Hotels/HotelsTopBar";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const tableHeader = [
    "#",
    "Image",
    "Name",
    "Star",
    "Owned By",
    "Location",
    "Gallery",
    "Order",
    "Discount",
    "Status",
    "",
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await hotelServices.getHotels();
        if (response.status === 200 || response.status || 201)
          await setHotels(response.data);
      } catch (error) {
        window.alert("ocorreu um erro");
        console.log(error);
      }
    }
    fetchData();
  }, [deleted]);

  async function handleDelete(id) {
    const confirmDelete = window.confirm("Are you sure?");

    if (confirmDelete) {
      try {
        const response = await hotelServices.deleteHotel(id);
        if (response.status === 200 || response.status || 201) {
          setDeleted(!deleted);
          window.alert("This hotel has been successfully deleted");
        }
      } catch (error) {
        window.alert("ocorreu um erro");
        console.log(error);
      }
    }
  }

  return (
    <>
      <HotelsHeader />
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <HotelsTopBar />
            <table className="table">
              <HotelsTableHeader
                columnTitle={tableHeader}
                selectAll={selectAll}
                setSelectAll={setSelectAll}
              />

              <tbody>
                {hotels.map((hotel, index) => {
                  return (
                    <HotelsTableRow
                      selectAll={selectAll}
                      handleDelete={() => {
                        handleDelete(hotel.id);
                      }}
                      key={index}
                      hotel={hotel}
                      index={index + 1}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Hotels);
