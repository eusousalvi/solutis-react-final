import React from "react";

function TableHeader({
  className,
  children,
  value = "#",
  scope,
  colSpan,
  id,
  onClick,
}) {
  return (
    <th
      className={className || "menu-filter"}
      scope={scope || "col"}
      colSpan={colSpan}
      id={id}
      onClick={onClick}
      value={value}
    >
      {children}
    </th>
  );
}

export default TableHeader;
