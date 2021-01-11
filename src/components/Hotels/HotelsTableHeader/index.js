function HotelsTableHeader({ columnTitle, selectAll, setSelectAll }) {
  return (
    <thead className="thead-dark">
      <tr>
        <th scrop="col">
          <div className="form-check">
            <input
              onChange={() => {
                setSelectAll(!selectAll);
              }}
              type="checkbox"
              value={selectAll}
              id="selectAll"
              className="form-check-input"
            />
          </div>
        </th>
        {columnTitle.map((title, index) => {
          return (
            <th key={index} scope="col">
              {title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default HotelsTableHeader;
