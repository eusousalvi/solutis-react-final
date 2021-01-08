import { FaTimes } from "react-icons/fa";
import axios from "axios";

function AirportsDeleteButton({ id }) {

    const deleteAirport = () => {
        if(window.confirm("Do you really want to remove this airport?"))
        {
            axios.delete(`https://5ff63868941eaf0017f378a8.mockapi.io/api/airports/${id}`)
            .then(res => window.location.reload())
            .catch(err => console.error(err))
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