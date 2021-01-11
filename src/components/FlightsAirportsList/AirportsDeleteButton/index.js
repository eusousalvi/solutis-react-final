import { FaTimes } from "react-icons/fa";
import airportServices from "../../../services/airports";


function AirportsDeleteButton({ id }) {

    async function deleteAirport() {

        const confirmDelete = window.confirm("Are you sure you want to remove this airport?")

        if(confirmDelete)
        {
            let data = await airportServices.deleteAirport(id)
        }
    }

    return (
        <>
            <button className="btn btn-danger" onClick={deleteAirport}>
                <FaTimes />
            </button>
        </>
    )
}

export default AirportsDeleteButton