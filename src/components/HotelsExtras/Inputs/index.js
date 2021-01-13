import "./styles.css";

function Inputs({ type, ...props }) {
  if (type === "modalForm") {
    const { img, language, translation } = props.translation;
    const { handleChange } = props;

    return (
      <div className="row form-group mt-2">
        <label className="col-md-3 text-left">
          Em
          <img src={img} alt={`bandeira ${language}`} height="20" />
          &nbsp;<span className="extras-language">{language}</span>
        </label>
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            name={language}
            placeholder="Name"
            onChange={handleChange}
            value={translation}
          />
        </div>
      </div>
    );
  }

  return <></>;
}

export default Inputs;
