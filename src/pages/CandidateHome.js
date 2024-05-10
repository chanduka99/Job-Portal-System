import React from 'react';
import {Link } from 'react-router-dom';
import Cnavbar from '../components/CandidateNavbar';
import findJob from '../assets/candidate/officeBag.svg';
import { delay, motion } from "framer-motion";

function CandidateHome() {
  const mainQuote ='Find a job that suits your interest & skills';
  const subQuote = 'Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.'
  const Cpic = findJob;
  return (
    <div>
      <div className=' flex mt-24 px-4'>
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
              <Link to={"/find-job/get-started"}>
                  <motion.button type='button' className=' buttons text-2xl text-white font-bold w-48 h-16 bg-[#9445FF] border-r-5'
                  whileHover={{y:-5 , backgroundColor: "rgba(129, 60, 222, 1)"}}
                  >
                      GetStarted
                  </motion.button>
              </Link> 
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
      </div>
    </div>
  )
}

export default CandidateHome;