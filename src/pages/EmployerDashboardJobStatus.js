import React, { useEffect, useState } from "react";
import Cnavbar from "../components/CandidateNavbar";
import CSidebar from "../components/CandidateSideBar";
import Filter from "../components/CandidateDashboardFilter";
import Search from "../components/CandidateDashboardSearch";
import BookmarkCard  from "../components/CandidateDashboardBookmarkCard";
import JobCard from "../components/CandidateDashboardJobCard";
import JobStatusDiscriptor from "../components/EmployerDashboardJobStatusDiscriptor";
import temperoryCompanyLogo from "../assets/99x.png";
import temperoryCompanyLogo2 from "../assets/dialog.png";
import {GetBookmarks} from "../firebase/CandidateDB";
import { useUser } from "../contexts/UserContext";
import Tabs from '../components/EmployerDashboardJobStatusTabs'
import ApplicationCard from '../components/EmployerDashboardJobApplicationCard';
import { delay, motion } from "framer-motion";




function EmployerDashboardJobStatus() {
    const {currentUserDetail} = useUser();
    const[applications,setApplications] =useState([]);
    const [nobookmarks,setNoBookmarks] = useState(true);
    const [jobDescriptorProps,setJobDescriptorProps] = useState(null);
  
    useEffect(() => {
      if (currentUserDetail && currentUserDetail) {
        if(currentUserDetail.receivedApplications.length != 0){
          setApplications(currentUserDetail.receivedApplications);
            // GetBookmarks(bookmarkIds).then(bookmarks => {
            //   setBookmarks(bookmarks);
            // }).catch(error => {
            //   // Handle error if necessary
            //   console.error("Error fetching bookmarks:", error);
            // });
          setNoBookmarks(false);
        }
      }
    }, [currentUserDetail]); // Run effect whenever currentUserDetail changes
    
  
    function handleTap(application){
      setJobDescriptorProps({
            image:"https://99x.io/images/logo-99x-main.png",
            cv:application.cv,
            jobTitle:application.jobTitle,
            applicantEmail:application.contacEmail,
            applicantNo:application.applicantNo
      })
    }
  
  
    return (
  <div className="md:p-2 md:grid grid-cols-3  lg:grid-cols-6  gap-2 ">
        <div className="grid sm:cols-span-2">
          {/* <Filter /> */}
        </div>
        <div className="col-span-1 sm:col-span-3 mt-10">
          <Tabs/>
          {/* <Search /> */}
          <div className=" pl-6 grid max-h-[70vh] overflow-y-auto pt-4 pb-4 justify-center">
            { applications.map((application)=>
            <motion.button  
            whileHover ={{scale:1.07}}
            onClick={()=>{handleTap(application)}} className="w-min mt-4">
                <ApplicationCard 
                  jobId = {application.jobId}
                  jobTitle = {application.jobTitle}
                  aplicantEmail = {application.contacEmail}
                  applicantNo = {application.contactNo}
                />
            </motion.button>
            )}
            
          </div>
        </div>
        <div className=" sm:col-span-2  max-h-[70vh] overflow-y-auto w-full flex justify-center mt-[20vh] ">
          {!jobDescriptorProps && (<h1 className="text-secondary text-opacity-60 flex  justify-center mt-56 ">Click on a job to view the details</h1>)}
                {jobDescriptorProps && (
          <JobStatusDiscriptor {...jobDescriptorProps} />
        )}
        </div>
      </div>
    );
  }

export default EmployerDashboardJobStatus