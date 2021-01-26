function AirportsHeader({ children }) {
    return (
        <>
            <div className="row header-title">
                AIRPORTS MANAGEMENT
            </div>
            <hr />
            <div className="button-container d-flex justify-content-between mb-4">
                {children}
            </div>
        </>
    )
}

export default AirportsHeader;