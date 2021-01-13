import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExtraServices from "../../../services/extras";
import TopOptionsBar from "../../../components/HotelsExtras/TopOptionsBar";
import HotelsHeader from "../../../components/HotelsHeader";

function Detail(props) {
  const [item, setItem] = useState("");
  const { id } = props.match.params;

  useEffect(() => {
    if (id) {
      async function getById() {
        try {
          const res = await ExtraServices.getById(id);
          if (res.status || res.status === 200) setItem(res.data);
        } catch (error) {
          window.alert("Não foi possível localizar o item");
          props.history.push("/hotels/extras");
        }
      }

      getById();
    }
  }, []);

  return (
    <>
      <HotelsHeader />

      <div className="container mt-5">
        <div className="row">
          <TopOptionsBar>
            <Link
              className="btn btn-warning me-1 text-white"
              to="/hotels/extras">
              Return
            </Link>
          </TopOptionsBar>
          <div className="col-md-6">
            <img
              src={item.img}
              alt={item.name}
              className="border border-muted p-1"
              style={{ maxWidth: "500px", maxHeight: "375px" }}
            />
          </div>
          <div className="col-md-6">
            <input
              className="form-control my-3"
              type="text"
              placeholder={`Nome*:  ${item.name}`}
              aria-label={`Nome*:  ${item.name}`}
              disabled
            />
            <input
              className="form-control my-3"
              type="text"
              placeholder={`Status*:  ${item.status}`}
              aria-label={`Status*:  ${item.status}`}
              disabled
            />
            <input
              className="form-control my-3"
              type="text"
              placeholder={`Price*:  ${item.price}`}
              aria-label={`Price*:  ${item.price}`}
              disabled
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
