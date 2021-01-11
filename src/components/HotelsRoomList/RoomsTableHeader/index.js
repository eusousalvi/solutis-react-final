function RoomsTableHeader({ fields }) {
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
        {fields.map((field, index) => {
          return (
            <th scope="col" key={index}>
              {field}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default RoomsTableHeader;
