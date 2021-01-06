function AirportsHeader({ children }) {
    return (
        <>
            <div className="row header-title">
                Airports Management
            </div>
            <hr />
            <div className="row button-container">
                {children}
            </div>
        </>
    )
}

export default AirportsHeader;