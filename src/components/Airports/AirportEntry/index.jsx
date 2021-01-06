import AirportButton from '../AirportButton';
import "./styles.css";

const AirportEntry = ({ airport }) => {
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
                { airport.countrycode}
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
            <td name="airportCity">
                {airport.city}
            </td>
            <td id="airportActions" name="airportActions">
                <span>
                    <AirportButton text="View" btnClass="btn-info" onClick={(id) => console.log('view ' + id)} airportId={airport.id}/> 
                    <AirportButton text="Edit" btnClass="btn-warning" onClick={(id) => console.log('edit ' + id)} airportId={airport.id} /> 
                    <AirportButton text="Delete" btnClass="btn-danger" onClick={(id) => console.log('delete ' + id)} airportId={airport.id} /> 
                </span>
            </td>
        </tr>
    )
}

export default AirportEntry