import AirportView from "../../components/FlightsAirportsList/AirportView";
import AirportsHeader from "../../components/FlightsAirportsList/AirportsHeader";
import { Link } from "react-router-dom";
import FlightsHeader from "../../components/FlightsHeader";

function AirportsDetails(props) {
    
    return (
        <>
            <FlightsHeader />
            <div className="container">
                <AirportsHeader>
                    <div className="col-md-4">
                        <Link to="/flights/airports">
                            <button className="btn btn-warning">RETURN</button>
                        </Link>
                    </div>
                </AirportsHeader>
                <AirportView airport={props.location.airport} />
            </div>
        </>
    )

}

export default AirportsDetails