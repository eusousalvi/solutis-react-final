import React from "react";

export default function DescriptionAndBagageForm({ description }) {
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
            defaultValue={description}
            required
          />
        </div>
      </div>
    </div>
  );
}
