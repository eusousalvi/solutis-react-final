import AirportsHeader from "../../components/FlightsAirportsList/AirportsHeader";
import Header from "../../components/Header";
import { Link } from "react-router-dom";


function AirportView(props) {
    const airport = props.location.airport;

    return (
        <>
        <Header />
        <div className="container">
            <AirportsHeader>
                <div className="col-md-4">
                    <Link to="/airports">
                        <button className="btn btn-warning">RETURN</button>
                    </Link>
                </div>
            </AirportsHeader>

            <div className="row">
                <div className="col-md-6">
                    <p><b>Code:</b> {airport.code}</p>
                    <hr />
                    <p><b>Citycode:</b> {airport.citycode}</p>
                    <hr />
                    <p><b>Countryname:</b> {airport.countryname}</p>
                    <hr />
                    <p><b>Continent Id:</b> {airport.continentId}</p>
                    <hr />
                    <p><b>Lat:</b> {airport.latitude}</p>
                    <hr />
                    <p><b>City:</b> {airport.city}</p>
                </div>
                <div className="col-md-6">
                    <p><b>Name:</b> {airport.name}</p>
                    <hr />
                    <p><b>Cityname:</b> {airport.cityname}</p>
                    <hr />
                    <p><b>Countrycode</b> {airport.countrycode}</p>
                    <hr />
                    <p><b>Timezone</b> {airport.timezone}</p>
                    <hr />
                    <p><b>Longitude</b> {airport.longitude}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default AirportView;