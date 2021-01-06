import "./styles.css";
import AirportsPagination from "../AirportsPagination";
import { useState } from 'react';

function AirportsFooter() {
    const [currentPage, setCurrentPage] = useState(1)

    const switchPage = (clickedPage) => {
        setCurrentPage(clickedPage);
    }

    return (
        <div className="footer"> 
            <AirportsPagination total={150} currentPage={currentPage} onClick={switchPage} />
        </div>
    )
}

export default AirportsFooter;