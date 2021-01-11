import RoomsTableRow from "../RoomsTableRow/index";

import "./style.css";

function RoomsTable({ rooms, handleDeleteRoom }) {
  return (
    <table className="table table-striped table-hover">
      <thead className="bg-light">
        <tr>
          <th scrop="col">
            <div className="form-check">
              <input
                type="checkbox"
                value=""
                id="selectAll"
                className="form-check-input"
              />
            </div>
          </th>
          <th scope="col">#</th>
          <th scope="col">Room Type</th>
          <th scope="col">Hotel</th>
          <th scope="col">Qty</th>
          <th scope="col">Price</th>
          <th scope="col">Prices</th>
          <th scope="col">Availability</th>
          <th scope="col">Gallery</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
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
