import "./styles.css"

function AirportsFooter({ children }) {
    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="row">
                    <div className="col-sm-12 footer-container">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AirportsFooter