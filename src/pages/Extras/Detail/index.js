/*React and Router */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/*Icon and Components */
import TopOptionsBar from "../../../components/HotelsExtras/TopOptionsBar";
import HotelsHeader from "../../../components/HotelsHeader";
import Card from "../../../components/HotelsRoomList/RoomsCard";
/*Api and Styles*/
import Api from "../../../services/extras";

function Detail({ match, history }) {
  const [item, setItem] = useState("");
  const { id } = match.params;

  useEffect(() => {
    if (id) {
      async function getById() {
        const res = await Api.getById(id);
        res ? setItem(res) : history.push("/hotels/extras");
      }

      getById();
    }
  }, [id, history]);

  const body = (
    <div className="row mx-1">
      <TopOptionsBar>
        <Link className="btn btn-warning me-1 text-white" to="/hotels/extras">
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
          placeholder={`Name*:  ${item.name}`}
          aria-label={`Name*:  ${item.name}`}
          disabled
        />
        <input
          className="form-control my-3"
          type="text"
          placeholder={`Status*:  ${item.status ? "Yes" : "No"}`}
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
  );

  return (
    <>
      <HotelsHeader />
      <div className="container mt-5">
        <Card title="EXTRAS MANAGEMENT" content={body} />
      </div>
    </>
  );
}

export default Detail;
