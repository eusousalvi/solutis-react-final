import HotelsHeader from "../../components/HotelsHeader";
import Check from "../../images/check_bold.svg";
import { FiEdit, FiX, FiPlusCircle, FiFile, FiPrinter } from "react-icons/fi";
import "./style.css";

function Rooms() {
  return (
    <>
      <HotelsHeader />

      <div className="container ">
        <div className="row">
          <div className="col-md-12 mt-5">
            <div className="border border-secondary rounded d-flex justify-content-between mb-4 bg-white p-3 ">
              <button
                type="button"
                className="btn btn-success btn-outline-light"
              >
                ADD <FiPlusCircle />
              </button>
              <div>
                <button
                  type="button"
                  className="btn btn-light btn-outline-dark"
                  style={{ marginRight: 10 }}
                >
                  <FiPrinter /> PRINT
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-outline-dark"
                  style={{ marginRight: 10 }}
                >
                  <FiFile /> EXPORT INTO CSV
                </button>

                <button
                  type="button"
                  className="btn btn-danger btn-outline-light"
                >
                  <FiX /> DELETE SELECTED
                </button>
              </div>
            </div>
            <table class="table table-striped table-hover">
              <thead className="thead">
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
                    <button className="btn btn-link">Triple Rooms</button>
                  </td>
                  <td>Rendezvous Hotels</td>
                  <td>10</td>
                  <td>100</td>
                  <td>
                    <button className="btn btn-link">Prices</button>
                  </td>
                  <td>
                    <button className="btn btn-link">Availability</button>
                  </td>
                  <td>
                    <button className="btn btn-link">Upload(1)</button>
                  </td>

                  <td>
                    <div className="status-container">
                      <img src={Check} alt="Check tick bold" />

                      <button className="btn btn-warning mx-2">
                        <FiEdit />
                      </button>
                      <button className="btn btn-danger">
                        <FiX />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    <button className="btn btn-link">Junior Suites</button>
                  </td>
                  <td>Rendezvous Hotels</td>
                  <td>3</td>
                  <td>250</td>
                  <td>
                    <button className="btn btn-link">Prices</button>
                  </td>
                  <td>
                    <button className="btn btn-link">Availability</button>
                  </td>
                  <td>
                    <button className="btn btn-link">Upload(4)</button>
                  </td>

                  <td>
                    <div className="status-container">
                      <img src={Check} alt="Check tick bold" />

                      <button className="btn btn-warning mx-2">
                        <FiEdit />
                      </button>
                      <button className="btn btn-danger">
                        <FiX />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    <button className="btn btn-link">Superior Double</button>
                  </td>
                  <td>Rendezvous Hotels</td>
                  <td>3</td>
                  <td>150</td>
                  <td>
                    <button className="btn btn-link">Prices</button>
                  </td>
                  <td>
                    <button className="btn btn-link">Availability</button>
                  </td>
                  <td>
                    <button className="btn btn-link">Upload(4)</button>
                  </td>

                  <td>
                    <div className="status-container">
                      <img src={Check} alt="Check tick bold" />

                      <button className="btn btn-warning mx-2">
                        <FiEdit />
                      </button>
                      <button className="btn btn-danger">
                        <FiX />
                      </button>
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
