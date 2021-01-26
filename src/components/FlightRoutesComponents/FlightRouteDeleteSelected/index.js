import { useSelector, useDispatch } from "react-redux";
import routes from "../../../services/routes";
import {clearSelectItem} from "../../../redux/actions/flightsRoutes"

export default function FlightRouteDeleteSelected(props) {
  
  const dispatch = useDispatch();

  const selectedItems = useSelector(
    (state) => state.flightsRoutes.selectedItems
  );

  function deleteAll() {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove these items?"
    );

    if (confirmDelete) {
      selectedItems.forEach((id) => {
        routes
        .deleteRoute(id)
        .catch((erro) => console.log(erro))
        .finally(() => {props.setRefresh(props.refresh + 1);});
      });
    }
    dispatch(clearSelectItem());

  }

  return (
    <button onClick={deleteAll} className={"btn btn-danger h-100 mt-4"}>
      Delete Selected
    </button>
  );
}
