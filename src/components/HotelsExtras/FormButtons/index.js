import { Link } from "react-router-dom";

function FormButtons({ setSubmitButton }) {
  return (
    <div className="border border-muted rounded mb-4 bg-light p-3 ">
      <button
        type="submit"
        onClick={() => setSubmitButton("saveAndReturn")}
        className="btn btn-primary me-1 mt-0"
        style={{width: 'auto'}}>
        {"Save & Return"}
      </button>
      <button
        type="submit"
        onClick={() => setSubmitButton("saveAndNew")}
        className="btn btn-outline-secondary me-1 mt-0" style={{width: 'auto'}}>
        {"Save & New"}
      </button>
      <Link className="btn btn-warning me-1 text-white" to="/hotels/extras">
        Return
      </Link>
    </div>
  );
}

export default FormButtons;
