import React from "react";
import basket from "../assets/basket.svg";

export default function Like({ newArray, closeLike, removeToLike }) {
  return (
    <div className="like-container bg-[#3C3C3C] p-4 text-white flex flex-col gap-2 top-[50%] left-[50%] z-10">
      <h2 className="text-xl">Preferiti</h2>
      {newArray.map((el, i) => {
        return (
          <>
            <div
              className="like flex border-[grey] border-y-2 justify-between items-center h-[5rem] z-10"
              key={i}
            >
              <div className="flex h-[100%] gap-3">
                <img
                  className="w-[8rem] h-[100%] object-cover"
                  src={el.image_link}
                ></img>
                <h4 className=" self-center">{el.name}</h4>
              </div>

              <a onClick={() => removeToLike(el)}>
                <img src={basket}></img>
              </a>
            </div>
          </>
        );
      })}
      <button
        onClick={closeLike}
        className="bg-[red] w-20 self-center rounded mt-8 text-[15px]  font-sans hover:bg-red-600"
      >
        Chiudi
      </button>
    </div>
  );
}
