import { GoArrowDown, GoArrowUp } from "react-icons/go";
import "./style.css";

function RoomsTableHeader({ fields, order, handleChangeOrder }) {
  return (
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
        {fields.map((field, index) => {
          return (
            <th
              className=" rooms-table-column-title"
              scope="col"
              key={index}
              onClick={() => {
                handleChangeOrder(field);
              }}
            >
              {order.field === field && order.active && (
                <>{order.order ? <GoArrowDown /> : <GoArrowUp />}</>
              )}
              {field}
            </th>
          );
        })}

        <th scrop="col">Status</th>
      </tr>
    </thead>
  );
}

export default RoomsTableHeader;
