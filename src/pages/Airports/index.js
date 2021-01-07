import Header from '../../components/Header';
import AirportsHeader from "../../components/FlightsAirportsList/AirportsHeader";
import AirportsTable from "../../components/FlightsAirportsList/AirportsTable";
import AirportsFooter from "../../components/FlightsAirportsList/AirportsFooter";
import "./styles.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Airports() {

    const [airports, setAirports] = useState([]);

    useEffect(() => {
        const url = "https://5ff63868941eaf0017f378a8.mockapi.io/api/airports?"

        axios.get(url).then(res => {
            setAirports(res.data)
        })
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <Header />
            <div className="container">
                <AirportsHeader>
                    <div className="col-sm-4">
                        <Link to="airports/add">
                            <button className="btn btn-success">ADD</button>
                        </Link>
                    </div>
                </AirportsHeader>

                <div className="row">
                    <AirportsTable airports={airports} />
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    {airports.length > 0 ? <AirportsFooter total={airports.length} /> : null}
                </div>
            </div>
        </>
    )
}

export default Airports;