import { FaTimes } from "react-icons/fa";
import airportServices from "../../../services/airports";


function AirportsDeleteButton({ id, setDeleted }) {

    function deleteAirport() {

        const confirmDelete = window.confirm("Are you sure you want to remove this airport?")

        if(confirmDelete)
        {
            airportServices.deleteAirport(id)
            .then(() => setDeleted(true))
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