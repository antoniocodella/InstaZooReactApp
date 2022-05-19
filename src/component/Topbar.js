import heart from "../assets/heart-red.svg";

export function Topbar() {
  return (
    <div className="flex items-center justify-between p-6 bg-[#2b2b2b] h-[5%]">
      <h1 className="text-red-600 font-bold text-[1.5rem]">IMMERZOO</h1>
      <img className="w-5 h-5 " src={heart} />
    </div>
  );
}
