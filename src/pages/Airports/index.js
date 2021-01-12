import AirportsHeader from "../../components/FlightsAirportsList/AirportsHeader";
import AirportsTable from "../../components/FlightsAirportsList/AirportsTable";
import AirportsPagination from "../../components/FlightsAirportsList/AirportsPagination";
import AirportsSearchBar from "../../components/FlightsAirportsList/AirportsSearchBar";
import FlightsHeader from "../../components/FlightsHeader";
// import Pagination from "../../components/Pagination";

import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import airportServices from "../../services/airports";
import "./styles.css";

function Airports() {

    const [currentPage, setCurrentPage] = useState(1)
    const [pages, setPages] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [airports, setAirports] = useState([])
    const [totalAiports, setTotalAirports] = useState(0)
    const [selectedForRemoval, setSelectedForRemoval] = useState([])
    const [deleted, setDeleted] = useState(false)

    function getAirportsPaginated() {
        airportServices.getAirportsPaginated(currentPage, itemsPerPage)
            .then(res => setAirports(res.data))
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

    async function searchAirports(query) {

        airportServices.searchAirports(query)
        .then(res => {
            setAirports(res.data)
            setTotalAirports(res.data.length)
        })
        .catch(err => console.error(err))

        setCurrentPage(1)
    }

    async function deleteSelected() {

        let itemsDeleted = selectedForRemoval.length
        const confirmDelete = window.confirm("Are you sure you want to remove these entries?")

        if (confirmDelete) {
            for (let i of selectedForRemoval) {
                let data = await airportServices.deleteAirport(i)
                if (data) itemsDeleted--
            }
        }

        if (itemsDeleted === 0) setDeleted(true)
    }

    useEffect(() => {
        fetchAllAirports()
        getAirportsPaginated()
        setDeleted(false)
    }, [deleted])

    useEffect(() => {
        getAirportsPaginated()
        setSelectedForRemoval([])
    }, [currentPage, itemsPerPage])


    return (
        <>
            <FlightsHeader /> 
            <div className="container">
                <AirportsHeader>
                    <Link to="airports/add">
                        <button className="btn btn-success airport-button">ADD</button>
                    </Link>
                    <button className="btn btn-danger airport-button" onClick={deleteSelected} >
                        <FiX /> Delete Selected
                    </button>
                </AirportsHeader>

                <div className="row">
                    <AirportsTable
                        airports={airports}
                        idxStart={currentPage * itemsPerPage - itemsPerPage}
                        setSelectedForRemoval={setSelectedForRemoval}
                        setDeleted={setDeleted}
                    />
                </div>
            </div>

            <div className="container-fluid">
                <div className="footer">
                    <div className="row">
                        <div className="col-sm-12 footer-container">
                            <AirportsPagination
                                totalPages={totalAiports}
                                currentPage={currentPage}
                                handleChangePage={setCurrentPage}
                                pages={pages}
                                setPages={setPages}
                                limit={itemsPerPage}
                                handleChangeLimit={updateItemsPerPage}
                            />
                            <AirportsSearchBar searchAirports={searchAirports} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Airports;