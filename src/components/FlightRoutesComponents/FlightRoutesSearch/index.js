import { useState } from "react";
import { useDispatch } from "react-redux";
import {routesFilter, clearRoutesFilter} from "../../../redux/actions/flightsRoutes";

export default function FlightRoutesSearch(props) {

  const [filter, setFilter] = useState();
  const [word, setWord] = useState();

  const dispatch = useDispatch();

  function submit(e) {
    e.preventDefault();
    dispatch(routesFilter({filter: filter, word: word}));
    props.setRefresh(props.refresh + 1);
  }

  function clearFilters(e) {
    e.preventDefault();
    setWord();
    dispatch(clearRoutesFilter());
    props.setRefresh(props.refresh + 1);
  }

  return (
    <form className={"d-flex mb-3"}>
      <select className="form-control mr-2" onChange={(e) => setFilter(e.target.value)}>
        <option value="status">Status</option>
        <option value="direction">Flight Mode</option>
        <option value="totalHours">Total Hours</option>
      </select>
      <input
        className="form-control mx-2"
        value={word}
        type="text"
        placeholder="Search by: "
        onChange={(e) => setWord(e.target.value)}
      />
      <button className={"btn btn-primary"} onClick={submit}>Search</button>
      <button className={"btn btn-warning mx-1"} onClick={clearFilters}>Clear</button>
    </form>
  );
}
