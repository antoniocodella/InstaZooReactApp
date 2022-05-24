import React from "react";

export default function CardDetail({animals}) {
  return (
    <div className="detail">
      <div className="desc">
        <div className="desc-img">
          <img src={animals.image_link} />
        </div>
        <div className="desc-tex">
          <h3>{animals.name}</h3>
          <p>
            book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
      <div className="btn-group">
        <button></button>
        <svg></svg>
      </div>
    </div>
  );
}
