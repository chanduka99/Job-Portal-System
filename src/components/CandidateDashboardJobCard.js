import React, { useState, useRef } from "react";
import {
  TextInput,
  Modal,
} from "flowbite-react";
import {toast} from "sonner"
import bookmarkIcon from "../assets/jobcard/bookmark.png";
import locationIcon from "../assets/jobcard/location.png";
import { ApplyForJob } from "../firebase/CandidateDB";
import { useAuth } from "../contexts/AuthContext";
import { useUser } from "../contexts/UserContext";

function JobCard(props) {
  const image = props.image;
  const companyName = props.companyName;
  const jobTitle = props.jobTitle;
  const location = props.location;
  const [openModal, setOpenModal] = useState(false);
  const [CVUpload,setCVUpload] = useState(null);
  const [loading,setLoading] = useState(false);

  const emailRef = useRef();
  const contactNoRef = useRef();
  const {currentUserDetail} = useUser();

  function onCloseModal() {
    setOpenModal(false);
  }

  function handleApply() {
    setOpenModal(true);
  }

  
  function handleSubmit(){
    setLoading(true);
    if(CVUpload.size/1024 >= 1024){
      toast.error('file too large', {
        position: 'top-right',
        style: {
          background: '#FF3538',
          color: '#FFFFFF',
        },
      });
    }else{
      ApplyForJob(companyName,emailRef.current.value,contactNoRef.current.value,CVUpload,currentUserDetail);
    }
    setLoading(false);
  }

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

// container style for the job apply popup
  const containerStyle4 = {
    width:"100vh",
    marginTop:"30px",
    borderRadius: "8px",
    border:"1px solid rgba(92,101,117,0.23)",
    boxShadow:"0 0 21px 1px rgba(0,0,0,0.12)",
  };

  return (
    <div className=" flex justify-evenly w-full ">
      <div style={containerStyle} className="p-3 w-full">
        {/* badge,company name    bookmark,rating */}
        <div className="md:flex justify-between overflow-hidden">
          {/* badge and company name */}
          <div className=" md:flex gap-2 place-items-center text-secondary text-opacity-80 font-medium">
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
            {/* <div style={containerStyle3}>
              <h1 className="mt-1.5 text-secondary text-opacity-80 text-xs ">
                {rating}
              </h1>
            </div> */}
          </div>
        </div>
        {/* job title */}
        <h1 className="font-semibold  text-secondary mt-6 mb-1 flex">
          {jobTitle}
        </h1>
        {/* location and apply button */}
        <div className=" md:flex justify-between">
          {/* location icon */}
          <div className=" flex gap-2 place-items-center">
            <img src={locationIcon} className="flex  justify-center w-5 h-4" />
            <h1 className=" text-secondary text-opacity-60 text-sm">
              {location}
            </h1>
          </div>
          {/* apply button */}
          <div>
            <button
              type="button"
              className="text-xs px-4 py-0.5 text-white  rounded-[5px] bg-[#9445FF]"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      <Modal show={openModal} onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="max-h-[60vh] overflow-y-auto max-w-[70vw]">
            <div className=" flex justify-center mb-6">
              <div style={containerStyle4} className="p-8">
                <div>
                  <h1 className="font-black text-xl">Apply for {companyName}</h1>
                </div>
                <div >
                  {/* <img src={profilpic} className='w-48'/> */}
                  {/* About me */}
                  <div>
                    {/* email */}
                    <TextInput
                      className="mt-6"
                      id="applicantEmail"
                      placeholder="Email"
                      ref={emailRef}
                    />
                    {/* contact number */}
                    <TextInput
                      className="mt-6"
                      id="contactNo"
                      placeholder="Contact Number ( with country code )"
                      ref={contactNoRef}
                    />

                  </div>
                  
                </div>

                {/* CV upload */}
                <div className=" mt-12">
                  <input type="file" className="bg-[#9445FF] text-white" onChange={(event)=>setCVUpload(event.target.files[0])} />
                  <label className=" text-secondary text-opacity-80 ">   Max size 1 MB</label>
                  {/* Submit button */}
                  <div className=" flex justify-end  ">
                    <button
                      type="button"
                      className=" mt-9 text-xl  text-white text- w-32 h-10 rounded-[5px] bg-[#9445FF]"
                      onClick={handleSubmit}
                      disabled= {loading}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default JobCard;
