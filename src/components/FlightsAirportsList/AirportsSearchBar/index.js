import { useState } from "react";
import "./styles.css";

function AirportsSearchBar() {

    const [query, setQuery] = useState("")
    const [isClicked, setClicked] = useState(false)

    const onChangeQuery = (e) => {
        setQuery(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!isClicked)
            setClicked(true)
        else {
            setClicked(false)
            // search
        }
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
        </form>
    )
}

export default AirportsSearchBar;