import React from "react";
import { Link } from "react-router-dom";
import { Radio, Label, TextInput, Checkbox, Badge } from "flowbite-react";
import filter from "../assets/candidate/dashboard/filter.svg";
import bookmarkIcon from "../assets/jobcard/bookmark.png";
import locationIcon from "../assets/jobcard/location.png";
function JobCard(props) {
  const image = props.image;
  const companyName = props.companyName;
  const rating = props.rating;
  const jobTitle = props.jobTitle;
  const location = props.location;
  const containerStyle = {
    width: "20vw",
    // height: "80vh",
    // marginTop: "30px",
    borderRadius: `8px`,
    // border: `1px  solid rgba(67,73,85,0.23)`,
    border: `1px  solid rgba(92,101,117,0.23)`,
    boxShadow: "0 0 21px 1px rgba(0, 0, 0, 0.12)",
  };

  const containerStyle2 = {
    width: "36px",
    height: "36px",
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
    // width: "50%",
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
    <div className=" flex justify-evenly w-full ">
      <div style={containerStyle} className="p-3 w-full">
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
            <h1>{companyName}</h1>
          </div>
          {/* bookmark and rating */}
          <div className="flex gap-2">
            {/* bookmark icon */}
            <div style={containerStyle3}>
              <img
                src={bookmarkIcon}
                className="flex  justify-center w-6 h-6 mt-0.5"
              />
            </div>
            {/* rating */}
            <div style={containerStyle3}>
              <h1 className="mt-1.5 text-secondary text-opacity-80 text-xs ">
                {rating}
              </h1>
            </div>
          </div>
        </div>
        {/* job title */}
        <h1 className="font-semibold  text-secondary mt-6 mb-1">{jobTitle}</h1>
        {/* location and apply button */}
        <div className=" flex justify-between">
          {/* location icon */}
          <div className=" flex gap-2 place-items-center">
            <img src={locationIcon} className="flex  justify-center w-5 h-4"/>
            <h1 className=" text-secondary text-opacity-60 text-sm">{location}</h1>
          </div>
          {/* apply button */}
          <div>
          <button
              type="button"
              className="text-xs px-4 py-0.5 text-white  rounded-[5px] bg-[#9445FF]"
            >
              Apply
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default JobCard;
