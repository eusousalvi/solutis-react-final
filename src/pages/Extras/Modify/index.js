import { useState, useRef, useEffect } from "react";
import HotelsHeader from "../../../components/HotelsHeader";
import ExtraServices from "../../../services/extras";
import Form from "../../../components/HotelsExtras/Form";
import FormButtons from "../../../components/HotelsExtras/FormButtons";

const initialState = {
  img: "",
  price: 0,
  name: "",
  status: "true",
};

function ModifyExtras({ history, match }) {
  const [item, setItem] = useState(initialState);
  const [submitButton, setSubmitButton] = useState("");
  const refForm = useRef(null);
  const { id } = match.params;

  useEffect(() => {
    async function getById() {
      if (id) {
        try {
          const res = await ExtraServices.getById(id);
          if (res.status || res.status === 200) setItem(res.data);
        } catch (error) {
          console.log(error);
        }
      }
    }

    getById();
  }, [id]);

  function control() {
    if (id) {
      setItem(initialState);
      history.push("/hotels/extras/create");
    } else {
      setItem(initialState);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (refForm.current.checkValidity()) {
      try {
        const res = id
          ? await ExtraServices.update(id, item)
          : await ExtraServices.create(item);

        if (res.status || res.status === 201 || res.status === 200) {
          submitButton === "saveAndNew"
            ? control()
            : history.push("/hotels/extras");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      refForm.current.classList.add("was-validated");
    }
  }

  return (
    <>
      <HotelsHeader />
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <Form
              refForm={refForm}
              handleSubmit={handleSubmit}
              initialState={initialState}
              item={item}
              setItem={setItem}>
              <FormButtons setSubmitButton={setSubmitButton} />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModifyExtras;
