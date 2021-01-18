import React from "react";
import TableBody from "../TableBody";
import TableHead from "../TableHead";

const Table = ({ className }) => {

  const tableHeaders = [
    "#",
    "Hotel",
    "Nome",
    "E-mail",
    "Data",
    "Média",
    "Status",
  ];

  return (
    <div className="table-responsive">
      <table className={className || "table table-striped table-hover"}>
        <TableHead headers={tableHeaders} />
        <TableBody />
      </table>
    </div>
  );
};

export default Table;
