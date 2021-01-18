import { roomsList } from "../../../utils/RoomArrays/roomsList";

function RoomType({ handleForm, ...data }) {
  return (
    <select
      className="form-select"
      aria-label="RoomType"
      id="type"
      onChange={(e) => handleForm(e.target.id, e.target.value)}
    >
      {roomsList.map((e) => (
        <option key={e} value={e}>
          {e}
        </option>
      ))}
    </select>
  );
}

export default RoomType;
