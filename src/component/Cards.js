import React from "react";
import { Card } from "../component/Card";

export default function Cards({ singleCard, data, handleDetail }) {
  return (
    <div className="flex flex-wrap flex justify-between h-[85%] ">
      {data.map((animal) => (
        <Card
          singleCard={singleCard}
          handleDetail={handleDetail}
          key={animal.id}
          animal={animal}
        />
      ))}
    </div>
  );
}
