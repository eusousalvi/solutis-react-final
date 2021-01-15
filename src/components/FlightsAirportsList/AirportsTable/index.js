import AirportsTableEntry from '../AirportsTableEntry';
import AirportsTableHeader from '../AirportsTableHeader';
import "./styles.css";
import { useState } from "react";
import { useSelector } from "react-redux";

function AirportsTable({ idxStart }) {

    const airports = useSelector(state => state.airports.airports)
    const [checkAll, setCheckAll] = useState(false)

    function toggleCheck() {
        setCheckAll(check => !check)
    }

    const tableFields = [
        "Code",
        "Name",
        "Citycode",
        "Cityname",
        "Countryname",
        "Countrycode",
        "Continent Id",
        "Timezone",
        "Latitude",
        "Longitude"
    ]

    return (
        <div className="table-responsive">
            <table className="table table-striped" id="airportsTable">
                <AirportsTableHeader fields={tableFields} prefix="airports" toggleCheck={toggleCheck} />
                <tbody>
                    {airports.map((airport, idx) =>
                        <AirportsTableEntry
                            checked={checkAll}
                            num={idxStart + idx + 1}
                            key={airport.id}
                            airport={airport}
                        />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AirportsTable
