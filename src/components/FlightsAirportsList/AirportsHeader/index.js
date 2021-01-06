function AirportsHeader({ children }) {
    return (
        <>
            <div className="row header-title">
                AIRPORTS MANAGEMENT
            </div>
            <hr />
            <div className="row button-container">
                {children}
            </div>
        </>
    )
}

export default AirportsHeader;