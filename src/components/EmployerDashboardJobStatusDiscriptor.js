import React from "react";
import image from "../assets/candidate/active-young-man-thinking-1.png";

function EmployerDashboardJobStatusDiscriptor(props) {
  const containerStyle = {
    // height: "80vh",
    // marginTop: "30px",
    borderRadius: `8px`,
    // border: `1px  solid rgba(67,73,85,0.23)`,
    border: `1px  solid rgba(92,101,117,0.23)`,
    boxShadow: "0 0 21px 1px rgba(0, 0, 0, 0.12)",
  };

  const containerStyle2 = {
    // marginTop: "30px",
    borderRadius: `9999px`,
    // border: `1px  solid rgba(67,73,85,0.23)`,
    border: `1px  solid rgba(92,101,117,0.23)`,
    boxShadow: "0 0 21px 1px rgba(0, 0, 0, 0.12)",
    padding: `6px`,
    // paddingTop:`12px`

    // display: `flex`,
  };

  return (
    <div className="sm:flex lg:block justify-around hidden md:block ">
      <div style={containerStyle} className="p-4 sm:w-full lg:w-[30vw] ">
        {/* badge,company name    bookmark,rating */}
        <div className="flex justify-between overflow-hidden">
          {/* badge and company name */}
          <div className=" flex gap-2 place-items-center text-secondary text-opacity-80 font-medium">
            {/* company logo */}
            <div
              className="w-[13vh] h-[13vh] flex justify-center place-items-center"
              style={containerStyle2}
            >
              <img
                src={image}
                className="flex place-items-center justify-evenly pt-1 h-[11vh]"
              />
            </div>
          </div>
        </div>
        <div className="flex mt-8">
          <h1 className="text-xl font-semibold">Job   : {props.jobTitle}</h1>
        </div>
        <div className="flex mt-8">
          <h1 className="text-xl font-semibold">Contact Email  : {props.aplicantEmail}</h1>
        </div>
        <div className="flex mt-8">
          <h1 className="text-xl font-semibold">Contact No  : {props.applicantNo}</h1>
        </div>
        <div className="flex mt-8">
            <a className="text-xl font-semibold hover:text-[#9345ffd5]" href={props.cv}
            target="_blank" rel="noopener noreferrer"
            >Download CV</a>
        </div>
      </div>
    </div>
  );
}

export default EmployerDashboardJobStatusDiscriptor;
