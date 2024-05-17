import React, { useEffect, useState } from "react";
import Cnavbar from "../components/CandidateNavbar";
import CSidebar from "../components/CandidateSideBar";
import Filter from "../components/CandidateDashboardFilter";
import Search from "../components/CandidateDashboardSearch";
import BookmarkCard  from "../components/CandidateDashboardBookmarkCard";
import JobCard from "../components/CandidateDashboardJobCard";
import JobDescriptor from "../components/CandidateDashboardJobDescripter";
import temperoryCompanyLogo from "../assets/99x.png";
import temperoryCompanyLogo2 from "../assets/dialog.png";
import {GetBookmarks} from "../firebase/CandidateDB";
import { useUser } from "../contexts/UserContext";
import Tabs from "../components/CandidateDashboardBookmarkTabs";
import { motion } from "framer-motion";

function CandidateDashboardBookmarks() {
  const {currentUserDetail} = useUser();
  const[bookmarks,setBookmarks] =useState([]);
  const [nobookmarks,setNoBookmarks] = useState(true);
  const [jobDescriptorProps,setJobDescriptorProps] = useState(null);

  useEffect(() => {
    if (currentUserDetail && currentUserDetail.bookmarkedJobs) {
      if(currentUserDetail.bookmarkedJobs != 0){
        let bookmarkIds = currentUserDetail.bookmarkedJobs;
          GetBookmarks(bookmarkIds).then(bookmarks => {
            setBookmarks(bookmarks);
          }).catch(error => {
            // Handle error if necessary
            console.error("Error fetching bookmarks:", error);
          });
        setNoBookmarks(false);
      }
    }
  }, [currentUserDetail]); // Run effect whenever currentUserDetail changes
  

  function handleTap(job){
    setJobDescriptorProps({
          image:"https://99x.io/images/logo-99x-main.png",
          companyName:job.employerName,
          jobTitle:job.jobTitle,
          country:job.country,
          location:job.city,
          workingHrs:job.jobTimeType,
          experience:job.experienceLevel,
          description:job.jobDescription,
          responsibilities : job.jobResponsibilites ,
          knowledgeAndExperience :job.knowledgeAndExperience,
          jobId:job.id,
          employerEmail: job.employerEmail
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
        <div className=" pl-6 grid sm:grid-cols-2 sm:gap-x-6 max-h-[92vh] overflow-y-auto gap-y-6 ">
          { bookmarks.map((bookmark)=>
          <motion.button onClick={()=>{handleTap(bookmark)}}
           className="w-min"
           whileHover ={{scale:1.07}}
           >
              <BookmarkCard 
                image = {"https://99x.io/images/logo-99x-main.png"}
                companyName = {bookmark.employerName}
                bookmarkId = {bookmark.id}
                jobTitle = {bookmark.jobTitle}
                location = {bookmark.city}
                employerEmail = {bookmark.employerEmail}
                profilePic ={bookmark.employerPic}
              />
          </motion.button>
          )}
        </div>
      </div>
      <div className=" sm:col-span-2 max-h-[92vh] overflow-y-auto w-full  ">
        {!jobDescriptorProps && (<h1 className="text-secondary text-opacity-60 flex  justify-center mt-56 ">Click on a job to view the details</h1>)}
              {jobDescriptorProps && (
        <JobDescriptor {...jobDescriptorProps} />
      )}
      </div>
    </div>
  );
}

export default CandidateDashboardBookmarks;
