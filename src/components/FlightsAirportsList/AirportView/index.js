function AirportView({ airport }) {

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <p><b>Code:</b> {airport.code}</p>
                    <hr />
                    <p><b>Citycode:</b> {airport.citycode}</p>
                    <hr />
                    <p><b>Countryname:</b> {airport.countryname}</p>
                    <hr />
                    <p><b>Continent Id:</b> {airport.continentId}</p>
                    <hr />
                    <p><b>Lat:</b> {airport.latitude}</p>
                </div>
                <div className="col-md-6">
                    <p><b>Name:</b> {airport.name}</p>
                    <hr />
                    <p><b>Cityname:</b> {airport.cityname}</p>
                    <hr />
                    <p><b>Countrycode</b> {airport.countrycode}</p>
                    <hr />
                    <p><b>Timezone</b> {airport.timezone}</p>
                    <hr />
                    <p><b>Longitude</b> {airport.longitude}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default AirportView;