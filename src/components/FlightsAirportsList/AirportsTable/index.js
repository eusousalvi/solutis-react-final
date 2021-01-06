import AirportsTableEntry from '../AirportsTableEntry';
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
        ""
    ]

    return (
        <div className="table-responsive">
            <table className="table table-striped table-bordered" id="airportsTable">
                <AirportsTableHeader fields={tableFields} prefix="airports" />
                <tbody>
                    {airports.map(airport => <AirportsTableEntry key={airport.id} airport={airport} />)}
                </tbody>
            </table>
        </div>
    )
}

export default AirportsTable
