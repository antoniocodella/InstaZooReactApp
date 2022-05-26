import React from "react";
import heart from "../assets/heart.svg";
import closeBtn from "../assets/close.svg";

export default function CardDetail({ product, closeDetail }) {
  return (
    <div className="detail  flex  w-[750px] h-[500px] z-10  absolute top-[50%] left-[50%]">
      <div className="desc flex">
        <div className="desc-img w-[60%]">
          <img
            className="w-full h-full object-cover"
            src={product.image_link}
          />
        </div>
        <div className="desc-tex p-2 relative w-[40%]">
          <h3 className="text-white text-[25px] p-[15px]">{product.name}</h3>
          <p className="text-white text-[15px] p-[15px]	">
            Lorem ipsum book. It has survived not only five centuries, but also
            the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
          <a className="absolute top-[9px]  left-[265px] w-[100%]" onClick={closeDetail}>
            <img  className="w-[25px] h-[25px]" src={closeBtn}></img>
          </a>
          <a className="heart-outer absolute bottom-[12px] left-[260px] w-[100%]  ">
            <img className="heart w-[30px] h-[30px]  " src={heart}></img>
          </a>
        </div>
      </div>

     
    </div>
  );
}
