import {Link} from "react-router-dom";

function ReturnFlightRoutesButton() {
  return (
    <Link className={"text-dark btn btn-danger"} to={"/flights/routes/"}>
      Return
    </Link>
  );
}

export default ReturnFlightRoutesButton;
