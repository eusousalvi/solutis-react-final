import React from "react";

function Button({ className, value, onClick, onChange, children, disabled }) {
  return (
    <button
      className={className}
      value={value}
      onClick={onClick}
      onChange={onChange}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
