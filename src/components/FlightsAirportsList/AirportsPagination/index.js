import "./styles.css";
import { useState, useEffect } from "react";

function AirportsPagination({ total }) {
    
    const [currentPage, setCurrentPage] = useState(1)
    const [pages, setPages] = useState([]);
    const numOfPages = Math.ceil(total / 10);

    const updatePages = () => {
        setPages(numOfPages <= 10 ? [...Array(numOfPages).keys()].map(x => x + 1) : reducePages());
    }

    const reducePages = () => {
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

    const switchPage = (clickedPage) => {
        setCurrentPage(clickedPage);
    }

    useEffect(() => {
        updatePages();
    }, [currentPage])

    if (total <= 10)
        return null

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page, idx) => (
                    <li key={idx} className={"page-item " + (page === currentPage ? "active" : (page === "..." ? "disabled" : ""))}>
                        <button className={"btn page-link "}
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