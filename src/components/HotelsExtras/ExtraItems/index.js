import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FiEdit, FiX } from "react-icons/fi";
import ExtraServices from "../../../services/extras";
import "./styles.css";

function ExtraItems({ item, setIsRemovingItem }) {
  const { id, tableId, img, name, status, price } = item;

  async function handleDelete() {
    if (window.confirm("Realmente deseja deletar esse item ?")) {
      try {
        setIsRemovingItem(true);
        const res = await ExtraServices.deleteExtra(id);
        if (res.status || res.status === 200)
          window.alert("Item excluido com sucesso");
      } finally {
        setIsRemovingItem(false);
      }
    }
  }

  return (
    <>
      <tr>
        <td>
          <div className="form-check mb-0">
            <input className="form-check-input" type="checkbox" name="" id="" />
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
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-link">
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
              className="btn btn-danger btn-sm mx-1"
              onClick={handleDelete}>
              <FiX color="white" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default ExtraItems;
