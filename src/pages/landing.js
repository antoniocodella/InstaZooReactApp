import logo from "../assets/Logo.png";
import pappagallo from "../assets/pappagallo-1.jpg";
import pantera from "../assets/pantera-bianca.jpg";
import { Footer } from "../component/Footer.js";
import { Link } from "react-router-dom";

export function Landing() {
  return (
    <div className="bg-[#393636]/[.98] h-screen text-white">
      <figure className="logo absolute z-[1] w-[15rem] h-[15rem] top-[45%] left-1/2 ">
        <img
          className="rounded-full border-solid border-2 border-[#cbd5e1]"
          src={logo}
          alt="Logo"
        />
      </figure>

      <div className="w-full flex  h-[45%]">
        <div className="flex flex-col basis-2/4 p-8">
          <h1 className="logo-text">IMMERZOO</h1>
          <h2 className="sub-logo-text mt-4 ml-36 ">DIVERTIMENTO ASSICURATO</h2>
        </div>
        <div className="basis-2/4 w-full">
          <img
            className="w-full h-full object-cover"
            src={pappagallo}
            alt="pappagallo"
          />
        </div>
      </div>

      <div className="w-full flex h-[45%]">
        <div className="basis-2/4 w-full">
          <img
            className="w-full h-full object-cover"
            src={pantera}
            alt="pantera"
          />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h2 className=" text-[18px] mb-8">SCOPRI IL NOSTRO NUOVO SOCIAL!</h2>
          <Link to="/home">
            <button className="bg-[red] w-40  rounded h-12 text-[20px] font-bold font-sans hover:bg-red-600">
              Visita
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
