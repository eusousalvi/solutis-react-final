import Header from '../../components/Header';
import AirportsHeader from "../../components/FlightsAirportsList/AirportsHeader";
import AirportsTable from "../../components/FlightsAirportsList/AirportsTable";
import AirportsFooter from "../../components/FlightsAirportsList/AirportsFooter";
import "./styles.css";

import { Link } from "react-router-dom";

function AirportsList() {

    // useEffect [] + GET na api 

    return (
        <>
            <Header />
            <div className="container">
                <AirportsHeader>
                    <div className="col-sm-4">
                        <Link to="/airport/create">
                            <button className="btn btn-success">ADD</button>
                        </Link>
                    </div>
                </AirportsHeader>
                
                <div className="row">
                    <AirportsTable />
                </div>
            </div>

            <div className="container-fluid">
            <div className="row">
                    <AirportsFooter />
                </div>
            </div>
        </>
    )
}

export default AirportsList;