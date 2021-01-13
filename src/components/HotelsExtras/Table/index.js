import Extras from "../TableItem";
import "./styles.css";

function Table({
  extras,
  handleSingleDelete,
  isAllSelect,
  handleChangeSelectAll,
  handleSelect,
}) {
  return (
    <>
      <table className="table table-striped table-hover">
        <thead className="thead-extras">
          <tr>
            <th scope="col">
              <div className="form-check mb-0">
                <input
                  className="form-check-input"
                  style={{ width: "1.2rem", height: "1.2rem" }}
                  type="checkbox"
                  name="selectAll"
                  id="selectAll"
                  onChange={handleChangeSelectAll}
                  checked={isAllSelect}
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
              handleSingleDelete={handleSingleDelete}
              isAllSelect={isAllSelect}
              handleSelect={handleSelect}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
