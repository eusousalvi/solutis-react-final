import Header from "../../components/Header";
import HotelsHeader from "../../components/HotelsHeader";
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
                  <th scope="col">Name</th>
                  <th scope="col">Star</th>
                  <th scope="col">Owned By</th>
                  <th scope="col">Location</th>
                  <th scope="col">Gallery</th>
                  <th scope="col">Order</th>
                  <th scope="col">Discount</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <img
                      src="https://a0.muscache.com/im/pictures/04e8c888-45f4-4047-b1ba-21dceea9eeaa.jpg?im_w=1200"
                      alt="Sunset view from a window"
                      height="50"
                    />
                  </td>
                  <td>Mark</td>
                  <td>3</td>
                  <td>Airbnb</td>
                  <td>Salvador-BA</td>
                  <td>
                    <a href="#">Upload(3)</a>
                  </td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>V</td>
                  <td>
                    <button>world</button>
                    <button>Edit</button>
                    <button>Remove</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    <img
                      src="https://a0.muscache.com/im/pictures/04e8c888-45f4-4047-b1ba-21dceea9eeaa.jpg?im_w=1200"
                      alt="Sunset view from a window"
                      height="50"
                    />
                  </td>
                  <td>Mark</td>
                  <td>3</td>
                  <td>Airbnb</td>
                  <td>Salvador-BA</td>
                  <td>
                    <a href="#">Upload(3)</a>
                  </td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>V</td>
                  <td>
                    <button>world</button>
                    <button>Edit</button>
                    <button>Remove</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    <img
                      src="https://a0.muscache.com/im/pictures/04e8c888-45f4-4047-b1ba-21dceea9eeaa.jpg?im_w=1200"
                      alt="Sunset view from a window"
                      height="50"
                    />
                  </td>
                  <td>Mark</td>
                  <td>3</td>
                  <td>Airbnb</td>
                  <td>Salvador-BA</td>
                  <td>
                    <a href="#">Upload(3)</a>
                  </td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>V</td>
                  <td>
                    <button>world</button>
                    <button>Edit</button>
                    <button>Remove</button>
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
