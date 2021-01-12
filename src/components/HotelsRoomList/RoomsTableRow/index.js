import RoomsButton from "../RoomsButton/index";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import "./style.css";

function RoomsTableRow({ room, index, onDelete }) {
  return (
    <tr>
      <th scope="row">
        <div className="form-check">
          <input
            type="checkbox"
            value=""
            id="selectRoom"
            className="form-check-input"
          />
        </div>
      </th>
      <th scope="row">{index}</th>
      <td>
        <RoomsButton variant="link" title={room.roomType} />
      </td>
      <td>{room.hotel}</td>
      <td>{room.qty}</td>
      <td>{room.price}</td>
      <td>
        <RoomsButton variant="link" title="Prices" />
      </td>
      <td>
        <Link
          className="btn btn-link"
          to={`/hotels/rooms/availability/${room.id}`}
        >
          Availability
        </Link>
      </td>
      <td>
        <RoomsButton variant="link" title={`Upload(${room.uploads})`} />
      </td>

      <td>
        <div className="status-container">
          <FaCheck />

          <RoomsButton variant="edit" />
          <RoomsButton variant="delete2" onClick={onDelete} />
        </div>
      </td>
    </tr>
  );
}

export default RoomsTableRow;
