import { FiX } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

function HotelsTopBar() {
  return (
    <div className="border border-secondary rounded d-flex justify-content-between mb-4 bg-white p-3 ">
      <Link className="btn btn-success" to="/hotels/create">
        <FiPlus /> Add
      </Link>
      <a className="btn btn-danger" href="/hotels">
        <FiX /> Delete Selected
      </a>
    </div>
  );
}

export default HotelsTopBar;
