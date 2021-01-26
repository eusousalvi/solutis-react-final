import React, { useCallback, useEffect } from "react";
import { useReviews } from "../../../pages/Reviews/ReviewContext";
import IsEmpty from "../IsEmpty";
import Table from "../Table";
import api from "../../../services/reviews";
import Pagination from "../../Pagination";

const CardBody = ({ className }) => {
  const {
    reviews,
    setReviews,
    hasDeleted,
    page,
    setPage,
    limitPerPage,
    setLimitPerPage,
    totalPages,
  } = useReviews();

  const handleChangePageOrLimit = (field, value) => {
    if (field === "limit") {
      setLimitPerPage(value);
    }
    if (field === "page") {
      setPage(value);
    }
  };

  const fetchAllReviews = useCallback(
    async function () {
      let itemNumber = 0;
      const data = await api.getAllReviews();
      const fetchedReviews =
        data &&
        data.map((item) => {
          itemNumber++;
          return { itemNumber, ...item, isChecked: false };
        });
      data && setReviews(fetchedReviews);
    },
    [setReviews]
  );

  useEffect(() => {
    return fetchAllReviews();
  }, [fetchAllReviews]);

  useEffect(() => {
    if (hasDeleted) {
      return fetchAllReviews();
    }
  }, [hasDeleted, fetchAllReviews]);

  return !reviews.length ? (
    <IsEmpty />
  ) : (
    <div className={className || "card-body bg-light"}>
      <Table />
      <Pagination
        page={page}
        limit={limitPerPage}
        totalPages={totalPages}
        handleChangePageOrLimit={handleChangePageOrLimit}
      />
    </div>
  );
};

export default CardBody;
