import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import roomsActions from "../../../redux/actions/rooms";
import { useDispatch } from "react-redux";

import RoomsButton from "../RoomsButton/index";
import "./style.css";

function RoomsTableRow({ room, index, onDelete, selectAll }) {
  const [selected, setSelected] = useState(selectAll);
  const dispatch = useDispatch();

  useEffect(() => {
    setSelected(selectAll);

    if (selectAll) {
      dispatch(roomsActions.addRoomsSelecteds(room.id));
    } else {
      dispatch(roomsActions.removeRoomsSelecteds(room.id));
    }
  }, [selectAll, room, dispatch]);

  function handleChange() {
    if (selected) {
      console.log("REMOVE");
      dispatch(roomsActions.removeRoomsSelecteds(room.id));
    } else {
      console.log("ADICIONA");
      dispatch(roomsActions.addRoomsSelecteds(room.id));
    }

    setSelected(!selected);
  }
  return (
    <tr>
      <th scope="row">
        <div className="form-check">
          <input
            type="checkbox"
            value={selected}
            checked={selected}
            onChange={handleChange}
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
