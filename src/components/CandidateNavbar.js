import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaSuitcase, FaWindowClose } from "react-icons/fa";
import { LiaWindowClose } from "react-icons/lia";
import pilot from "../assets/landing/main/JobPilot.svg";
import { delay, motion } from "framer-motion";
import { useUser } from "../contexts/UserContext";
import { useAuth } from "../contexts/AuthContext";
import internship from '../assets/candidate/menu/intern.png';
import graduted from '../assets/candidate/menu/postGraduate.png';
import partTime from '../assets/candidate/menu/PartTime.svg';
import remote from '../assets/candidate/menu/Remote.jpg';

function CandidateNavbar() {
  const [showJobs, setShowJobs] = useState(false);
  const [jobsImage, setJobsImage] = useState();
  const [showPopOver,setShowPopOver] = useState(false);
  const [avatar,setAvatar] = useState(false);
  const [avatarName,setAvatarName] = useState('');
  const navigate = useNavigate();
  const {currentUser} = useAuth();
  const {currentUserDetail} = useUser();

  useEffect(()=>{
    if(currentUser && currentUserDetail){
      // change the getStarted button to avatar-setAvatar as the profile picture
      setAvatar(currentUserDetail.profilePic)
      setAvatarName(currentUserDetail.firstName)
  }
  },[currentUser,currentUserDetail])


  const jobImages = [internship, graduted, partTime, remote];
  //TODO: add seperate images for the job types,animate the job menu


  //for the popover near the avater
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
      {/* navbar */}
      <div className=" p-2 flex bg-gradient-to-r from-[#9345ffd5] to-[#512194] h-[7vh] text-white   justify-between text-lg  rounded-[5px] place-items-center ">
        <div className=" hover:text-white">
          <Link to={"/"}>
            <div className="rounded-full bg-white w-[8vh] h-[8vh] place-content-center flex ">
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
          {/* avatar or get Started button */}
          {!avatar && (     
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
          )}
  
          {avatar && (
            <div className="flex place-items-center">
              <div className="text-sm py-1 px-3 ">
                {avatarName}
              </div>
              <div className="rounded-full bg-white w-[8vh] h-[8vh] flex justify-center place-items-center"
              onMouseEnter={()=>setShowPopOver(true)}
              onMouseLeave={()=>setShowPopOver(false)}
            >
                <img className="max-w-[7vh] max-h-[7vh]" src={avatar}/>
            </div>
            </div>

          )}

        </div>
          {/* popover for the avatar */}
      { showPopOver && (<motion.div className="flex justify-end ">
          <div className="w-[25vh] h-[5vh] rounded-sm flex justify-center place-items-center mt-1  " style={containerStyle}>
            <h1>You are logged in</h1>
          </div>
        </motion.div>)}

      {/* jobs sub menu */}
      {showJobs && (
        <motion.div
          className={` mt-1 w-[99.5%] h-[91vh] bg-white rounded-[5px]`}
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
              <img src={jobsImage}  />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default CandidateNavbar;
