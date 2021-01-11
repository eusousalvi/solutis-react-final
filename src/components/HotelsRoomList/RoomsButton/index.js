import { useState, useEffect } from "react";
import { FiPlusCircle, FiFile, FiPrinter, FiEdit } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

import "./style.css";

function RoomsButton({ variant, title, ...rest }) {
  const model = {
    className: "",
    icon: null,
    iconPosition: "",
  };

  const [typeData, setTypeData] = useState(model);

  useEffect(() => {
    switch (variant) {
      case "add":
        setTypeData({
          className: "btn btn-success btn-outline-light",
          icon: <FiPlusCircle />,
          iconPosition: "right",
        });
        break;

      case "print":
        setTypeData({
          className: "btn btn-light btn-outline-dark",
          icon: <FiPrinter />,
          iconPosition: "left",
        });
        break;

      case "export":
        setTypeData({
          className: "btn btn-light btn-outline-dark",
          icon: <FiFile />,
          iconPosition: "left",
        });
        break;
      case "delete":
        setTypeData({
          className: "btn btn-danger btn-outline-light",
          icon: <FaTimes />,
          iconPosition: "left",
        });
        break;

      case "edit":
        setTypeData({
          className: "btn btn-warning mx-2",
          icon: <FiEdit />,
          iconPosition: "",
        });
        break;

      case "delete2":
        setTypeData({
          className: "btn btn-danger",
          icon: <FaTimes />,
          iconPosition: "",
        });
        break;

      case "link":
        setTypeData({
          className: "btn btn-link",
          icon: "",
          iconPositon: "",
        });

        break;

      default:
        setTypeData({
          className: "btn ",
          icon: null,
          iconPosition: "",
        });
    }
  }, [variant]);

  return (
    <button className={typeData.className} type="button" {...rest}>
      {typeData.iconPosition === "left" ? (
        <>
          {typeData.icon}
          {title}
        </>
      ) : (
        <>
          {title}
          {typeData.icon}
        </>
      )}
    </button>
  );
}

export default RoomsButton;
