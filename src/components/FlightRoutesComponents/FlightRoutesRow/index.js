import { BiWorld } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function FlightRoutesRow(props) {
  function deleteRow() {
    axios
      .delete(
        `https://5ff83d6510778b0017042ff3.mockapi.io/routes/${props.flight.id}`
      )
      .then(() => props.refresh(1))
      .catch((erro) => console.log(erro));
  }

  function findSize() {
    const size = props.flight.route.length - 1;
    return size;
  }

  return (
    <tr>
      <th scope="row">{props.flight.id}</th>
      <td className="text-center">{props.flight.route[0].airport}</td>
      <td className="text-center">{props.flight.route[findSize()].airport}</td>
      <td className="text-center">{props.flight.status}</td>
      <td className="text-center">{props.flight.direction}</td>
      <td className="text-center">{props.flight.totalHours}</td>
      <td className="text-center">{props.flight.route[0].date}</td>
      <td className="text-center">{props.flight.route[findSize()].date}</td>
      <td className="text-center">{props.flight.route[0].time}</td>
      <td className="text-center">{props.flight.route[findSize()].checkout}</td>
      <td className="d-flex">
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
