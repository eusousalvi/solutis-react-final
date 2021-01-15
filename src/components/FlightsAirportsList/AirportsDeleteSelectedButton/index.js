import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { refreshPage, removeFromRemovalList, updateLoading } from "../../../redux/actions/airports";
import airportServices from "../../../services/airports";

function AirportsDeleteSelectedButton() {

    const selectedForRemoval = useSelector(state => state.airports.selectedForRemoval)
    const dispatch = useDispatch()

    async function deleteSelected() {

        const confirmDelete = window.confirm("Are you sure you want to remove these entries?")
        let errorThrown = false
        const loadingIncrementAmount = Math.ceil(100 / (selectedForRemoval.length - 1))

        if (confirmDelete) {
            for (let i of selectedForRemoval) {
                try {
                    await airportServices.deleteAirport(i)
                    dispatch(updateLoading(loadingIncrementAmount))
                } catch (err) {
                    if(err.response.status === 429){
                        errorThrown = true
                        alert(err + " (Too many requests). Wait a few seconds and try again")
                        break;
                    }
                };
            }
        }

        if (!errorThrown)
            dispatch(refreshPage())

        dispatch(removeFromRemovalList("all"))
        dispatch(updateLoading(0))
    }

    return (
        <button className="btn btn-danger airport-button" onClick={deleteSelected} >
            <FiX /> Delete Selected
        </button>
    )
}

export default AirportsDeleteSelectedButton