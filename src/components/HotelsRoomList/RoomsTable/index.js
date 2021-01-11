import RoomsTableRow from "../RoomsTableRow/index";
import RoomsTableHeader from "../RoomsTableHeader/index";

import "./style.css";

function RoomsTable({ rooms, handleDeleteRoom, fields }) {
  return (
    <table className="table table-striped table-hover">
      <RoomsTableHeader fields={fields} />
      <tbody>
        {rooms.map((room, index) => (
          <RoomsTableRow
            room={room}
            index={index + 1}
            key={room.id}
            onDelete={() => handleDeleteRoom(room.id)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default RoomsTable;
