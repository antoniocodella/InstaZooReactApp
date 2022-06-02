import { Link } from "react-router-dom";
import heartred from "../assets/heart-red.svg";
import heart from "../assets/heart.svg";
import SerchBar from "./SerchBar";

export function Topbar({
  like,
  singleCard,
  likeOpen,
  inputHandler,
  data,
  filterSerchData,
  inputText,
  clearInput,
  handleDetail,
  openDetails,
}) {
  return (
    <div className='flex items-center justify-between p-6 bg-[#2b2b2b] h-[5rem]'>
      <Link to='/'>
        <h1 className='text-red-600 font-bold text-[1.5rem]'>IMMERZOO</h1>
      </Link>
      <SerchBar
        data={data}
        inputHandler={inputHandler}
        filterSerchData={filterSerchData}
        inputText={inputText}
        clearInput={clearInput}
        handleDetail={handleDetail}
        openDetails={openDetails}
      />
      <a onClick={() => likeOpen(singleCard)}>
        {like.length === 0 ? (
          <img className='w-5 h-5 ' src={heart} />
        ) : (
          <img className='w-5 h-5 ' src={heartred} />
        )}
      </a>
    </div>
  );
}
