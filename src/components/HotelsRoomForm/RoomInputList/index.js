import RoomInputNumber from "./RoomInputNumber";
import { numberFormObject } from "../../../utils/RoomArrays/numberFormObject";
function RoomInputList({ handleForm, ...data }) {
  return (
    <>
      {Object.keys(numberFormObject).map((e) => (
        <RoomInputNumber
          key={numberFormObject[e].id}
          id={numberFormObject[e].id}
          placeholder={numberFormObject[e].placeholder}
          aria-label={numberFormObject[e].ariaLabel}
          required={numberFormObject[e].required}
          handleChange={(category, value) => handleForm(category, value)}
        />
      ))}
    </>
  );
}

export default RoomInputList;
