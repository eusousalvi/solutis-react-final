import { Link } from "react-router-dom";

function HotelsHeader() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-info ">
      <div class="container-fluid ">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-center"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/hotels">
                HotelsList
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                to="/hotels/rooms"
              >
                Rooms
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                to="/hotels/extras"
              >
                Extras
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                to="/hotels/reviews"
              >
                Reviews
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                to="/hotels/settigs"
              >
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HotelsHeader;
