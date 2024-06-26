import React, { useState, useRef } from "react";
import {toast} from "sonner"
import { Modal, TextInput, } from "flowbite-react";
import locationIcon from "../assets/jobDesscriptor/location.png";
import workHrsIcon from "../assets/jobDesscriptor/clock.png";
import xpIcon from "../assets/jobDesscriptor/xp.png";
import { useAuth } from "../contexts/AuthContext";
import { useUser } from "../contexts/UserContext";
import { ApplyForJob,AddtoFavourites } from "../firebase/CandidateDB";

function JobDescriptor(props) {
  const jobId = props.jobId;
  const image = props.profilePic;
  const companyName = props.companyName;
  const employerEmail = props.employerEmail;
  const jobTitle = props.jobTitle;
  const location = props.location;
  const country = props.country;
  const workingHrs = props.workingHrs;
  const experience = props.experience;
  const description = props.description;
  const responsibilities = props.responsibilities;
  const knowledgeAndExperience = props.knowledgeAndExperience;

  const containerStyle = {
    // height: "80vh",
    marginRight: "10px",
    borderRadius: `8px`,
    // border: `1px  solid rgba(67,73,85,0.23)`,
    border: `1px  solid rgba(92,101,117,0.23)`,
    boxShadow: "0 0 21px 1px rgba(0, 0, 0, 0.12)",
  };

  const containerStyle2 = {
    width: "54px",
    height: "54px",
    // marginTop: "30px",
    borderRadius: `9999px`,
    // border: `1px  solid rgba(67,73,85,0.23)`,
    border: `1px  solid rgba(92,101,117,0.23)`,
    boxShadow: "0 0 21px 1px rgba(0, 0, 0, 0.12)",
    padding: `6px`,
    // paddingTop:`12px`

    // display: `flex`,
  };

  const containerStyle3 = {
    width: "40px",
    height: "30px",
    // marginTop: "30px",
    borderRadius: `12px`,
    // border: `1px  solid rgba(67,73,85,0.23)`,
    border: `1px  solid rgba(92,101,117,0.23)`,
    boxShadow: "0 0 21px 1px rgba(0, 0, 0, 0.08)",
    // padding: `8px`,
    // paddingTop:`12px`

    display: `flex`,
    justifyContent: `center`,
  };

  // container style for the job apply popup
  const containerStyle4 = {
    width:"100vh",
    marginTop:"30px",
    borderRadius: "8px",
    border:"1px solid rgba(92,101,117,0.23)",
    boxShadow:"0 0 21px 1px rgba(0,0,0,0.12)",
  };




  return (
    <div className="sm:flex lg:block justify-around hidden md:block ">
      <div style={containerStyle} className="p-4 sm:w-full lg:w-[31.5vw] sm:max-h-[80.5vh]  overflow-y-auto">
        {/* badge,company name    bookmark,rating */}
        <div className="flex justify-between overflow-hidden">
          {/* badge and company name */}
          <div className=" flex gap-2 place-items-center text-secondary text-opacity-80 font-medium">
            {/* company logo */}
            <div style={containerStyle2}>
              <img
                src={image}
                className="flex place-items-center justify-evenly pt-1"
              />
            </div>
            {/* company name */}
            <h1 className=" text-xl">{companyName}</h1>
          </div>
        </div>
        {/* job title */}
        <h1 className="font-semibold  text-secondary mt-6 mb-1">{jobTitle}</h1>
        {/* location and apply button */}
        <div  >
          {/* location icon */}
          <div className=" flex gap-2 place-items-center mt-6">
            <img src={locationIcon} className="flex  justify-center w-4 h-4"/>
            <h1 className=" text-secondary text-opacity-60 text-sm">{country + " "+ location}</h1>
          </div>
          {/* workHrs icon */}
          <div className=" flex gap-2 place-items-center mt-6">
            <img src={workHrsIcon} className="flex  justify-center w-4 h-4"/>
            <h1 className=" text-secondary text-opacity-60 text-sm">{workingHrs}</h1>
          </div>
          {/* xp */}
          <div className=" flex gap-2 place-items-center mt-6">
            <img src={xpIcon} className="flex  justify-center w-4 h-4"/>
            <h1 className=" text-secondary text-opacity-60 text-sm">{experience}</h1>
          </div>
        </div>
        {/* apply and add to favourites buttons*/}
        <div className="sm:flex justify-around gap-2 mt-8 mb-10">
          {/* <button
              type="button"
              className=" block text-xs px-4 py-2 text-white  rounded-[5px] bg-[#9445FF] w-1/2 mt-1 md:mt-0 opacity-40"
              disabled = {true}
            >
              Apply
          </button>
          <button
              type="button"
              className=" block text-xs px-4 py-2 text-white  rounded-[5px] bg-[#FFB800] w-1/2  mt-1 md:mt-0 opacity-40"
              disabled = {true}
            >
              Add to Favourites
            </button> */}

        </div>
        {/* Description */}
        <div>
          <div>
            <h1 className="font-semibold text-sm my-4">Description</h1>
          </div>
          <div className=" text-sm text-primary mb-3 ">
            {description}
          </div>
        </div>
        {/* Responsibilities */}
        <div>
          <div>
            <h1 className="font-semibold text-sm my-4">Responsibilities</h1>
          </div>
          <div className=" text-sm text-primary mb-3">
            {responsibilities}
          </div>
          {/* Knowledge and Experience */}
          <div>
          <div>
            <h1 className="font-semibold text-sm my-4">Knowledge and Experience</h1>
          </div>
          <div className=" text-sm text-primary mb-3">
            {knowledgeAndExperience}
          </div>
        </div>
        </div>
      </div>

      
    </div>
  );
}

export default JobDescriptor;
