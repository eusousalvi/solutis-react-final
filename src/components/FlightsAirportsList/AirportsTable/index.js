import AirportsTableEntry from '../AirportsTableEntry';
import AirportsTableHeader from '../AirportsTableHeader';
import "./styles.css";
import { useState } from "react";

function AirportsTable({ airports, idxStart, setSelectedForRemoval, setDeleted }) {

    const [checkAll, setCheckAll] = useState(false)

    function toggleCheck() {
        setCheckAll(check => !check)
    }

    const tableFields = [
        <input type="checkbox"
            id="selectAirports" 
            onChange={toggleCheck}    
        />,
        "#",
        "Code",
        "Name",
        "Citycode",
        "Cityname",
        "Countryname",
        "Countrycode",
        "Continent Id",
        "Timezone",
        "Latitude",
        "Longitude",
        ""
    ]

    return (
        <div className="table-responsive">
            <table className="table table-striped" id="airportsTable">
                <AirportsTableHeader fields={tableFields} prefix="airports" />
                <tbody>
                    {airports.map((airport, idx) =>
                            <AirportsTableEntry 
                                checked={checkAll} 
                                num={idxStart + idx +1} 
                                key={airport.id} 
                                airport={airport} 
                                setSelectedForRemoval={setSelectedForRemoval}
                                setDeleted={setDeleted}
                            />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AirportsTable
