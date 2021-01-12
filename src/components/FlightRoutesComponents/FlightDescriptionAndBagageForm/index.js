import React from "react";

export default function DescriptionAndBagageForm() {
  const { description } = [
    "TODO: CREATE STORE AND CATCH DATA WITH USESELECTOR",
  ];

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
            onChange={() => {
              console.log("DESCRIPTION AND BAGAGE - SEND DATA TO STORE");
            }}
            required
          />
        </div>
      </div>
    </div>
  );
}
