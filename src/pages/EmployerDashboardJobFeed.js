import React, { useEffect, useState } from "react";
import Cnavbar from "../components/CandidateNavbar";
import CSidebar from "../components/CandidateSideBar";
import Filter from "../components/CandidateDashboardFilter";
import Search from "../components/CandidateDashboardSearch";
import EJobCard from "../components/EmployerDashboardJobCard";
import EJobDescriptor from "../components/EmployerDashboardJobDescriptor";
import SMFilterSearch from "../components/SMFilterSearch";
import { GetJobs } from "../firebase/CandidateDB";
import { delay, motion } from "framer-motion";

function EmployerDashboardJobFeed() {
  //need to fetch the data  from the database HERE I JUST HARD CODED IT. fetcht the data from the database and putinsid this array with useState hook
  const [jobs, setJobs] = useState([]);

  const [jobDescriptorProps, setJobDescriptorProps] = useState(null);

  useEffect(() => {
    var ReturnOfjobsPromise = GetJobs();
    console.log(
      ReturnOfjobsPromise.then((jobs) => {
        setJobs(jobs);
      })
    );
  }, []);

  function handleTap(job) {
    setJobDescriptorProps({
      companyName: job.employerName,
      jobTitle: job.jobTitle,
      country: job.country,
      location: job.city,
      workingHrs: job.jobTimeType,
      experience: job.experienceLevel,
      description: job.jobDescription,
      responsibilities: job.jobResponsibilites,
      knowledgeAndExperience: job.knowledgeAndExperience,
      jobId: job.id,
      employerEmail: job.employerEmail,
      profilePic : job.employerPic,
    });
  }

  return (
    //mainContainer
    <div className="lg:grid lg:grid-cols-10">
      {/* filter container  hide in mobile screens*/}
      <div className="lg:col-span-2 lg:justify-around">
        <Filter />
        <SMFilterSearch />
      </div>
      {/* search container + jobcard container */}
      <div className="lg:col-span-8 lg:mt-3 lg:mr-3 w-full ">
        {/* search bar should be hidden in mobile screen */}
        <Search />
        {/* this is only for the mid Screens */}
        <div className="sm:grid sm:grid-cols-5 lg:mt-3 lg:grid lg:grid-cols-7">
          {/*only in the mid screens jobcard part get 2 columns and job descrptor gets 3 columns */}
          <div className=" grid grid-cols-1 max-h-[90vh] overflow-auto sm:ml-3 sm:col-span-2 lg:col-span-4 lg:grid lg:grid-cols-2 md:max-h-[80vh] md:overflow-auto">
            {jobs.map((job) => (
              <motion.button
              whileHover ={{scale:1.07}}
                onClick={() => {
                  handleTap(job);
                }}
                className="w-[80vw] sm:w-[35vw] md:w-[20vw] flex justify-around mt-3 mr-2  "
              >
                <EJobCard
                  companyName={job.employerName}
                  jobId={job.id}
                  jobTitle={job.jobTitle}
                  location={job.city}
                  employerEmail={job.employerEmail}
                  profilePic = {job.employerPic}
                />
              </motion.button>
            ))}
          </div>
          {/* jobDescriptor container hide in mobile screens */}
          <div className="sm:col-span-3 lg:col-span-3 lg:w-[32vw] lg:mx-2">
            {!jobDescriptorProps && (
              <h1 className="text-secondary text-opacity-60 flex  justify-center mt-56 ">
                Click on a job to view the details
              </h1>
            )}
            {jobDescriptorProps && <EJobDescriptor {...jobDescriptorProps} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployerDashboardJobFeed;
