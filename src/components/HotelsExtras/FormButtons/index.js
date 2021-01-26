import { Link } from "react-router-dom";

function FormButtons({ setSubmitButton }) {
  return (
    <>
      <button
        type="submit"
        onClick={() => setSubmitButton("saveAndReturn")}
        className="btn btn-primary me-1 mt-0">
        {"Save & Return"}
      </button>
      <button
        type="submit"
        onClick={() => setSubmitButton("saveAndNew")}
        className="btn btn-outline-secondary me-1 mt-0">
        {"Save & New"}
      </button>
      <Link className="btn btn-warning me-1 text-white" to="/hotels/extras">
        Return
      </Link>
    </>
  );
}

export default FormButtons;
