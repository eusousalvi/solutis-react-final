import FlightEditForm from "../../components/FlightEditForm/FlightEditForm";
import Header from "../../components/Header";
import "./styles.css";

function Landing() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <h1 className="d-flex justify-content-center mt-5">Landing Page</h1> */}
            <FlightEditForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
