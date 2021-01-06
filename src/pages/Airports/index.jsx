import Header from '../../components/Header';
import AirportsHeader from "../../components/Airports/AirportsHeader";
import AirportsTable from "../../components/Airports/AirportsTable";
import AirportsFooter from "../../components/Airports/AirportsFooter";
import "./styles.css";

import { Link } from "react-router-dom";

function Airports() {
    return (
        <>
            <Header />
            <div className="container airportsContainer">
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

            <div className="container-fluid">
            <div className="row">
                    <AirportsFooter />
                </div>
            </div>
        </>
    )
}

export default Airports;