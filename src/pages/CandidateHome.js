import React from 'react';
import {Link } from 'react-router-dom';
import Cnavbar from '../components/CandidateNavbar';
import findJob from '../assets/candidate/officeBag.svg';
import { delay, motion } from "framer-motion";
import { useAuth } from '../contexts/AuthContext';
import CountUp from 'react-countup';
import { FaSuitcase,FaBuilding } from "react-icons/fa";
import { PiUsersFourBold } from "react-icons/pi";

function CandidateHome() {
  const {currentUser } = useAuth();
  const mainQuote ='Find a job that suits your interest & skills';
  const subQuote = 'Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.'
  const Cpic = findJob;

  const containerStyle = {
    // height: "80vh",
    // marginTop: "30px",
    borderRadius: `8px`,
    // border: `1px  solid rgba(67,73,85,0.23)`,
    border: `1px  solid rgba(92,101,117,0.23)`,
    boxShadow: "0 0 21px 1px rgba(0, 0, 0, 0.12)",
  };

  return (
    <div>
      <div className=' flex mt-24 px-4 relative'>
        {/* column 1 */}
        <div>
          <motion.div
          initial ={{opacity:0,y:10}}
          animate={{opacity:1,y:0}}
          transition={{delay:1,duration:1}} 
          >
            <p className='lg:text-7xl lg:font-medium'>{mainQuote}</p>
            <p className='text-lightSecondary    lg:text-xl  lg:font-bold lg:mt-9 lg:pr-16'>{subQuote}</p>
          </motion.div>

          <motion.div className='mt-9'
            initial ={{opacity:0,y:10}}
            animate={{opacity:1,y:0}}
            transition={{delay:1.5,duration:1}} 
          >
            {
              !currentUser &&  (
                <Link to={"/find-job/get-started"}>
                  <motion.button type='button' className=' buttons text-2xl text-white font-bold w-48 h-16 bg-[#9445FF] border-r-5'
                  whileHover={{y:-5 , backgroundColor: "rgba(129, 60, 222, 1)"}}
                  >
                      GetStarted
                  </motion.button>
              </Link>
              )
            }
              {/* if logged in goto dashboard button */}
            {   
              currentUser &&  (
                <Link to={"/find-job/c-dashboard-jobs-feed"}>
                  <motion.button type='button' className=' buttons text-2xl text-white font-bold p-4 h-16 bg-[#9445FF] border-r-5'
                  whileHover={{y:-5 , backgroundColor: "rgba(129, 60, 222, 1)"}}
                  >
                      Goto Dashboard
                  </motion.button>
              </Link>
              )
            }
          </motion.div>
        </div>

        {/* column 2 */}
        <motion.div
         initial={{opacity:0,x:100}}
         animate={{opacity:1,x:0}}
         transition={{delay:0.5, duration:1.5}}
        >
          <img src={Cpic} alt='no internet'></img>
        </motion.div
        >
              {/* counting animations */}
        <motion.div className=' absolute bottom-0 flex gap-48 pl-24  w-screen'
                      initial ={{opacity:0,y:10}}
                      animate={{opacity:1,y:0}}
                      transition={{delay:2,duration:1}} 
        >
          {/* jobs */}
            <div style={containerStyle} className=' bg-white px-4 py-2 flex justify-between  place-items-center w-[12vw] '>
              {/* suitcase image */}
              <div>
              <FaSuitcase className='text-4xl text-[#9445FF]' />
              </div>
              {/* counter */}
              <div>
                <CountUp end={120}  className='text-3xl' delay={2}/>
                <h1 className='text-lightSecondary font-semibold opacity-75'>jobs</h1>
              </div>
            </div>
          {/* companies */}
            <div style={containerStyle} className=' bg-white px-4 py-2 flex justify-between  place-items-center w-[12vw] '>
              {/* suitcase image */}
              <div>
              <FaBuilding className='text-4xl text-[#9445FF]' />
              </div>
              {/* counter */}
              <div>
                <CountUp end={87}  className='text-3xl' delay={2}/>
                <h1 className='text-lightSecondary font-semibold opacity-75 '>companies</h1>
              </div>
            </div>
          {/* candidates */}
            <div style={containerStyle} className=' bg-white px-4 py-2 flex justify-between  place-items-center w-[12vw] '>
              {/* suitcase image */}
              <div>
              <PiUsersFourBold className='text-4xl text-[#9445FF]' />
              </div>
              {/* counter */}
              <div>
                <CountUp end={93}  className='text-3xl' delay={2}/>
                <h1 className='text-lightSecondary font-semibold opacity-75'>Users</h1>
              </div>
            </div>
        </motion.div>
      </div>

    </div>
  )
}

export default CandidateHome;