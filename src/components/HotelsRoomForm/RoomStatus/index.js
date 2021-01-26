function RoomStatus({ handleForm, ...data }) {
  return (
    <div>
      <label htmlFor="Status">Status</label>
      <select
        className="form-select"
        aria-label="Status"
        id="status"
        onChange={(e) => handleForm(e.target.id, e.target.value)}
      >
        <option value="enabled">Enabled</option>
        <option value="disabled">Disabled</option>
      </select>
    </div>
  );
}

export default RoomStatus;
