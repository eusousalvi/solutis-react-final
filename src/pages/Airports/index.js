import AirportsHeader from "../../components/FlightsAirportsList/AirportsHeader";
import AirportsTable from "../../components/FlightsAirportsList/AirportsTable";
import AirportsPagination from "../../components/FlightsAirportsList/AirportsPagination";
import AirportsSearchBar from "../../components/FlightsAirportsList/AirportsSearchBar";
import AirportsFooter from "../../components/FlightsAirportsList/AirportsFooter";
import AirportsDeleteSelectedButton from "../../components/FlightsAirportsList/AirportsDeleteSelectedButton";
import AirportsLoadingBar from "../../components/FlightsAirportsList/AirportsLoadingBar";
import FlightsHeader from "../../components/FlightsHeader";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { updateAirports } from "../../redux/actions/airports";
import airportServices from "../../services/airports";

import "./styles.css";

function Airports() {

    const { refresh, query, searchFilter, order, sortBy, loading } = useSelector(state => state.airports)
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1)
    const [pages, setPages] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [totalAiports, setTotalAirports] = useState(0)

    function getAirportsPaginated(emptyQuery) {

        const searchTerm = emptyQuery ? "" : query;

        airportServices
            .getAirportsPaginated(
                searchFilter,
                searchTerm,
                currentPage,
                itemsPerPage,
                sortBy,
                order
            )
            .then(res => dispatch(updateAirports(res.data)))
            .catch(err => console.error(err))
    }

    function fetchAllAirports() {
        airportServices.getAirports()
            .then(res => setTotalAirports(res.data.length))
            .catch(err => {
                if (err.response.status === 429)
                    alert(err + " (Too many requests). Wait a few seconds and refresh the page.")
            })
    }

    function updateItemsPerPage(quantity) {
        setItemsPerPage(quantity)
        setCurrentPage(1)
    }

    function searchAirports(emptyQuery) {

        const searchTerm = emptyQuery ? "" : query;

        airportServices.searchAirports(searchFilter, searchTerm)
            .then(res => {
                setTotalAirports(res.data.length)
            })
            .catch(err => console.error(err))

        setCurrentPage(1)

        getAirportsPaginated(emptyQuery)
    }

    useEffect(() => {
        fetchAllAirports()
        getAirportsPaginated()
    }, [refresh])

    useEffect(() => {
        getAirportsPaginated()
    }, [currentPage, itemsPerPage, sortBy, order])


    return (
        <>
            <FlightsHeader />
            <div className="container airports-table-container">
                <AirportsHeader>
                    <Link to="airports/add">
                        <button className="btn btn-success airport-button">ADD</button>
                    </Link>
                    <AirportsDeleteSelectedButton />
                </AirportsHeader>
                {loading > 0 ? <AirportsLoadingBar /> : <></>}
                <AirportsTable
                    idxStart={currentPage * itemsPerPage - itemsPerPage}
                />
            </div>

            <AirportsFooter>
                <AirportsPagination
                    totalItems={totalAiports}
                    currentPage={currentPage}
                    handleChangePage={setCurrentPage}
                    pages={pages}
                    setPages={setPages}
                    limit={itemsPerPage}
                    handleChangeLimit={updateItemsPerPage}
                />
                <AirportsSearchBar searchAirports={searchAirports} />
            </AirportsFooter>
        </>
    )
}

export default Airports;