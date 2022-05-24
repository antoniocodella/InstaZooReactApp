import monkey from "../assets/monkey.png";

export function Card({animal}) {
  return (
    <div className="w-[20%] bg-[#242424] border border-[#242424] text-white ">
      <div>
        <img src={animal.image_link} className="h-[60%] w-full"></img>
      </div>
      <div className="p-1">
        <h3>{animal.name}</h3>
        <p>{animal.habitat}</p>
        <button className="bg-[red] flex justify-center mr-[20%] ml-[20%] w-[60%] rounded">
          Dettagli
        </button>
      </div>
    </div>
  );
}
