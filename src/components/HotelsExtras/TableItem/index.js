/*React and Redux */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import extrasAction from "../../../redux/actions/extras";
/*Icon and Components */
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FiEdit, FiX } from "react-icons/fi";
import "./styles.css";
/*Api and Styles*/
import Api from "../../../services/extras";

function TableItem({ item }) {
  const dispatch = useDispatch();
  const { id, tableId, img, name, status, price } = item;
  const [isSelected, setIsSelected] = useState(false);
  const { isAllSelected, selecteds } = useSelector(state => state.extraReducer);

  function handleSelect(id, option) {
    if (option) {
      const isSelected = selecteds.indexOf(id);
      if (isSelected === -1) dispatch(extrasAction.setSelecteds(id));
    } else {
      dispatch(extrasAction.removeSelected(id));
    }
  }

  async function handleSingleDelete(id) {
    if (window.confirm("Do you really want to delete this item ?")) {
      const res = await Api.deleteExtra(id, dispatch);
      res && window.alert("Item removed with success");
    }
  }
  function handleChange() {
    isSelected ? handleSelect(id, false) : handleSelect(id, true);
    setIsSelected(!isSelected);
  }

  useEffect(() => {
    setIsSelected(isAllSelected);
  }, [isAllSelected]);

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
        <td>{status === "true" ? "Yes" : "No"}</td>
        <td>{price}</td>
        <td>
          <button
            type="button"
            className="btn btn-link mt-0"
            data-bs-toggle="modal"
            data-bs-target={`#extra${id}`}>
            Translate
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
