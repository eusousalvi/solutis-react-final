import AirportsHeader from "../../components/FlightsAirportsList/AirportsHeader";
import AirportsTable from "../../components/FlightsAirportsList/AirportsTable";
import AirportsPagination from "../../components/FlightsAirportsList/AirportsPagination";
import AirportsSearchBar from "../../components/FlightsAirportsList/AirportsSearchBar";
import AirportsFooter from "../../components/FlightsAirportsList/AirportsFooter";
import AirportsDeleteSelectedButton from "../../components/FlightsAirportsList/AirportsDeleteSelectedButton";
import FlightsHeader from "../../components/FlightsHeader";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { refreshPage, updateAirports } from "../../redux/actions/airports";
import airportServices from "../../services/airports";

import "./styles.css";

function Airports() {

    const { refresh, query, searchFilter, order, sortBy } = useSelector(state => state.airports)
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1)
    const [pages, setPages] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [totalAiports, setTotalAirports] = useState(0)

    function getAirportsPaginated() {
        airportServices.getAirportsPaginated(searchFilter, query, currentPage, itemsPerPage, sortBy, order)
            .then(res => dispatch(updateAirports(res.data)))
            .catch(err => console.error(err))
    }

    function fetchAllAirports() {
        airportServices.getAirports()
            .then(res => setTotalAirports(res.data.length))
            .catch(err => console.error(err))
    }

    function updateItemsPerPage(quantity) {
        setItemsPerPage(quantity)
        setCurrentPage(1)
    }

    function searchAirports() {
        airportServices.searchAirports(searchFilter, query)
            .then(res => {
                setTotalAirports(res.data.length)
            })
            .catch(err => console.error(err))
        getAirportsPaginated()
        setCurrentPage(1)
    }

    useEffect(() => {
        fetchAllAirports()
        getAirportsPaginated()
        dispatch(refreshPage(false))
    }, [refresh])

    useEffect(() => {
        getAirportsPaginated()
    }, [currentPage, itemsPerPage, sortBy, order])


    return (
        <>
            <FlightsHeader />
            <div className="container">
                <div className="row">
                    <AirportsHeader>
                        <Link to="airports/add">
                            <button className="btn btn-success airport-button">ADD</button>
                        </Link>
                        <AirportsDeleteSelectedButton />
                    </AirportsHeader>
                </div>

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