import React from 'react';
import {Link} from 'react-router-dom';

function EmployerNavbar() {
  return (
    <div className=' p-2 flex bg-gradient-to-r from-[#9345ffd5] to-[#512194] h-[6vh] text-white text-opacity-80  justify-between font-extrabold text-xl rounded-[5px] place-items-center'>
        <div className=" group transition  hover:text-white ">
            <Link to={"/"}>
                <button>
                    Unilogo
                </button>
                <span className={`block max-w-0 group-hover:max-w-full transition-all bg-white h-[0.2vh] duration-500 `}/>
            </Link>
        </div>

        <div className=" group transition  hover:text-white ">
            <Link to={"/post-job"}>
                <button>
                    Home
                </button>
            </Link>
            <span className={`block max-w-0 group-hover:max-w-full transition-all bg-white h-[0.2vh] duration-500 `}/>
        </div>
        <div className=" group transition  hover:text-white ">
        <Link to={"/post-job/post-a-job"}>
                <button>
                    Post
                </button>
                <span className={`block max-w-0 group-hover:max-w-full transition-all bg-white h-[0.2vh] duration-500 `}/>
            </Link>
            
        </div>

        <div >
        <Link to={"/post-job/get-started"}>
                <button>
                    GetStarted
                </button>
            </Link> 
        </div>

    </div>
  )
}

export default EmployerNavbar;