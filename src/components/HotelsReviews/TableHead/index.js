import React, { useCallback, useEffect } from "react";
import { useReviews } from "../../../pages/Reviews/ReviewContext";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";

import api from "../../../services/reviews";

function TableHead({ className, children, headers }) {
  const {
    reviews,
    setReviews,
    allChecked,
    setAllChecked,
    order,
    setOrder,
    sortBy,
    setSortBy,
    setTotalPages,
    limitPerPage,
    page,
  } = useReviews();

  const handleLimitPerPage = useCallback(
    (data) => {
      const pages = Math.ceil(data.length / limitPerPage);
      const totalP = new Array(pages)
        .fill(pages)
        .map((data, index) => index + 1);
      setTotalPages(totalP);
    },
    [limitPerPage, setTotalPages]
  );

  const handleOrder = (e) => {
    if (!e.target.id) {
      setSortBy("");
      setOrder("");
      return;
    }

    setSortBy(e.target.id);
    return setOrder(order === "asc" ? "desc" : "asc");
  };

  const handleAllChecked = () => {
    if (!allChecked) {
      setAllChecked(!allChecked);
      setReviews(
        reviews.map((review) => {
          review.isChecked = true;
          return review;
        })
      );
    } else {
      setAllChecked(!allChecked);
      setReviews(
        reviews.map((review) => {
          review.isChecked = false;
          return review;
        })
      );
    }
  };
  const fetchPaginatedReviews = useCallback(
    async function () {
      const params = {
        sortBy,
        order,
        page,
        limit: limitPerPage,
      };

      let itemNumber = 0;
      const data = await api.getPaginatedReviews(params);
      const allData = await api.getAllReviews();
      const fetchedReviews =
        data &&
        data.map((item) => {
          itemNumber++;
          return { itemNumber, ...item, isChecked: false };
        });
      allData && handleLimitPerPage(allData);
      data && setReviews(fetchedReviews);
      setAllChecked(false);
    },
    [sortBy, order, page, limitPerPage, handleLimitPerPage, setReviews, setAllChecked]
  );

  useEffect(() => {
    fetchPaginatedReviews();
  }, [fetchPaginatedReviews]);
  
  return (
    <thead className={className || "thead-light table-secondary"}>
      {headers && (
        <TableRow>
          <TableHeader scope="col">
            <input
              className="form-check-input"
              type="checkbox"
              name="select_all"
              id="select_all"
              defaultChecked={allChecked}
              onChange={handleAllChecked}
            />
          </TableHeader>
          {headers.map((header, index) => (
            <TableHeader
              key={index}
              id={header === "#" ? "" : header}
              onClick={handleOrder}
              colSpan={header === "Status" ? "2" : "1"}
            >
              {header}
            </TableHeader>
          ))}
        </TableRow>
      )}
    </thead>
  );
}

export default TableHead;
