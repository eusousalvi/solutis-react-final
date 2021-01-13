import { Link } from "react-router-dom";

function FlightsHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info ">
      <div className="container-fluid ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavSecondary"
          aria-controls="navbarNavSecondary"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarNavSecondary"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/flights/routes"
              >
                Flights List
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/flights/airports"
              >
                Airports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/flights/routes"
              >
                Routes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default FlightsHeader;
