import HotelsHeader from "../../components/HotelsHeader";
import Check from "../../images/check_bold.svg";
import Close from "../../images/close_small.svg";
function Rooms() {
  return (
    <>
      <HotelsHeader />

      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <table class="table table-striped table-hover">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Room Type</th>
                  <th scope="col">Hotel</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Price</th>
                  <th scope="col">Prices</th>
                  <th scope="col">Availability</th>
                  <th scope="col">Gallery</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <button
                      className="btn btn-link"
                      style={{
                        background: "RGBA(104,173,255,0.23)",
                        color: "#1e249a",
                        textDecoration: "none",
                      }}
                    >
                      Triple Rooms
                    </button>
                  </td>
                  <td>Rendezvous Hotels</td>
                  <td>10</td>
                  <td>100</td>
                  <td>
                    <button
                      className="btn btn-link"
                      style={{
                        background: "RGBA(104,173,255,0.23)",
                        color: "#1e249a",
                        textDecoration: "none",
                      }}
                    >
                      Prices
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-link"
                      style={{
                        background: "RGBA(104,173,255,0.23)",
                        color: "#1e249a",
                        textDecoration: "none",
                      }}
                    >
                      Availability
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-link"
                      style={{
                        background: "RGBA(104,173,255,0.23)",
                        color: "#1e249a",
                        textDecoration: "none",
                      }}
                    >
                      Upload(1)
                    </button>
                  </td>

                  <td>
                    <div style={{ display: "flex" }}>
                      <img src={Check} alt="Check tick bold" />

                      <button className="btn btn-warning mx-2">Edit</button>
                      <button className="btn btn-danger">Remove</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    <button
                      className="btn btn-link"
                      style={{
                        background: "RGBA(104,173,255,0.23)",
                        color: "#1e249a",
                        textDecoration: "none",
                      }}
                    >
                      Junior Suites
                    </button>
                  </td>
                  <td>Rendezvous Hotels</td>
                  <td>3</td>
                  <td>250</td>
                  <td>
                    <button
                      className="btn btn-link"
                      style={{
                        background: "RGBA(104,173,255,0.23)",
                        color: "#1e249a",
                        textDecoration: "none",
                      }}
                    >
                      Prices
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-link"
                      style={{
                        background: "RGBA(104,173,255,0.23)",
                        color: "#1e249a",
                        textDecoration: "none",
                      }}
                    >
                      Availability
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-link"
                      style={{
                        background: "RGBA(104,173,255,0.23)",
                        color: "#1e249a",
                        textDecoration: "none",
                      }}
                    >
                      Upload(4)
                    </button>
                  </td>

                  <td>
                    <div style={{ display: "flex" }}>
                      <img src={Check} alt="Check tick bold" />

                      <button className="btn btn-warning mx-2">Edit</button>
                      <button className="btn btn-danger">Remove</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    <button
                      className="btn btn-link"
                      style={{
                        background: "RGBA(104,173,255,0.23)",
                        color: "#1e249a",
                        textDecoration: "none",
                      }}
                    >
                      Superior Double
                    </button>
                  </td>
                  <td>Rendezvous Hotels</td>
                  <td>3</td>
                  <td>150</td>
                  <td>
                    <button
                      className="btn btn-link"
                      style={{
                        background: "RGBA(104,173,255,0.23)",
                        color: "#1e249a",
                        textDecoration: "none",
                      }}
                    >
                      Prices
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-link"
                      style={{
                        background: "RGBA(104,173,255,0.23)",
                        color: "#1e249a",
                        textDecoration: "none",
                      }}
                    >
                      Availability
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-link"
                      style={{
                        background: "RGBA(104,173,255,0.23)",
                        color: "#1e249a",
                        textDecoration: "none",
                      }}
                    >
                      Upload(4)
                    </button>
                  </td>

                  <td>
                    <div style={{ display: "flex" }}>
                      <img src={Check} alt="Check tick bold" />

                      <button className="btn btn-warning mx-2">Edit</button>
                      <button className="btn btn-danger">Remove</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rooms;
