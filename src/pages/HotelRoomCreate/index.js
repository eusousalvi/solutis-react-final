import { useHistory } from "react-router-dom";
import HotelsRoomForm from "../../components/HotelsRoomForm";
import RoomCreateService from "../../services/roomCreate";
import "./styles.css";

function HotelRoomCreate() {
  const history = useHistory();

  function handleSubmit(e, formData) {
    e.preventDefault();
    console.log(formData);
    RoomCreateService.addRoom(formData)
      .then((response) => {
        console.log(response.data);
        history.push("/hotels/rooms");
      })
      .catch((error) => console.error(error));
  }
  return <HotelsRoomForm onSubmit={handleSubmit} />;
}
export default HotelRoomCreate;
