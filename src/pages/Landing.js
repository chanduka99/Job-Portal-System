import React from 'react';
import { Link } from 'react-router-dom';
// import findJob from '../assets/landing/main/findJob.svg'
// import postJob from '../assets/landing/main/postJob.svg'
import pilot from '../assets/landing/main/JobPilot.svg'

function Landing() {
  const buttonStyle ={

  };
  return (

    <div>
        
       <div>
        <p className='flex justify-center font-black text-7xl mt-10'>Job Pilot</p>
        <p className='flex justify-center text-2xl text-center font-medium text-primary py-10 px-36'>Welcome to the Gateway of Opportunities: Connecting the aspirations of University of Ruhuna students with the dynamic landscape of employment. Explore, Connect, and Ignite your future career on our dedicated platform where students and professionals converge for mutual growth and success.
        </p>

        {/*logo of the site */}
        <div className='flex justify-center'>
          <img src={pilot} className=' w-[300px]' ></img>
        </div>

        {/* buttons */}
        <div className=' flex justify-center gap-48 mt-8'>
          <Link to={"/find-job"}>
            <button type='button' className='text-2xl text-white font-bold w-48 h-16 bg-[#9445FF] border-r-5'>
              Find Job
            </button>
          </Link>
        
          <Link to={"/post-job"} >
            <button type='button' className='text-2xl text-white font-bold w-48 h-16 bg-[#9445FF]' >
              Post Job
            </button>
          </Link>
        </div>

        </div>
    </div>
  )
}

export default Landing;