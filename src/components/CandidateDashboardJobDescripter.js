import React from "react";
import { Link } from "react-router-dom";
import { Radio, Label, TextInput, Checkbox, Badge } from "flowbite-react";
import filter from "../assets/candidate/dashboard/filter.svg";
import bookmarkIcon from "../assets/jobcard/bookmark.png";
import locationIcon from "../assets/jobDesscriptor/location.png";
import workHrsIcon from "../assets/jobDesscriptor/clock.png";
import xpIcon from "../assets/jobDesscriptor/xp.png";
function JobDescriptor(props) {
  const image = props.image;
  const companyName = props.companyName;
  const jobTitle = props.jobTitle;
  const location = props.location;
  const country = props.country;
  const workingHrs = props.workingHrs;
  const experience = props.experience;
  const description = props.description;
  const responsibilities = props.responsibilities;
  const knowledgeAndExperience = props.knowledgeAndExperience;
  const containerStyle = {
    width: "38vw",
    // height: "80vh",
    // marginTop: "30px",
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

  return (
    <div className="flex justify-around  ">
      <div style={containerStyle} className="p-3">
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
        <div className="md:flex justify-around gap-2 mt-8 mb-10">
          <button
              type="button"
              className=" block text-xs px-4 py-2 text-white  rounded-[5px] bg-[#9445FF] w-1/2 mt-1 md:mt-0 "
            >
              Apply
          </button>
          <button
              type="button"
              className=" block text-xs px-4 py-2 text-white  rounded-[5px] bg-[#FFB800] w-1/2  mt-1 md:mt-0"
            >
              Add to Favourites
            </button>

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
