function Pagination({ limit, totalPages, page, handleChangePageOrLimit }) {
  return (
    <div className="btn-toolbar">
      <div className="btn-group me-2" role="group">
        <button
          className={`${
            limit === 25 ? "btn btn-primary" : "btn btn-light btn-outline-dark "
          }`}
          onClick={() => handleChangePageOrLimit("limit", 25)}
        >
          25
        </button>
        <button
          className={`${
            limit === 50 ? "btn btn-primary" : "btn btn-light btn-outline-dark "
          }`}
          onClick={() => handleChangePageOrLimit("limit", 50)}
        >
          50
        </button>
        <button
          className={`${
            limit === 100
              ? "btn btn-primary"
              : "btn btn-light btn-outline-dark "
          }`}
          onClick={() => handleChangePageOrLimit("limit", 100)}
        >
          100
        </button>
        <button
          className={`${
            limit === "all"
              ? "btn btn-primary"
              : "btn btn-light btn-outline-dark "
          }`}
          onClick={() => handleChangePageOrLimit("limit", "all")}
        >
          All
        </button>
      </div>
      {totalPages.length > 1 && limit !== "all" && (
        <div className="btn-group me-2" role="group">
          {totalPages.map((item) => {
            return (
              <button
                className={`${
                  page === item
                    ? "btn btn-primary"
                    : "btn btn-light btn-outline-dark "
                }`}
                key={item}
                onClick={() => handleChangePageOrLimit("page", item)}
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

export default Pagination;
