import { useEffect, useState, useCallback } from "react";
import { FiEdit } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

/**
 * Componentes
 */
import HotelsHeader from "../../components/HotelsHeader";
import Button from "../../components/HotelsReviews/Button";
import Card from "../../components/HotelsReviews/Card";
import CardBody from "../../components/HotelsReviews/CardBody";
import CardHeader from "../../components/HotelsReviews/CardHeader";
import Table from "../../components/HotelsReviews/Table";
import TableBody from "../../components/HotelsReviews/TableBody";
import TableCell from "../../components/HotelsReviews/TableCell";
import TableHead from "../../components/HotelsReviews/TableHead";
import TableHeader from "../../components/HotelsReviews/TableHeader";
import TableRow from "../../components/HotelsReviews/TableRow";

/**
 * Services, styles, etc
 */
import api from "../../services/reviews";
import { handleDate } from "../../helpers/ReviewsFunctions";
import "./styles.css";
import Pagination from "../../components/Pagination";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  const [allChecked, setAllChecked] = useState(false);

  // pagination
  const [page, setPage] = useState(1);
  const [limitPerPage, setLimitPerPage] = useState(25);
  const [totalPages, setTotalPages] = useState([]);

  const handleLimitPerPage = (data) => {
    const pages = Math.ceil(data.length / limitPerPage);
    const totalP = new Array(pages).fill(pages).map((data, index) => index + 1);
    setTotalPages(totalP);
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
      const data = await api.getReviews(params);
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
    [order, sortBy, limitPerPage, page]
  );

  const fetchAllReviews = useCallback(
    async function () {
      const params = {
        sortBy,
        order,
      };

      let itemNumber = 0;
      const data = await api.getReviews(params);
      const fetchedReviews =
        data &&
        data.map((item) => {
          itemNumber++;
          return { itemNumber, ...item, isChecked: false };
        });
      data && handleLimitPerPage(fetchedReviews);
      data && setReviews(fetchedReviews);
      setAllChecked(false);
    },
    [order, sortBy]
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

  useEffect(() => {
    fetchPaginatedReviews();
  }, [fetchPaginatedReviews]);

  useEffect(() => {
    fetchAllReviews();
  }, [fetchAllReviews]);

  const handleDeleteSelected = () => {
    let manyChecked = 0;
    reviews.map(async function (review) {
      if (review.isChecked) {
        manyChecked++;
        const deleted = await api.deteleReviews(review.id);
        if (deleted) fetchAllReviews();
      }
    });
    if (!manyChecked) {
      alert("Nenhum item selecionado!");
      return;
    }
    setOrder("");
    setSortBy("");
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
  const handleChangePageOrLimit = (field, value) => {
    if (field === "limit") {
      setLimitPerPage(value);
    }
    if (field === "page") {
      setPage(value);
    }
  };

  return (
    <>
      <HotelsHeader />
      <section className="container">
        <Card className="row col-md-12 mt-5 card">
          <CardHeader className="card-header bg-light d-flex justify-content-between align-items-center">
            <h5 className="card-title">Gerenciamento de Avaliações</h5>
            <Button
              className="btn btn-lg btn-danger d-flex align-items-center justify-content-between"
              onClick={handleDeleteSelected}
              disabled={!reviews.length}
            >
              <IoMdClose /> Deletar selecionados
            </Button>
          </CardHeader>
          <CardBody className="card-body">
            {reviews && (
              <Table className="table table-striped table-hover">
                <TableHead className="thead-light table-secondary">
                  <TableRow>
                    <TableHeader scope="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="select_all"
                        id="select_all"
                        checked={allChecked}
                        onChange={handleAllChecked}
                      />
                    </TableHeader>

                    <TableHeader
                      scope="col"
                      id=""
                      onClick={handleOrder}
                      className="menu-filter"
                    >
                      #
                    </TableHeader>

                    <TableHeader
                      scope="col"
                      id="hotel"
                      className="menu-filter"
                      onClick={handleOrder}
                    >
                      Hotel
                    </TableHeader>

                    <TableHeader
                      scope="col"
                      id="name"
                      className="menu-filter"
                      onClick={handleOrder}
                    >
                      Nome
                    </TableHeader>

                    <TableHeader
                      scope="col"
                      id="email"
                      className="menu-filter"
                      onClick={handleOrder}
                    >
                      E-mail
                    </TableHeader>

                    <TableHeader
                      scope="col"
                      id="date"
                      className="menu-filter"
                      onClick={handleOrder}
                    >
                      Data
                    </TableHeader>

                    <TableHeader
                      scope="col"
                      id="overall"
                      className="menu-filter"
                      onClick={handleOrder}
                    >
                      Média
                    </TableHeader>

                    <TableHeader
                      scope="col"
                      colSpan="2"
                      id="status"
                      className="menu-filter"
                      onClick={handleOrder}
                      value="Status"
                    >
                      Status
                    </TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody content={reviews}>
                  {reviews &&
                    reviews.map((review) => {
                      return (
                        <TableRow key={review.id}>
                          <TableCell>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(event) => {
                                const checked = event.target.checked;
                                setReviews(
                                  reviews.map((item) => {
                                    if (review.id === item.id) {
                                      review.isChecked = checked;
                                    }
                                    return item;
                                  })
                                );

                                if (!checked) setAllChecked(false);
                              }}
                              name={`review_${review.id}`}
                              id={review.id}
                              checked={review.isChecked}
                            />
                          </TableCell>
                          <TableCell>{review.itemNumber}</TableCell>
                          <TableCell>{review.hotel}</TableCell>
                          <TableCell>{review.name}</TableCell>
                          <TableCell>
                            <a
                              className="btn btn-light btn-email"
                              href={`mailto:${review.email}`}
                            >
                              {review.email}
                            </a>
                          </TableCell>
                          <TableCell>{handleDate(review.date)}</TableCell>
                          <TableCell>
                            {(+review.overall / 10).toFixed(1)}
                          </TableCell>
                          <TableCell>{review.status ? "Yes" : "No"}</TableCell>
                          <TableCell>
                            <Button className="btn btn-warning mx-auto edit-hover">
                              <FiEdit />
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            )}
            <Pagination
              page={page}
              limit={limitPerPage}
              totalPages={totalPages}
              handleChangePageOrLimit={handleChangePageOrLimit}
            />
          </CardBody>
        </Card>
      </section>
    </>
  );
}

export default Reviews;
