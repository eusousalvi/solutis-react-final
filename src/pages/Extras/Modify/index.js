/*React*/
import { useState, useRef, useEffect } from "react";
/*Icon and Components */
import HotelsHeader from "../../../components/HotelsHeader";
import Form from "../../../components/HotelsExtras/Form";
import TopOptionsBar from "../../../components/HotelsExtras/TopOptionsBar";
import FormButtons from "../../../components/HotelsExtras/FormButtons";
import Card from "../../../components/HotelsRoomList/RoomsCard";
/*Api and Styles*/
import Api from "../../../services/extras";

const initialState = {
  img: "",
  price: 0,
  name: "",
  status: "true",
  translations: "",
};

function ModifyExtras({ history, match }) {
  const [item, setItem] = useState(initialState);
  const [submitButton, setSubmitButton] = useState("");
  const refForm = useRef(null);
  const { id } = match.params;

  useEffect(() => {
    async function getById() {
      if (id) {
        const res = await Api.getById(id);
        if (res) setItem(res);
      }
    }

    getById();
  }, [id]);

  function handleSubmitType() {
    if (id) {
      setItem(initialState);
      history.push("/hotels/extras/create");
    } else {
      setItem(initialState);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (refForm.current.checkValidity()) {
      const res = id ? await Api.update(id, item) : await Api.create(item);
      if (res) {
        submitButton === "saveAndNew"
          ? handleSubmitType()
          : history.push("/hotels/extras");
      }
    } else {
      refForm.current.classList.add("was-validated");
    }
  }

  const body = (
    <div className="row">
      <div className="col-md-12">
        <Form
          refForm={refForm}
          handleSubmit={handleSubmit}
          initialState={initialState}
          item={item}
          handleChange={handleChange}>
          <TopOptionsBar>
            <FormButtons setSubmitButton={setSubmitButton} />
          </TopOptionsBar>
        </Form>
      </div>
    </div>
  );

  return (
    <>
      <HotelsHeader />
      <div className="container mt-5">
        <Card title="EXTRAS MANAGEMENT" content={body} />
      </div>
    </>
  );
}

export default ModifyExtras;
