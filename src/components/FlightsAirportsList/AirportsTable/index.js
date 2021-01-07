import AirportsTableEntry from '../AirportsTableEntry';
import AirportsTableHeader from '../AirportsTableHeader';
import "./styles.css";
import { useState } from "react";

function AirportsTable({ airports }) {

    const [checkAll, setCheckAll] = useState(false)

    const toggleCheck = () => {
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
                                num={idx+1} 
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
