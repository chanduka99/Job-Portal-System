import React from 'react';
import { Link } from 'react-router-dom';

function CandidateNavbar() {
  return (
    <div className=' flex bg-[#512194] text-white justify-evenly font-extrabold text-xl'>
        <div>
            <Link to={"/"}>
                <button>
                    Unilogo
                </button>
            </Link>
        </div>

        <div>
            <Link to={"/find-job"}>
                <button>
                    Home
                </button>
            </Link>
        </div>
        <div>
        <Link to={"/"}>
                <button>
                    Jobs
                </button>
            </Link>
            
        </div>

        <div>
        <Link to={"/find-job/get-started"}>
                <button>
                    GetStarted
                </button>
            </Link> 
        </div>

    </div>
  )
}

export default CandidateNavbar;