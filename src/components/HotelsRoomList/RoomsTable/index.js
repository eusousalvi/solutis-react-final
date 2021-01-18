import { useState } from "react";

import RoomsTableRow from "../RoomsTableRow/index";
import RoomsTableHeader from "../RoomsTableHeader/index";

import "./style.css";

function RoomsTable({
  rooms,
  handleDeleteRoom,
  fields,
  order,
  handleChangeOrder,
  handleSendSelectData,
  handleRemoveSelectData,
}) {
  const [selectAll, setSelectAll] = useState(false);

  function toggleSelectAll() {
    setSelectAll(!selectAll);
  }

  return (
    <table className="table table-striped table-hover room-container">
      <RoomsTableHeader
        fields={fields}
        order={order}
        handleChangeOrder={handleChangeOrder}
        selectAll={selectAll}
        toggleSelectAll={toggleSelectAll}
      />
      <tbody>
        {rooms.map((room, index) => (
          <RoomsTableRow
            room={room}
            index={index + 1}
            key={room.id}
            onDelete={() => handleDeleteRoom(room.id)}
            selectAll={selectAll}
            handleSendSelectData={() => {
              handleSendSelectData(room.id);
            }}
            handleRemoveSelectData={() => {
              handleRemoveSelectData(room.id);
            }}
          />
        ))}
      </tbody>
    </table>
  );
}

export default RoomsTable;
