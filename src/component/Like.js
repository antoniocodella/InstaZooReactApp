import React from "react";
import basket from "../assets/basket.svg";

export default function Like({ like, closeCart, removeToCart }) {
  return (
    <div>
      <h2>Preferiti</h2>
      <button onClick={closeCart}>Chiudi</button>
      <a onClick={() => removeToCart}>
        <img src={basket}></img>
      </a>
    </div>
  );
}
