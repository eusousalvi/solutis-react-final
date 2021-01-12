import { useEffect } from "react";
import "./styles.css"

function AirportsPagination({
    totalItems,
    currentPage,
    pages,
    setPages,
    limit,
    handleChangeLimit,
    handleChangePage
}) {

    const numOfPages = Math.ceil(totalItems / limit);

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

    useEffect(() => {
        updatePages();
    }, [currentPage, totalItems, limit])

    return (
        <div className="btn-toolbar airportsPagination">
            <div className="btn-group me-2" role="group">
                <button
                    className={`${limit === 10 ? "btn btn-primary" : "btn btn-light btn-outline-dark "
                        }`}
                    onClick={() => handleChangeLimit(10)}
                >
                    10
        </button>
                <button
                    className={`${limit === 25 ? "btn btn-primary" : "btn btn-light btn-outline-dark "
                        }`}
                    onClick={() => handleChangeLimit(25)}
                >
                    25
        </button>
                <button
                    className={`${limit === 50 ? "btn btn-primary" : "btn btn-light btn-outline-dark "
                        }`}
                    onClick={() => handleChangeLimit(50)}
                >
                    50
        </button>
                <button
                    className={`${limit === 100
                        ? "btn btn-primary"
                        : "btn btn-light btn-outline-dark "
                        }`}
                    onClick={() => handleChangeLimit(100)}
                >
                    100
        </button>
                <button
                    className={`${limit === "all"
                        ? "btn btn-primary"
                        : "btn btn-light btn-outline-dark "
                        }`}
                    onClick={() => handleChangeLimit(totalItems)}
                >
                    All
        </button>
            </div>
            {pages.length > 1 && limit !== "all" && (
                <div className="btn-group me-2" role="group">
                    {pages.map((item, idx) => {
                        return (
                            <button
                                className={`${currentPage === item
                                    ? "btn btn-primary"
                                    : ("btn btn-light btn-outline-dark " + (item === "..." ? "disabled" : ""))
                                    }`}
                                key={idx}
                                onClick={() => handleChangePage(item)}
                            >
                                {item}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default AirportsPagination;