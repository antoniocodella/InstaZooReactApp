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
          <p className="text-white  text-[15px] pr-6 pl-6	 pt-8">
            Lorem ipsum book. It has survived not only five centuries, but also
            the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
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
