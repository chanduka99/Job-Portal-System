import React from "react";
import { Link } from "react-router-dom";

function CandidateNavbar() {
  return (
    <div className=" p-2 flex bg-gradient-to-r from-[#9345ffd5] to-[#512194] h-[6vh] text-white text-opacity-80  justify-between font-extrabold text-xl rounded-[5px] place-items-center ">
      <div className=" hover:text-white">
        <Link to={"/"}>
          <button>Unilogo</button>
        </Link>
      </div>

      <div className=" group transition  hover:text-white ">
        <Link to={"/find-job"}>
          <button>Home</button>
        </Link>
        <span className={`block max-w-0 group-hover:max-w-full transition-all bg-white h-[0.2vh] duration-500 `}/>
      </div>
      <div className=" group transition  hover:text-white ">
        <Link to={"/"}>
          <button>Jobs</button>
        </Link>
        <span className={`block max-w-0 group-hover:max-w-full transition-all bg-white h-[0.2vh] duration-500 `}/>
      </div>

      <div >
        <Link to={"/find-job/get-started"}>
          <button
            type="button"
            className="text-lg  text-white px-2 h-[4vh] rounded-[4px] bg-[#9445FF]"
          >
            Get-Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CandidateNavbar;
