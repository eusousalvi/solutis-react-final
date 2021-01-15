import HotelsHeader from "../../components/HotelsHeader";
import { withRouter } from "react-router-dom";
import hotelServices from "../../services/hotels";
import hotelsAction from "../../redux/actions/hotelsAction";

import "./styles.css";

import { useEffect, useState } from "react";
import HotelsTableHeader from "../../components/Hotels/HotelsTableHeader";
import HotelsTableRow from "../../components/Hotels/HotelsTableRow";
import HotelsTopBar from "../../components/Hotels/HotelsTopBar";
import Pagination from "../../components/Pagination";
import RoomsFooter from "../../components/HotelsRoomList/RoomsFooter";
import { useDispatch, useSelector } from "react-redux";

function Hotels() {
  const [deleted, setDeleted] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const dispatch = useDispatch();

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

  const { hotels, page, limit, totalPages, size } = useSelector(
    (state) => state.hotelsReducer
  );

  useEffect(() => {
    async function fetchData() {
      if (limit !== "all") {
        let pageNumber = page;

        await hotelServices.getHotelsSize(dispatch);

        if (limit === 100 && size <= 100) pageNumber = 1; // eslint-disable-line no-unused-vars

        await hotelServices.getHotelsPaginate(page, limit, dispatch);
        dispatch(hotelsAction.setTotalPages(size));
      } else {
        await hotelServices.getHotels(dispatch);
      }
    }
    fetchData();
  }, [dispatch, deleted, page, limit]);

  function handleChangePageOrLimit(field, data) {
    dispatch(hotelsAction.setPageOrLimit(field, data));
  }

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
      <RoomsFooter>
        <Pagination
          className="py-5"
          page={page}
          limit={limit}
          totalPages={totalPages}
          handleChangePageOrLimit={handleChangePageOrLimit}
        />
      </RoomsFooter>
    </>
  );
}

export default withRouter(Hotels);
