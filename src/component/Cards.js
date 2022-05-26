import React from "react";
import { Card } from "../component/Card";
import CardDetail from "./CardDetail";

export default function Cards({ singleCard, data, handleDetail }) {
  const cardsToRender = data.map((animal) => (
    <Card
      singleCard={singleCard}
      handleDetail={handleDetail}
      key={animal.id}
      animal={animal}
    />
  ));

  return (
    <div className="flex flex-wrap flex justify-between h-[85%] ">
      {cardsToRender}
    </div>
  );
}
