import React from "react";
import { Link } from "react-router-dom";
import { Radio, Label, TextInput,Checkbox } from "flowbite-react";
import filter from "../assets/candidate/dashboard/filter.svg"
function DahboardFilter() {
  const containerStyle = {
    width: "100%",
    // height: "80vh",
    height: "92vh",
    // marginTop: "30px",
    borderRadius: `5px`,
    // border: `1px  solid rgba(67,73,85,0.23)`,
    border: `1px  solid rgba(92,101,117,0.23)`,
    boxShadow: "0 0 21px 1px rgba(0, 0, 0, 0.12)",
  };
  return (
    <div className="flex justify-around m-3" >
      <div style={containerStyle} className="p-3 overflow-hidden hidden lg:block">
        <div className="">
            <div className="flex justify-between">
                <h1 className=" font-black my-2">Filter</h1>
                <div className="w-5  flex align-middle">
                 <img src={filter} alt="filter"/>   
                </div>
            </div>
            <span className="block max-w-full bg-[#434955] h-[0.2vh] opacity-20"/>
            {/* Job Type */}
            <div className="mt-[16vh]">
                <h1 className=" font-black my-2">Job Type</h1>
                <div className=" flex place-items-center gap-5  text-sm mt-2 text-secondary text-opacity-80 font-medium">
                    <Checkbox />
                    <h5>Internship</h5>
                </div>
                <div className="flex place-items-center gap-5   text-sm mt-2 text-secondary text-opacity-80 font-medium">
                    <Checkbox/>
                   <h1>Post-Graduate</h1>
                </div>
                <div className="flex place-items-center gap-5   text-sm mt-2 text-secondary text-opacity-80 font-medium">
                    <Checkbox/>
                    <h1>Part-time</h1>
                </div>
                <div className=" flex place-items-center gap-5  text-sm mt-2 text-secondary text-opacity-80 font-medium">
                    <Checkbox/>
                    <h1>Remote</h1>
                </div>
            </div>
            {/* Experience Level */}
            <div>
                <h1 className=" font-black mt-8">Experience Level</h1>
                <div className=" flex place-items-center gap-5  text-sm mt-2 text-secondary text-opacity-80 font-medium">
                        <Checkbox />
                        <h5>No experience</h5>
                    </div>
                    <div className="flex place-items-center gap-5   text-sm mt-2 text-secondary text-opacity-80 font-medium">
                        <Checkbox/>
                    <h1>1-3  years</h1>
                    </div>
                    <div className="flex place-items-center gap-5   text-sm mt-2 text-secondary text-opacity-80 font-medium">
                        <Checkbox/>
                        <h1>1-5  years</h1>
                    </div>
                    <div className=" flex place-items-center gap-5  text-sm mt-2 text-secondary text-opacity-80 font-medium">
                        <Checkbox/>
                        <h1>5+  years</h1>
                    </div>
                </div>

        </div>
      </div>
    </div>
  );
}

export default DahboardFilter;
