import { BiWorld } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import routes from "../../../services/routes";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectItem, deselectItem } from "../../../redux/actions/flightsRoutes";

function FlightRoutesRow(props) {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  function deleteRow() {
    routes
      .deleteRoute(props.flight.id)
      .then(() => props.refresh(1))
      .catch((erro) => console.log(erro));
  }

  function findSize() {
    const size = props.flight.route.length - 1;
    return size;
  }

  function setChecked(params) {
    if (!params) {
      dispatch(selectItem(props.flight.id));
      setIsChecked(true);
    } else {
      dispatch(deselectItem(props.flight.id));
      setIsChecked(false);
    }
  }

  return (
    <tr>
      <td>
        <input
          type={"checkbox"}
          onChange={() => {
            setChecked(isChecked);
          }}
        ></input>
      </td>
      <th scope="row">{props.flight.id}</th>
      <td className="text-center">{props.flight.route[0].city}</td>
      <td className="text-center">{props.flight.route[findSize()].city}</td>
      <td className="text-center">{props.flight.status}</td>
      <td className="text-center">{props.flight.direction}</td>
      <td className="text-center">{props.flight.totalHours}</td>
      <td className="text-center">{props.flight.route[0].date}</td>
      <td className="text-center">{props.flight.route[findSize()].date}</td>
      <td className="text-center">{props.flight.route[0].time}</td>
      <td className="text-center">{props.flight.route[findSize()].checkout}</td>
      <td className="d-flex justify-content-center">
        <button className="btn btn-info mx-1">
          <Link
            className={"text-dark"}
            to={`/flights/routes/details/${props.flight.id}`}
          >
            <BiWorld />
          </Link>
        </button>
        <button className="btn btn-warning mx-1">
          <Link
            className={"text-dark"}
            to={`/flights/routes/manage/${props.flight.id}`}
          >
            <FiEdit />
          </Link>
        </button>
        <button
          type={"button"}
          onClick={deleteRow}
          className="btn btn-danger mx-1"
        >
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
}

export default FlightRoutesRow;
