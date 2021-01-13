import { useEffect, useState } from "react";
import "./styles.css";

function FlightRoutePagination(props) {
  const [firstButton, setFirstButton] = useState(1);
  const [secondButton, setSecondButton] = useState(2);
  const [thirdButton, setThirdButton] = useState(3);
  const [pagesLimit, setPagesLimit] = useState();

  useEffect(() => {
    setPagesLimit(props.totalRoutes / props.numberPerPage);
  });

  function next() {
    if (props.page < pagesLimit) {
      props.setPage(props.page + 1);
      updateButtons(true);
    }
  }

  function previous() {
    if (props.page > 1) {
      props.setPage(props.page - 1);
      updateButtons(false);
    }
  }

  function updateButtons(next) {
    if (next && thirdButton < pagesLimit) {
      setFirstButton(firstButton + 1);
      setSecondButton(secondButton + 1);
      setThirdButton(thirdButton + 1);
    } else if (!next && firstButton > 1) {
      setFirstButton(firstButton - 1);
      setSecondButton(secondButton - 1);
      setThirdButton(thirdButton - 1);
    }
  }

  function firstButtonAction() {
    props.setPage(firstButton);
  }

  function secondButtonAction() {
    props.setPage(secondButton);
  }

  function thirdButtonAction() {
    props.setPage(thirdButton);
  }

  return (
    <nav aria-label="Navegação de página exemplo" className={"d-flex"}>
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" onClick={previous}>
            Previous
          </button>
        </li>
        <li className="page-item">
          <button
            className={
              firstButton === props.page
                ? "page-link flightRoutes-btn-active"
                : "page-link"
            }
            onClick={firstButtonAction}
          >
            {firstButton}
          </button>
        </li>
        <li className="page-item">
          <button
            className={
              secondButton === props.page
                ? "page-link flightRoutes-btn-active"
                : "page-link"
            }
            onClick={secondButtonAction}
          >
            {secondButton}
          </button>
        </li>
        <li className="page-item">
          <button
            className={
              thirdButton === props.page
                ? "page-link flightRoutes-btn-active"
                : "page-link"
            }
            onClick={thirdButtonAction}
          >
            {thirdButton}
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={next}>
            Next
          </button>
        </li>
      </ul>
      <ul className={"pagination mx-5"}>
        <li className={"page-item"}>
          <button
            className={"page-link"}
            onClick={() => props.setNumberPerPage(10)}
          >
            10
          </button>
        </li>
        <li className={"page-item"}>
          <button
            className={"page-link"}
            onClick={() => props.setNumberPerPage(25)}
          >
            25
          </button>
        </li>
        <li className={"page-item"}>
          <button
            className={"page-link"}
            onClick={() => props.setNumberPerPage(50)}
          >
            50
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default FlightRoutePagination;
