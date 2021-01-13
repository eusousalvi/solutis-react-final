import { FiCheck } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HotelsTableRow({ index, hotel, handleDelete, selectAll }) {
  const [select, setSelect] = useState(selectAll);

  useEffect(() => {
    setSelect(selectAll);
  }, [selectAll]);

  const {
    id,
    image,
    name,
    location,
    star,
    order,
    owned_by,
    status,
    discount,
    // gallery,
  } = hotel;
  return (
    <tr>
      <th scope="row">
        <div className="form-check">
          <input
            onChange={() => {
              setSelect(!select);
            }}
            value={select}
            checked={select}
            type="checkbox"
            className="form-check-input"
          />
        </div>
      </th>
      <th scope="row">{index}</th>
      <td>
        <img
          src={image}
          alt="Sunset view from a window"
          className="rounded"
          height="40"
        />
      </td>
      <td>{name}</td>
      <td>{star}</td>
      <td>{owned_by}</td>
      <td>{location}</td>
      <td>
        <a className="btn btn-outline-dark" href="/hotels">
          Upload
        </a>
      </td>
      <td>
        <input
          type="number"
          className="form-control input-sm"
          defaultValue={order}
        />
      </td>
      <td>
        <input
          type="number"
          className="form-control input-sm"
          defaultValue={discount}
        />
      </td>
      <td>{status === true ? <FiCheck /> : <FiX />}</td>
      <td>
        <button className="btn btn-primary">
          <BiWorld />
        </button>
        <Link className="btn btn-warning" to={`/hotels/edit/${id}`}>
          <FiEdit />
        </Link>
        <button className="btn btn-danger" onClick={handleDelete}>
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
}

export default HotelsTableRow;
