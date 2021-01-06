function AirportButton({ icon, text, onClick, airportId, btnClass }) {
    return (
        <button className={"btn " + btnClass} onClick={() => onClick(airportId)}>
            {
                icon ? <i className={icon}></i> : text
            }
        </button>
    )
}

export default AirportButton;