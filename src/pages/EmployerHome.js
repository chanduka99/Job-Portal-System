import React from 'react';
import { Link } from 'react-router-dom';
import Enavbar from '../components/EmployerNavbar';
import postJob from '../assets/emloyer/postJob2.svg';

function EmployerHome() {
  const mainQuote = "Your next exceptional hire is just a click away!"
  const subQuote = "Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum."
  const Epic = postJob;
  return (
    <div>
      <Enavbar/>

      <div className='flex mt-24 px-4'>

        <div>
          <p className='text-7xl'>{mainQuote}</p>
          <p className='text-secondary text-2xl  font-bold mt-9 pr-16'>{subQuote}</p>

          <div className='mt-9'>
              <Link to={"/post-job/get-started"}>
                  <button type='button' className='text-2xl text-white font-bold w-48 h-16 bg-[#9445FF] border-r-5'>
                      GetStarted
                  </button>
              </Link> 
          </div>
        </div>

        <div className=''>
          <img src={Epic} alt='no internet'></img>
        </div>

      </div>
    </div>
  )
}

export default EmployerHome;