import "./styles.css";
import { useEffect } from "react";

function AirportsPagination({ 
        total, 
        currentPage, 
        setCurrentPage, 
        pages, 
        setPages, 
        itemsPerPage, 
        setItemsPerPage }) {
    
    const numOfPages = Math.ceil(total / itemsPerPage);

    function updatePages() {
        setPages(numOfPages <= 10 ? [...Array(numOfPages).keys()].map(x => x + 1) : reducePages());
    }

    function reducePages() {
        let pages = []

        if (currentPage <= 4) {
            for (let i = 1; i <= 5; i++)
                pages.push(i)
        }
        else {
            pages.push(1)
            pages.push("...")
            for (let i = currentPage - 2; i <= (currentPage + 2 < numOfPages ? currentPage + 2 : numOfPages); i++)
                pages.push(i)
        }
        if (currentPage < numOfPages - 2) {
            pages.push("...")
            pages.push(numOfPages)
        }

        return pages
    }

    function switchPage(clickedPage) {
        setCurrentPage(clickedPage);
    }

    useEffect(() => {
        updatePages();
    }, [currentPage, total, itemsPerPage])

    if (total <= 10)
        return null

    return (
        <nav>
            <ul className="pagination">
                <button 
                    className={"btn airport-button " + (itemsPerPage === 10 ? "btn-primary" : "")} 
                    onClick={() => setItemsPerPage(10)}>
                        10
                    </button>
                <button 
                    className={"btn airport-button " + (itemsPerPage === 25 ? "btn-primary" : "")} 
                    onClick={() => setItemsPerPage(25)}>
                        25
                    </button>
                <button 
                    className={"btn last-button airport-button " + (itemsPerPage === 50 ? "btn-primary" : "")} 
                    onClick={() => setItemsPerPage(50)}>
                        50
                    </button>
                {pages.map((page, idx) => (
                    <li key={idx} className={"page-item " + (page === currentPage ? "active" : (page === "..." ? "disabled" : ""))}>
                        <button className={"btn page-link airport-button "}
                            onClick={() => { switchPage(page) }}
                        >
                            {page}
                        </button>
                    </li>
                )
                )}
            </ul>
        </nav>
    )
}

export default AirportsPagination;