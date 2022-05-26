import React from "react";
import { Card } from "../component/Card";
import CardDetail from "./CardDetail";

export default function Cards({ product, data, handleDetail }) {
  const cardsToRender =  data.map((animal) => (
    <Card product={product} handleDetail={handleDetail} key={animal.id} animal={animal}/>
  ));


  return <div className="flex flex-wrap flex justify-between  ">
    {cardsToRender}
    </div>;
}
