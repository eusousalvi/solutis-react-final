import "./styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateQuery, updateSearchFilter } from "../../../redux/actions/airports";

function AirportsSearchBar({ searchAirports }) {

    const dispatch = useDispatch()
    const [isClicked, setClicked] = useState(false)

    function onChangeQuery(e) {
        dispatch(updateQuery(e.target.value))
    }

    function onChangeFilter(e) {
        dispatch(updateSearchFilter(e.target.value))
    }

    function onSubmit(e) {
        e.preventDefault();
        if (!isClicked)
            setClicked(true)
        else {
            searchAirports()
        }
    }

    function refreshPage() {
        dispatch(updateQuery(""))
        window.location.reload()
    }

    return (
        <form className={"airports-form form float-right " + (isClicked ? "form-complete" : "form-solo")}>
            {   isClicked ?
                <>
                    <input className="form-control" type="text" name="query"
                        placeholder="Search by: "
                        onChange={onChangeQuery}
                    />
                    <select className="form-control" onChange={onChangeFilter}>
                        <option value="code">Code</option>
                        <option value="name">Name</option>
                        <option value="citycode">Citycode</option>
                        <option value="cityname">Cityname</option>
                        <option value="countryname">Countryname</option>
                        <option value="countrycode">Countrycode</option>
                        <option value="continentId">Continent id</option>
                        <option value="timezone">Timezone</option>
                        <option value="latitude">Latitude</option>
                        <option value="longitude">Longitude</option>
                    </select>
                </>
                :
                null
            }

            <button className="btn btn-primary airport-button" id="btnSearch" type="submit" onClick={onSubmit}>
                {isClicked ? "Go" : "Search"}
            </button>

            { isClicked ?
                <Link to="/flights/airports">
                    <button className="btn btn-warning airport-button" onClick={refreshPage}>
                        Reset
                    </button>
                </Link>
                :
                null
            }
        </form>
    )
}

export default AirportsSearchBar;