import { Link } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { useState, useEffect } from 'react';
import AirportsDeleteButton from "../AirportsDeleteButton";
import "./styles.css";

const AirportsTableEntry = ({ airport, checked, num, setSelectedForRemoval }) => {
    
    const [isChecked, setIsChecked] = useState(checked)
    
    useEffect(() => {
        setIsChecked(checked)
    }, [checked])

    useEffect(() => {
        if(isChecked)
            setSelectedForRemoval(state => [...state, airport.id])
        else
            setSelectedForRemoval(state => state.filter(id => id !== airport.id))
    }, [isChecked])

    return (
        <tr>
            <td id="airportSelected">
                <input type="checkbox" 
                    id={`airportCheckbox-${airport.id}`} 
                    checked={isChecked} 
                    onChange={() => setIsChecked(check => !check)}
                />
            </td>

            <td>{num}</td>
            <td id={`airportCode-${airport.id}`}>{airport.code}</td>
            <td id={`airportName-${airport.id}`}>{airport.id}</td>
            <td id={`airportCitycode-${airport.id}`}>{airport.citycode}</td>
            <td id={`airportCityname-${airport.id}`}>{airport.cityname}</td>
            <td id={`airportCountryname-${airport.id}`}>{airport.countryname}</td>
            <td id={`airportCountrycode-${airport.id}`}>{airport.countrycode}</td>
            <td id={`airportContinentname-${airport.id}`}>{airport.continentId}</td>
            <td id={`airportTimezone-${airport.id}`}>{airport.timezone}</td>
            <td id={`airportLatitude-${airport.id}`}>{airport.latitude}</td>
            <td id={`airportLongitude-${airport.id}`}>{airport.longitude}</td>

            <td id={`airportActions-${airport.id}`}>
                <span>
                    <Link to={{
                        pathname: "airports/view",
                        airport: airport
                    }}
                    >
                        <button id={`airportButtonView-${airport.id}`} className="btn btn-info airport-button">
                            <BiSearch />
                        </button>
                    </Link>

                    <Link to={"airports/" + airport.id} >
                        <button id={`airportButtonEdit-${airport.id}`} className="btn btn-warning airport-button">
                            <FiEdit />
                        </button>
                    </Link>

                    <AirportsDeleteButton id={airport.id} />
                </span>
            </td>
        </tr>
    )
}

export default AirportsTableEntry