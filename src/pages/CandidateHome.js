import React from 'react';
import {Link } from 'react-router-dom';
import Cnavbar from '../components/CandidateNavbar';
import findJob from '../assets/candidate/officeBag.svg';


function CandidateHome() {
  const mainQuote ='Find a job that suits your interest & skills';
  const subQuote = 'Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.'
  const Cpic = findJob;
  return (
    <div>
      <Cnavbar/>
      <div className=' flex mt-24 px-4'>
        {/* column 1 */}
        <div>
          <p className='text-7xl font-medium'>{mainQuote}</p>
          <p className='text-secondary text-2xl  font-bold mt-9 pr-16'>{subQuote}</p>

          <div className='mt-9'>
              <Link to={"/find-job/get-started"}>
                  <button type='button' className='text-2xl text-white font-bold w-48 h-16 bg-[#9445FF] border-r-5'>
                      GetStarted
                  </button>
              </Link> 
          </div>
        </div>

        {/* column 2 */}
        <div>
          <img src={Cpic} alt='no internet'></img>
        </div>
      </div>
    </div>
  )
}

export default CandidateHome;