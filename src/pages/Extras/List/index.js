import { Link } from "react-router-dom";
import ListExtras from "../../../components/HotelsExtras/ExtrasList";
import HotelsHeader from "../../../components/HotelsHeader";
import { FiX, FiPlus } from "react-icons/fi";

function Extras() {
  return (
    <>
      <HotelsHeader />
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <div className="border border-muted rounded d-flex justify-content-between mb-4 bg-light p-3 ">
              <Link className="btn btn-success" to="/hotels/extras/create">
                <FiPlus /> Add
              </Link>
              <a className="btn btn-danger" href="/hotels/extras">
                <FiX /> Deletar Selecionados
              </a>
            </div>
            <ListExtras />
          </div>
        </div>
      </div>
    </>
  );
}

export default Extras;
