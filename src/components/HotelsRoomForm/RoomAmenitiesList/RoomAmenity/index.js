function RoomAmenity({ handleChange, amenity, ...data }) {
  return (
    <div
      key={amenity}
      id={"amenity-" + amenity.toLowerCase().replace(/ /g, "-")}
    >
      <input
        type="checkbox"
        className="room-amenity"
        aria-label={amenity}
        value={amenity}
        onChange={(e) => handleChange(e.target.className, e.target)}
      ></input>
      <label htmlFor={amenity} className="form-label">
        {amenity}
      </label>
    </div>
  );
}

export default RoomAmenity;
