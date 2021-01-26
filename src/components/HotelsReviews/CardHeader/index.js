import React from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";
import api from '../../../services/reviews';
import { useReviews } from "../../../pages/Reviews/ReviewContext";

function CardHeader({ className, title }) {
  const { reviews, setOrder, setSortBy, setHasDeleted } = useReviews();

  const handleDeleteSelected = () => {
    let manyChecked = 0;
    reviews.map(async function (review) {
      if (review.isChecked) {
        manyChecked++;
        const deleted = await api.deleteReviews(review.id);
        if (deleted) setHasDeleted(true);
      }
    });
    if (!manyChecked) {
      alert("Nenhum item selecionado!");
      return;
    }
    setOrder("");
    setSortBy("");
    setHasDeleted(false);
  };

  return (
    <header
      className={
        className ||
        "card-header bg-light d-flex justify-content-between align-items-center"
      }
    >
      <h5 className="card-title">{title}</h5>
      <Button
        onClick={handleDeleteSelected}
        disabled={!reviews.length} 
        value={
          <>
            <IoMdClose />
            Deletar selecionados
          </>
        }
      />
    </header>
  );
}

export default CardHeader;
