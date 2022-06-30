import React from "react";
import serchImg from "../assets/search-svg.svg";
import closeImg from "../assets/close-search.svg";

function SerchBar({
  filterSerchData,
  inputHandler,
  inputText,
  clearInput,
  handleDetail,
  openDetails,
}) {
  return (
    <div className='search-bar '>
      <div className='search-inputs'>
        <input
          value={inputText}
          type='text'
          placeholder='Search...'
          onChange={inputHandler}
        />
        {filterSerchData.length === 0 ? (
          <img src={serchImg} className='w-[25px] h-[25px]'></img>
        ) : (
          <img
            className='close-search'
            onClick={clearInput}
            src={closeImg}
          ></img>
        )}
      </div>
      {filterSerchData.length !== 0 && !openDetails ? (
        <div className='dataResult'>
          <ul>
            {" "}
            {filterSerchData.slice(0, 5).map((el, i) => {
              return (
                <li key={i}>
                  <a onClick={() => [handleDetail(el), clearInput()]}>
                    {el.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default SerchBar;
