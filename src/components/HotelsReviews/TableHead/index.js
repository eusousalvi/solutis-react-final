import React from "react";

function TableHead({ className, children }) {
  return <thead className={className}>{children}</thead>;
}

export default TableHead;
