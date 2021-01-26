import {Link} from "react-router-dom";

function CreateFlightRoutesButton() {
    return(
        <Link className={"btn btn-success btn-lg mt-4"} to={"/flights/routes/add"}>ADD</Link>
    );
}

export default CreateFlightRoutesButton;