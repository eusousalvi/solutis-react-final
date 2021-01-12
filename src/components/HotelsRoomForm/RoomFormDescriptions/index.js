import { languagesList } from "../../../utils/RoomArrays/languagesList";
import RoomFormLanguage from "./RoomFormLanguage";

function RoomFormDescriptions({ handleChange: handleLanguage, ...data }) {
  return (
    <>
      {languagesList.map((e) => (
        <RoomFormLanguage
          key={e}
          language={e}
          className="description-field"
          handleChange={(category, value) => handleLanguage(category, value)}
        />
      ))}
    </>
  );
}

export default RoomFormDescriptions;
