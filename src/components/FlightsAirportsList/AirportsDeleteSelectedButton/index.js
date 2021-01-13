import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import airportServices from "../../../services/airports";
import { refreshPage, removeFromRemovalList } from "../../../redux/actions/airports";

function AirportsDeleteSelectedButton() {

    const selectedForRemoval = useSelector(state => state.airports.selectedForRemoval)
    const dispatch = useDispatch()

    async function deleteSelected() {

        let itemsDeleted = selectedForRemoval.length
        const confirmDelete = window.confirm("Are you sure you want to remove these entries?")

        if (confirmDelete) {
            for (let i of selectedForRemoval) {
                let data = await airportServices.deleteAirport(i)
                if (data) {itemsDeleted--
                    dispatch(refreshPage(true))
                }
            }
        }

        dispatch(removeFromRemovalList("all"))
    }

    return (
        <button className="btn btn-danger airport-button" onClick={deleteSelected} >
            <FiX /> Delete Selected
        </button>
    )
}

export default AirportsDeleteSelectedButton