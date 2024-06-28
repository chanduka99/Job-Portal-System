import React from 'react';
import { Link } from 'react-router-dom';
// import findJob from '../assets/landing/main/findJob.svg'
// import postJob from '../assets/landing/main/postJob.svg'
import pilot from '../assets/landing/main/JobPilot.svg'
import { delay, motion } from "framer-motion";

function Landing() {
  return (

        
       <div>
        <motion.div 
          initial= {{opacity:0}}
          animate ={{opacity:1}}
          transition={{delay:1.5 , duration: 1.5}}
        >
          <p className='flex justify-center font-black text-7xl mt-10'> Pilot</p>
          <h1 className='hidden sm:block  justify-center text-2xl text-center font-medium text-primary pt-10 px-36'>Welcome to the Gateway of Opportunities: Connecting the aspirations of University of Ruhuna students with the dynamic landscape of employment.
          </h1>
          <h1 className='hidden md:block  justify-center text-2xl text-center font-medium text-primary  px-36'> Explore, Connect, and Ignite your future career on our dedicated platform where students and professionals converge for mutual growth and success.
          </h1>
        </motion.div>

        {/*logo of the site */}
        <motion.div className='mt-16 sm:mt-0 sm:flex sm:justify-center'
          initial = {{opacity: 0 ,y:70}}
          animate = {{opacity:1 , y:0}}
          transition={{ delay:0.3 , duration : 1.2}}
        >
          <img src={pilot} className=' w-[300px]' alt='Job Pilot' ></img>
        </motion.div>

        {/* buttons */}
        <motion.div className='justify-around sm:flex sm:justify-center sm:gap-48 sm:mt-8 mt-16'
          initial={{opacity:0}}
          animate ={{opacity:1}}
          transition={{delay:2, duration:1}}
          
        >
          <div className='flex justify-center'>
            <Link to={"/find-job"}>
              <motion.button type='button' className=' buttons text-2xl text-white font-bold w-48 h-16 bg-[#9445FF] border-r-5'
                whileHover={{y:-5 , backgroundColor: "rgba(129, 60, 222, 1)"}}
              >
                Find  Job
              </motion.button>
            </Link>
          </div>
          <div className='flex justify-center mt-5 sm:mt-0'>
            <Link to={"/post-job"} >
                <motion.button type='button' className='buttons text-2xl text-white font-bold w-48 h-16 bg-[#9445FF]' 
                  whileHover={{y:-5, backgroundColor: "rgba(129, 60, 222, 1)" }}
                >
                  Post  Job
                </motion.button>
            </Link>
          </div>        
        </motion.div>

        </div>
  )
}

export default Landing;