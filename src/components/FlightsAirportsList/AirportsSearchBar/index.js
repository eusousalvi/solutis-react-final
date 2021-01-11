import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom"

function AirportsSearchBar({ searchAirports }) {

    const [query, setQuery] = useState("")
    const [isClicked, setClicked] = useState(false)

    function onChangeQuery(e) {
        setQuery(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();
        if (!isClicked)
            setClicked(true)
        else {
            searchAirports(query)
            setQuery("")
        }
    }

    function refreshPage() {
        window.location.reload()
    }

    return (
        <form className={"form float-right " + (isClicked ? "form-complete" : "form-solo")}>
            {   isClicked ?
                <input className="form-control" type="text" name="query"
                    placeholder="ex.: nome da cidade"
                    value={query}
                    onChange={onChangeQuery}
                />
                :
                null
            }

            <button className="btn btn-primary" id="btnSearch" type="submit" onClick={onSubmit}>
                {isClicked ? "Go" : "Search"}
            </button>

            { isClicked ?
                <Link to="/flights/airports">
                    <button className="btn btn-warning" onClick={refreshPage}>
                        Return
                    </button>
                </Link>
                :
                null
            }
        </form>
    )
}

export default AirportsSearchBar;