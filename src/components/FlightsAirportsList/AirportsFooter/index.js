import "./styles.css";
import AirportsPagination from "../AirportsPagination";
import AirportsSearchBar from "../AirportsSearchBar";

function AirportsFooter({ total }) {

    return (
        <div className="footer">
            <div className="row">
                <div className="col-sm-12 footer-container">
                    <AirportsPagination total={total} />
                    <AirportsSearchBar />
                </div>
            </div>
        </div>
    )
}

export default AirportsFooter;