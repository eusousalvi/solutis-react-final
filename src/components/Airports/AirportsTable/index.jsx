import AirportTableEntry from '../AirportTableEntry';
import AirportsTableHeader from '../AirportsTableHeader';

function AirportsTable() {

    const airports = [
        {
            id: 1,
            code: "BJY",
            name: "Batajnica Arpt",
            citycode: "BEG",
            cityname: "Belgrade",
            countryname: "SERBIA",
            countrycode: "RS",
            continentId: "1",
            timezone: "1",
            latitude: 44.9236,
            longitude: 20.279,
            city: "false"
        },
        {
            id: 3,
            code: "BJG",
            name: "Batajnica Arpt",
            citycode: "BEG",
            cityname: "Belgrade",
            countryname: "SERBIA",
            countrycode: "RS",
            continentId: "1",
            timezone: "1",
            latitude: 44.9236,
            longitude: 20.279,
            city: "false"
        },
        {
            id: 4,
            code: "BKL",
            name: "Batajnica Arpt",
            citycode: "BEG",
            cityname: "Belgrade",
            countryname: "SERBIA",
            countrycode: "RS",
            continentId: "1",
            timezone: "1",
            latitude: 44.9236,
            longitude: 20.279,
            city: "false"
        }
    ]

    const tableFields = [
        <input type="checkbox"
            id="selectAirports" />,
        "#",
        "Code",
        "Name",
        "Citycode",
        "Cityname",
        "Countryname",
        "Countrycode",
        "Continent Id",
        "Timezone",
        "Latitude",
        "Longitude",
        "City",
        ""
    ]

    return (
        <div className="table-responsive">
            <table className="table table-striped table-bordered" id="airportsTable">
                <AirportsTableHeader fields={tableFields} prefix="airports" />
                <tbody>
                    {airports.map(airport => <AirportTableEntry key={airport.id} airport={airport} />)}
                </tbody>
            </table>
        </div>
    )
}

export default AirportsTable
