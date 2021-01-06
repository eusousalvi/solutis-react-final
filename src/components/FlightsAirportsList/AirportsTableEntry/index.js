import { Link } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import AirportButtonDelete from "../AirportButtonDelete";
import "./styles.css";

const AirportsTableEntry = ({ airport }) => {
    return (
        <tr>
            <td name="airportSelected">
                <input type="checkbox" id={airport.id} />
            </td>
            <td>
                {airport.id}
            </td>
            <td name="airportCode">
                {airport.code}
            </td>
            <td name="airportName">
                {airport.name}
            </td>
            <td name="airportCitycode">
                {airport.citycode}
            </td>
            <td name="airportCityname">
                {airport.cityname}
            </td>
            <td name="airportCountryname">
                {airport.countryname}
            </td>
            <td name="airportCountrycode">
                {airport.countrycode}
            </td>
            <td name="airportContinentname">
                {airport.continentId}
            </td>
            <td name="airportTimezone">
                {airport.timezone}
            </td>
            <td name="airportLatitude">
                {airport.latitude}
            </td>
            <td name="airportLongitude">
                {airport.longitude}
            </td>

            <td id="airportActions" name="airportActions">
                <span>
                    <Link to={{
                        pathname: "/airports/view",
                        airport: airport
                    }}
                    >
                        <button className="btn btn-info">
                            <BiSearch />
                        </button>
                    </Link>

                    <Link to={"/airports/" + airport.id} >
                        <button className="btn btn-warning">
                            <FiEdit />
                        </button>
                    </Link>

                    <AirportButtonDelete />
                </span>
            </td>
        </tr>
    )
}

export default AirportsTableEntry