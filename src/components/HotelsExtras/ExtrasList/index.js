import { useState, useEffect } from "react";
import Extras from "../ExtraItems";
import ExtraServices from "../../../services/extras";
import "./styles.css";

function ExtrasList() {
  const [extras, setExtras] = useState([]);
  const [isRemovingItem, setIsRemovingItem] = useState(false);

  async function fetchData() {
    try {
      const res = await ExtraServices.getExtras();
      if (res.status || res.status === 200) setExtras(res.data);
    } catch (error) {
      window.alert("Não foi possível resgatar os itens");
      console.log(error.message);
    }
  }

  useEffect(() => {
    if (!isRemovingItem) fetchData();
  }, [isRemovingItem]);

  return (
    <>
      <table className="table table-striped table-hover">
        <thead className="thead">
          <tr>
            <th scope="col">
              <div className="form-check mb-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name=""
                  id=""
                />
              </div>
            </th>
            <th className="item-num" scope="col">
              #
            </th>
            <th scope="col">Thumb</th>
            <th scope="col">Nome</th>
            <th scope="col">Status</th>
            <th scope="col">Preço</th>
            <th scope="col">Tradução</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {extras.map((item, idx) => (
            <Extras
              key={item.id}
              item={{ ...item, tableId: idx + 1 }}
              setIsRemovingItem={setIsRemovingItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ExtrasList;
