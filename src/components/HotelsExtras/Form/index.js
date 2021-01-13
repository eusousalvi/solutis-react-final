function Form({ children, handleSubmit, item, handleChange, refForm }) {
  return (
    <form className="row g-3" onSubmit={handleSubmit} ref={refForm} noValidate>
      {children}
      <div className="col-md-6">
        <label htmlFor="img" className="form-label">
          Imagem*
        </label>
        <input
          type="text"
          className="form-control"
          id="img"
          pattern="^[^\s]+(\s+[^\s]+)*$"
          onChange={handleChange}
          value={item.img}
          name="img"
          required
        />
        <div className="invalid-feedback">Informe a URL da imagem!</div>
      </div>
      <div className="col-md-6">
        <label htmlFor="name" className="form-label">
          Nome*
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          pattern="^[^-\s][a-zA-Z0-9_\s-]+$"
          onChange={handleChange}
          value={item.name}
          name="name"
          required
        />
        <div className="invalid-feedback">Informe o nome do serviço!</div>
      </div>
      <div className="col-md-6">
        <label htmlFor="status" className="form-label">
          Status*
        </label>
        <select
          className="form-select"
          id="status"
          onChange={handleChange}
          value={item.status}
          name="status"
          required>
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
        <div className="invalid-feedback"></div>
      </div>
      <div className="col-md-6">
        <label htmlFor="price" className="form-label">
          Preço*
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          onChange={handleChange}
          value={item.price ? item.price : ""}
          name="price"
          required
        />
        <div className="invalid-feedback">Informe o preço do serviço!</div>
      </div>
    </form>
  );
}

export default Form;
