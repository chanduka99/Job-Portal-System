import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaSuitcase, FaWindowClose } from "react-icons/fa";
import { LiaWindowClose } from "react-icons/lia";
import pilot from "../assets/landing/main/JobPilot.svg";
import { delay, motion } from "framer-motion";

function CandidateNavbar() {
  const [showJobs, setShowJobs] = useState(false);
  const [jobsImage, setJobsImage] = useState();
  const navigate = useNavigate();


  const jobImages = [pilot, pilot, pilot, pilot];
  //TODO: add seperate images for the job types,animate the job menu

  return (
    <div>
      {/* navbar */}
      <div className=" p-2 flex bg-gradient-to-r from-[#9345ffd5] to-[#512194] h-[7vh] text-white   justify-between text-lg  rounded-[5px] place-items-center ">
        <div className=" hover:text-white">
          <Link to={"/"}>
            <div className="rounded-full bg-white w-[60px] h-[60px] place-content-center flex ">
              <img src={pilot} className=" w-[50px] "></img>
            </div>
          </Link>
        </div>

        <div className=" group transition  hover:text-white">
          <Link to={"/find-job"}>
            <button className="flex gap-2 ">
              <FaHome className="text-xl mt-[3px]" />
              <h1>Home</h1>
            </button>
          </Link>
          <span
            className={`block max-w-0 group-hover:max-w-full transition-all bg-white h-[0.2vh] duration-500 `}
          />
        </div>
        <div className=" group transition  hover:text-white ">
          <button
            onClick={() => setShowJobs(!showJobs)}
            className="flex gap-2 "
          >
            <FaSuitcase className="text-lg mt-[4px]" />
            <h1>Jobs</h1>
          </button>
          <span
            className={`block max-w-0 group-hover:max-w-full transition-all bg-white h-[0.2vh] duration-500 `}
          />
        </div>

        <div>
          <Link to={"/find-job/get-started"}>
            <button
              type="button"
              className="text-lg  text-white px-2 h-[4vh] rounded-[4px] bg-[#9445FF]"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* jobs sub menu */}
      {showJobs && (
        <motion.div
          className={`absolute mt-1 w-[99.5%] h-[91vh] bg-white rounded-[5px]`}
          initial={{ height: "0" }}
          animate={{ height: "91vh" }}
          transition={{ duration: 0.25 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
        >
          <motion.div
            className="grid grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
          >
            {/* 1 st column for types */}
            <div className=" p-2 ml-5 mb-4 text-4xl">
              {/* close button */}
              {/* <button className="block">
                <LiaWindowClose className=" text-3xl"/>
              </button> */}
              {/* Internship */}
              <Link to={"/find-job/c-dashboard-jobs-feed"}>
                <div className={`group transition hover:text-black mt-[12vh]`}>
                  <button
                    onMouseEnter={() => setJobsImage(jobImages[0])}
                    onMouseLeave={() => setJobsImage()}
                  >
                    <h1>Internship Jobs</h1>
                  </button>
                  <span
                    className={`block max-w-0 group-hover:max-w-full transition-all bg-black h-[0.2vh] duration-500 `}
                  />
                </div>
              </Link>

              {/* Post Graduate */}
              <Link to={"/find-job/c-dashboard-jobs-feed"}>
                <div className=" group transition  hover:text-black mt-[12vh]">
                  <button
                    onMouseEnter={() => setJobsImage(jobImages[1])}
                    onMouseLeave={() => setJobsImage()}
                  >
                    <h1>Post Graduate Jobs</h1>
                  </button>
                  <span
                    className={`block max-w-0 group-hover:max-w-full transition-all bg-black h-[0.2vh] duration-500 `}
                  />
                </div>
              </Link>
              {/* Par-Time */}
              <Link to={"/find-job/c-dashboard-jobs-feed"}>
                <div className=" group transition  hover:text-black mt-[12vh]">
                  <button
                    onMouseEnter={() => setJobsImage(jobImages[2])}
                    onMouseLeave={() => setJobsImage()}
                  >
                    <h1>Part-Time Jobs</h1>
                  </button>
                  <span
                    className={`block max-w-0 group-hover:max-w-full transition-all bg-black h-[0.2vh] duration-500 `}
                  />
                </div>
              </Link>
              {/* Remote */}
              <Link to={"/find-job/c-dashboard-jobs-feed"}>
                <div className=" group transition  hover:text-black mt-[12vh]">
                  <button
                    onMouseEnter={() => setJobsImage(jobImages[3])}
                    onMouseLeave={() => setJobsImage()}
                  >
                    <h1>Remote Jobs</h1>
                  </button>
                  <span
                    className={`block max-w-0 group-hover:max-w-full transition-all bg-black h-[0.2vh] duration-500 `}
                  />
                </div>
              </Link>
            </div>
            {/* third columng for the image*/}
            <div className="flex justify-center place-items-center col-start-3 col-span-1">
              <img src={jobsImage} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default CandidateNavbar;
