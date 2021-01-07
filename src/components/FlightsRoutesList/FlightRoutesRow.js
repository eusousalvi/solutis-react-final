import { BiWorld } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function FlightRoutesRow(props) {

  return (
    <tr>
      <th scope="row">{props.flight.id}</th>
      <td className="text-center">{props.flight.origem}</td>
      <td className="text-center">{props.flight.destino}</td>
      <td className="text-center">{props.flight.status}</td>
      <td className="text-center">{props.flight.modo}</td>
      <td className="text-center">{props.flight.horas}</td>
      <td className="text-center">{props.flight.dataPartida}</td>
      <td className="text-center">{props.flight.dataChegada}</td>
      <td className="text-center">{props.flight.horaPartida}</td>
      <td className="text-center">{props.flight.horaChegada}</td>
      <td className="d-flex">
        <button className="btn btn-info mx-1">
          <Link className={"text-dark"} to={"/flights/routes/visualization"}>
            <BiWorld/>
          </Link>
        </button>
        <button className="btn btn-warning mx-1">
          <FiEdit/>
        </button>
        <button className="btn btn-danger mx-1">
          <AiOutlineDelete/>
        </button>
      </td>
    </tr>
  );
}

export default FlightRoutesRow;
