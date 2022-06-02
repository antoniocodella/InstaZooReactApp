import React from "react";
import heart from "../assets/heart.svg";
import heartred from "../assets/heart-red.svg";
import closeBtn from "../assets/close.svg";
import Like from "./Like";

export default function CardDetail({
  like,
  singleCard,
  closeDetail,
  addToLike,
}) {
  return (
    <div className="detail  flex  w-[750px] h-[500px] z-10  absolute top-[50%] left-[50%]">
      <div className="desc flex">
        <div className="desc-img w-[60%]">
          <img
            className="w-full h-full object-cover"
            src={singleCard.image_link}
          />
        </div>
        <div className="desc-tex p-2 relative w-[40%]">
          <h3 className="text-white text-[25px] pt-8 pr-6 pl-6">
            {singleCard.name}
          </h3>
          <div className="text-white  text-[15px] pr-6 pl-6	 pt-8">
            <p>- Active Time: {singleCard.active_time}</p>
            <p>- Animal Type: {singleCard.animal_type}</p>
            <p>- Diet: {singleCard.diet}</p>
            <p>- Weight Max: {singleCard.weight_max}</p>
            <p>- Weight Min: {singleCard.weight_min}</p>
            <p>- Geo Range: {singleCard.geo_range}</p>
            <p>- Habitat: {singleCard.habitat}</p>
          </div>
          <a
            className="absolute top-[15px]  left-[255px] w-[100%]"
            onClick={closeDetail}
          >
            <img className="w-[25px] h-[25px]" src={closeBtn}></img>
          </a>
          <a
            onClick={() => addToLike(singleCard)}
            className="heart-outer absolute bottom-[20px] left-[248px] w-[100%] "
          >
            {like.find((animal) => animal.name === singleCard.name) ? (
              <img className=" w-[30px] h-[30px]  " src={heartred}></img>
            ) : (
              <img className=" w-[30px] h-[30px]  " src={heart}></img>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}
