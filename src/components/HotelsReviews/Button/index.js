import React from "react";

function Button({ className, value, onClick, onChange, children, disabled }) {
  return (
    <button
      className={
        className ||
        "btn btn-lg btn-danger d-flex align-items-center justify-content-between"
      }
      value={value}
      onClick={onClick}
      onChange={onChange}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

export default Button;
