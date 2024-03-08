import React from 'react';
import {Link} from 'react-router-dom';

function EmployerNavbar() {
  return (
    <div className=' flex bg-gradient-to-r from-[#9345ffd5] to-[#512194] text-white justify-evenly font-extrabold text-xl'>
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
        <Link to={"/"}>
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