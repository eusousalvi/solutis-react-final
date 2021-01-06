import "./styles.css";

function AirportsPagination({ total, currentPage, onClick }) {

    if (total <= 10)
        return null

    const numOfPages = Math.ceil(total / 10);

    const reducePages = () => {
        let pages = []

        if (currentPage <= 4) {
            for (let i = 1; i <= 5; i++)
                pages.push(i)
        }
        else {
            for (let i = currentPage - 2; i <=( currentPage + 2 < numOfPages ? currentPage + 2 : numOfPages); i++)
                pages.push(i)
        }
        if (currentPage < numOfPages - 4) {
            pages.push("...")
            for (let i = (numOfPages - 2); i <= numOfPages; i++)
                pages.push(i)

        }
        return pages
    }

    const pages = numOfPages <= 10 ? [...Array(numOfPages).keys()].map(x => x + 1) : reducePages();

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page}><button className={"btn " + (page === currentPage ? "btn-primary" : "btn-link")}
                        onClick={() => page !== "..." ?  onClick(page) : null}
                    >
                        {page === "..." ? "..." : page}
                    </button></li>
                )
                )}
            </ul>
        </nav>
    )
}

export default AirportsPagination;