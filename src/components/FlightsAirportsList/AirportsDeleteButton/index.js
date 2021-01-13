import { FaTimes } from "react-icons/fa";
import airportServices from "../../../services/airports";
import { useDispatch } from "react-redux";
import { refreshPage } from "../../../redux/actions/airports";

function AirportsDeleteButton({ id }) {

    const dispatch = useDispatch()

    function deleteAirport() {

        const confirmDelete = window.confirm("Are you sure you want to remove this airport?")

        if(confirmDelete)
        {
            airportServices.deleteAirport(id)
            .then(() => dispatch(refreshPage(true)))
            .catch(err => console.error(err))
        }
    }

    return (
        <>
            <button className="btn btn-danger airport-button" onClick={deleteAirport}>
                <FaTimes />
            </button>
        </>
    )
}

export default AirportsDeleteButton