import { useEffect, useState } from "react";
import AirportView from "../../components/FlightsAirportsList/AirportView";
import AirportsHeader from "../../components/FlightsAirportsList/AirportsHeader";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import airportsService from "../../services/airports";
import FlightsHeader from "../../components/FlightsHeader";

function AirportsDetails() {
    
    const params = useParams();
    const [airport, setAirport] = useState({})

    useEffect(() => {
        airportsService.getAirportById(params.id)
        .then(res =>  setAirport(res.data))
        .catch(err => console.log(err))
    }, [])

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
                <AirportView airport={airport} />
            </div>
        </>
    )

}

export default AirportsDetails