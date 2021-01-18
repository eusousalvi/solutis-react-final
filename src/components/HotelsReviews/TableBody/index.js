import React from "react";
import { FiEdit } from "react-icons/fi";

import { useReviews } from "../../../pages/Reviews/ReviewContext";
import Button from "../Button";
import TableCell from "../TableCell";
import TableRow from "../TableRow";
import { handleDate } from "../../../helpers/ReviewsFunctions";

function TableBody({ className, children }) {
  const { reviews, setReviews, setAllChecked } = useReviews();

  return (
    <tbody className={className}>
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
              <TableCell>{(+review.overall / 10).toFixed(1)}</TableCell>
              <TableCell>{review.status ? "Yes" : "No"}</TableCell>
              <TableCell>
                <Button
                  className="btn btn-warning mx-auto edit-hover"
                  value={<FiEdit />}
                />
              </TableCell>
            </TableRow>
          );
        })}
    </tbody>
  );
}

export default TableBody;
