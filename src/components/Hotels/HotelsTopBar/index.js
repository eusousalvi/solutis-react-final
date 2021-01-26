import { FiX } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import hotelServices from "../../../services/hotels";

function HotelsTopBar({ selectedToDelete }) {
  function handleDeleteSelected() {
    const areYouSure = window.confirm("Are you sure?");

    if (areYouSure) {
      try {
        selectedToDelete.map((id) => {
          hotelServices.deleteHotel(id);
        });
        window.alert("This hotel has been successfully deleted");
        window.location.reload();
      } catch (e) {
        window.alert("ocorreu um erro");
        console.log(e);
      }
    }
  }
  return (
    <div className="border border-secondary rounded d-flex justify-content-between mb-4 bg-white p-3 ">
      <Link className="btn btn-success" to="/hotels/create">
        <FiPlus /> Add
      </Link>
      <button
        onClick={() => {
          handleDeleteSelected();
        }}
        className="btn btn-danger"
      >
        <FiX /> Delete Selected
      </button>
    </div>
  );
}

export default HotelsTopBar;
