import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { update } from "../../../redux/actions/formFlightRoutes";

export default function DescriptionAndBagageForm() {
  const { description } = useSelector((state) => state.formFlightRoutesReducer);
  const dispatch = useDispatch();

  function handleTextareaChange(e) {
    dispatch(update("description", e.target.value));
  }

  return (
    <div id="description-bagage-form">
      <div className="card">
        <div className="card-header">
          <h3>Description and Bagage Info</h3>
        </div>
        <div className="card-body">
          <textarea
            className="form-control"
            id="description-textarea"
            name="description"
            rows="8"
            value={description}
            onChange={handleTextareaChange}
            required
          />
        </div>
      </div>
    </div>
  );
}
