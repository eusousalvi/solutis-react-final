import { BiWorld } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function FlightRoutesRow(props) {

  function deleteRow() {
    axios
      .delete(`https://5ff83d6510778b0017042ff3.mockapi.io/routes/${props.flight.id}`)
      .then(() => props.refresh(1))
      .catch((erro) => console.log(erro));
  }

  return (
    <tr>
      <th scope="row">{props.flight.id}</th>
      <td className="text-center">{props.flight.from}</td>
      <td className="text-center">{props.flight.to}</td>
      <td className="text-center">{props.flight.status}</td>
      <td className="text-center">{props.flight.mode}</td>
      <td className="text-center">{props.flight.totalHours}</td>
      <td className="text-center">{props.flight.departureDate}</td>
      <td className="text-center">{props.flight.dateArrival}</td>
      <td className="text-center">{props.flight.timeDeparture}</td>
      <td className="text-center">{props.flight.timeArrival}</td>
      <td className="d-flex">
        <button className="btn btn-info mx-1">
          <Link className={"text-dark"} to={"/flights/routes/details"}>
            <BiWorld/>
          </Link>
        </button>
        <button className="btn btn-warning mx-1">
          <FiEdit/>
        </button>
        <button type={"button"} onClick={deleteRow} className="btn btn-danger mx-1">
          <AiOutlineDelete/>
        </button>
      </td>
    </tr>
  );
}

export default FlightRoutesRow;
