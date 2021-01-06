import Header from "../../components/Header";
import HotelsHeader from "../../components/HotelsHeader";
import Check from "../../images/check_bold.svg";
import Close from "../../images/close_small.svg";
import "./styles.css";

function Hotels() {
  return (
    <>
      <Header />
      <HotelsHeader />
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Star</th>
                  <th scope="col">Owned By</th>
                  <th scope="col">Location</th>
                  <th scope="col">Gallery</th>
                  <th scope="col">Order</th>
                  <th scope="col">Discount</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <img
                      src="https://a0.muscache.com/im/pictures/04e8c888-45f4-4047-b1ba-21dceea9eeaa.jpg?im_w=1200"
                      alt="Sunset view from a window"
                      className="rounded"
                      height="50"
                    />
                  </td>
                  <td>Mark</td>
                  <td>3</td>
                  <td>Airbnb</td>
                  <td>Salvador-BA</td>
                  <td>
                    <a className="btn btn-outline-dark" href="/hotels">
                      Upload(3)
                    </a>
                  </td>
                  <td>
                    <input type="number" className="form-control input-sm" />
                  </td>
                  <td>
                    <input type="number" className="form-control input-sm" />
                  </td>
                  <td>
                    <img src={Check} alt="Check tick bold" />
                  </td>
                  <td>
                    <button className="btn btn-primary">world</button>
                    <button className="btn btn-warning mx-2">Edit</button>
                    <button className="btn btn-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    <img
                      src="https://a0.muscache.com/im/pictures/04e8c888-45f4-4047-b1ba-21dceea9eeaa.jpg?im_w=1200"
                      alt="Sunset view from a window"
                      className="rounded"
                      height="50"
                    />
                  </td>
                  <td>Mark</td>
                  <td>3</td>
                  <td>Airbnb</td>
                  <td>Salvador-BA</td>
                  <td>
                    <a className="btn btn-outline-dark" href="/hotels">
                      Upload(3)
                    </a>
                  </td>
                  <td>
                    <input type="number" className="form-control input-sm" />
                  </td>
                  <td>
                    <input type="number" className="form-control input-sm" />
                  </td>
                  <td>
                    <img src={Close} alt="Check tick bold" />
                  </td>
                  <td>
                    <button className="btn btn-primary">world</button>
                    <button className="btn btn-warning mx-2">Edit</button>
                    <button className="btn btn-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    <img
                      src="https://a0.muscache.com/im/pictures/04e8c888-45f4-4047-b1ba-21dceea9eeaa.jpg?im_w=1200"
                      alt="Sunset view from a window"
                      className="rounded"
                      height="50"
                    />
                  </td>
                  <td>Mark</td>
                  <td>3</td>
                  <td>Airbnb</td>
                  <td>Salvador-BA</td>
                  <td>
                    <a className="btn btn-outline-dark" href="/hotels">
                      Upload(3)
                    </a>
                  </td>
                  <td>
                    <input type="number" className="form-control input-sm" />
                  </td>
                  <td>
                    <input type="number" className="form-control input-sm" />
                  </td>
                  <td>
                    <img src={Check} alt="Check tick bold" />
                  </td>
                  <td>
                    <button className="btn btn-primary">world</button>
                    <button className="btn btn-warning mx-2">Edit</button>
                    <button className="btn btn-danger">Remove</button>
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

export default Hotels;
