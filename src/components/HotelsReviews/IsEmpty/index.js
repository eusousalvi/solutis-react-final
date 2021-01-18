import React from "react";
import isEmpty from "../Assets/isEmpty.svg";
import "./styles.css";

const IsEmpty = ({ className, subtitle }) => {
  return (
    <figure className="container figure">
      <img
        src={isEmpty}
        alt="No data found"
        className={className || "mx-auto d-block img-fluid img"}
        loading="lazy"
      />
      <figcaption className="figcaption">Oops... Parece que nenhum dado foi encontrado.</figcaption>
    </figure>
  );
};

export default IsEmpty;
