import { createContext, useContext, useState } from "react";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  const [allChecked, setAllChecked] = useState(false);
  const [hasDeleted, setHasDeleted] = useState(false);

  // pagination
  const [page, setPage] = useState(1);
  const [limitPerPage, setLimitPerPage] = useState(25);
  const [totalPages, setTotalPages] = useState([]);

  return (
    <ReviewContext.Provider
      value={{
        reviews,
        setReviews,
        sortBy,
        setSortBy,
        order,
        setOrder,
        allChecked,
        setAllChecked,
        page,
        setPage,
        limitPerPage,
        setLimitPerPage,
        totalPages,
        setTotalPages,
        hasDeleted,
        setHasDeleted,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviews = () => {
  const {
    reviews,
    setReviews,
    sortBy,
    setSortBy,
    order,
    setOrder,
    allChecked,
    setAllChecked,
    page,
    setPage,
    limitPerPage,
    setLimitPerPage,
    totalPages,
    setTotalPages,
    hasDeleted,
    setHasDeleted,
  } = useContext(ReviewContext);

  return {
    reviews,
    setReviews,
    sortBy,
    setSortBy,
    order,
    setOrder,
    allChecked,
    setAllChecked,
    page,
    setPage,
    limitPerPage,
    setLimitPerPage,
    totalPages,
    setTotalPages,
    hasDeleted,
    setHasDeleted,
  };
};
