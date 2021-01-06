import AirportsTable from "../../components/Airports/AirportsTable";
import AirportButton from '../../components/Airports/AirportButton';
import Header from '../../components/Header';
import "./styles.css";

function Airports() {
    return (
        <>
        <Header />
        <div className="container">
            <div className="row header-title">
                Airports Management
            </div>
            <hr></hr>
            <div className="row button-container">
                <div className="col-md-4">
                    <AirportButton text="ADD" btnClass="btn-success" onClick={() => console.log("adicionar")}/>
                </div>
            </div>
            <div className="row">
                <AirportsTable />
            </div>
        </div>
        </>
    )
}

export default Airports;