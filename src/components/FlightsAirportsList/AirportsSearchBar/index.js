import "./styles.css";
import { useState } from "react";
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
            searchAirports(false)
        }
    }

    function refreshPage() {
        dispatch(updateQuery(""))
        dispatch(updateSearchFilter("code"))
        searchAirports(true)
        setClicked(false)
    }

    return (
        <form className={"airports-form form float-right " + (isClicked ? "form-complete" : "form-solo")}>
            {   isClicked ?
                <>
                    <input className="form-control" type="text"
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

            <button className="btn btn-primary airport-button" id="btnSearch" type="button" onClick={onSubmit}>
                {isClicked ? "Go" : "Search"}
            </button>

            { isClicked ?
                <button className="btn btn-warning airport-button" type="button" onClick={refreshPage}>
                    Reset
                </button>
                :
                null
            }
        </form>
    )
}

export default AirportsSearchBar;