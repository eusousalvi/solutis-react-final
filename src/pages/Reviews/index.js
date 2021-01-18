import React from "react";

import HotelsHeader from "../../components/HotelsHeader";
import Container from "../../components/HotelsReviews/Container";
import Card from "../../components/HotelsReviews/Card";
import CardHeader from "../../components/HotelsReviews/CardHeader";

import { ReviewProvider } from "./ReviewContext";
import CardBody from "../../components/HotelsReviews/CardBody";

import "./styles.css";

const Reviews = () => {
  return (
    <>
      <HotelsHeader />
      <ReviewProvider>
        <Container>
          <Card>
            <CardHeader title="Gerenciamento de Avaliações" />
            <CardBody />
          </Card>
        </Container>
      </ReviewProvider>
    </>
  );
};

export default Reviews;
