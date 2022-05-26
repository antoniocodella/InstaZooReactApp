import CardDetail from "./CardDetail";
export function Card({ animal, handleDetail, singleCard }) {
  return (
    <>
      <div className=" flex flex-col w-[20%] box-border bg-[#242424] border-[2px] border-[#000000] text-white m-6 h-[400px] ">
        <div className="h-[60%]">
          <img
            src={animal.image_link}
            className="h-[100%] w-full object-cover "
          ></img>
        </div>
        <div className="p-[15px]  h-[40%] flex flex-col justify-between">
          <div>
            <h1 className="text-xl">{animal.name}</h1>
            <p className="">{animal.habitat}</p>
          </div>
          <button
            onClick={() => handleDetail(animal)}
            className="bg-[red] flex justify-center  mr-[20%] ml-[20%] w-[60%] rounded"
          >
            Dettagli
          </button>
        </div>
      </div>
    </>
  );
}
