function RoomInputNumber({
  handleChange: handleForm,
  id,
  placeholder,
  ariaLabel,
  required,
  ...data
}) {
  return (
    <input
      type="number"
      className="form-control"
      id={id}
      placeholder={placeholder}
      aria-label={ariaLabel}
      onChange={(e) => handleForm(e.target.id, parseInt(e.target.value))}
      required={required ? "required" : ""}
    />
  );
}

export default RoomInputNumber;
