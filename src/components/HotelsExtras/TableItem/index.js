import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FiEdit, FiX } from "react-icons/fi";
import "./styles.css";

function TableItem({ item, handleSingleDelete, isAllSelect, handleSelect }) {
  const { id, tableId, img, name, status, price } = item;
  const [isSelected, setIsSelected] = useState(false);

  function handleChange() {
    isSelected ? handleSelect(item, false) : handleSelect(item, true);
    setIsSelected(!isSelected);
  }

  useEffect(() => {
    setIsSelected(isAllSelect);
  }, [isAllSelect]);

  return (
    <>
      <tr>
        <td>
          <div className="form-check mb-0">
            <input
              className="form-check-input"
              style={{ width: "1.2rem", height: "1.2rem" }}
              type="checkbox"
              name={`option${id}`}
              id={`option${id}`}
              onChange={handleChange}
              checked={isSelected}
            />
          </div>
        </td>
        <td className="item-num">{tableId}</td>
        <td className="zoom-img">
          <img src={img} alt={name} />
        </td>
        <td>{name}</td>
        <td>{status === "true" ? "Sim" : "Não"}</td>
        <td>{price}</td>
        <td>
          <button
            type="button"
            className="btn btn-link mt-0"
            data-bs-toggle="modal"
            data-bs-target={`#extra${id}`}>
            Tradução
          </button>
        </td>
        <td className="modify-buttons">
          <div className="d-flex justify-content-end">
            <Link
              to={`/hotels/extras/${id}`}
              className="btn btn-info btn-sm mx-1">
              <BiSearch color="white" />
            </Link>
            <Link
              to={`/hotels/extras/edit/${id}`}
              className="btn btn-warning btn-sm mx-1">
              <FiEdit color="white" />
            </Link>
            <button
              type="button"
              className="btn btn-danger btn-sm mx-1 mt-0"
              onClick={() => handleSingleDelete(id)}>
              <FiX color="white" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default TableItem;
