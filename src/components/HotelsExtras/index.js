import { BiSearch } from 'react-icons/bi';
import { FiEdit, FiX } from 'react-icons/fi';
import axios from 'axios';
import './styles.css';

function HotelExtras({ item, setIsRemovingItem }) {
  const { id, tableId, img, name, status, price } = item;

  function handleDelete() {
    if (window.confirm('Realmente deseja deletar esse item ?')) {
      setIsRemovingItem(true);
      axios
        .delete(`https://5ff71a40e7164b0017e1a256.mockapi.io/extras/${id}`)
        .finally(() => setIsRemovingItem(false));
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
        <td>{status ? 'Sim' : 'Não'}</td>
        <td>{price}</td>
        <td>
          <button type="button" className="btn btn-link">
            Tradução
          </button>
        </td>
        <td className="modify-buttons">
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-info btn-sm mx-1">
              <BiSearch color="white" />
            </button>
            <button type="button" className="btn btn-warning btn-sm mx-1">
              <FiEdit color="white" />
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm mx-1"
              onClick={handleDelete}
            >
              <FiX color="white" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default HotelExtras;
