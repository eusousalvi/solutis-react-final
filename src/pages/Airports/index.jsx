import AirportsTable from "../../components/Airports/AirportsTable";
import Header from '../../components/Header';
import "./styles.css";
import AirportsHeader from "../../components/Airports/AirportsHeader";

import { Link } from "react-router-dom";

function Airports() {
    return (
        <>
            <Header />
            <div className="container">
                <AirportsHeader> 
                    <div className="col-md-4">
                        <Link to="/airport/create">
                            <button className="btn btn-success">ADD</button>
                        </Link>
                    </div>
                </AirportsHeader>
                <div className="row">
                    <AirportsTable />
                </div>
            </div>
        </>
    )
}

export default Airports;