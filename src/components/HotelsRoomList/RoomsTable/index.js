import RoomsTableRow from "../RoomsTableRow/index";
import RoomsTableHeader from "../RoomsTableHeader/index";

import "./style.css";

function RoomsTable({
  rooms,
  handleDeleteRoom,
  fields,
  order,
  handleChangeOrder,
}) {
  return (
    <table className="table table-striped table-hover">
      <RoomsTableHeader
        fields={fields}
        order={order}
        handleChangeOrder={handleChangeOrder}
      />
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
