import React, { useEffect, useState } from "react";
import Cnavbar from "../components/CandidateNavbar";
import CSidebar from "../components/CandidateSideBar";
import Filter from "../components/CandidateDashboardFilter";
import Search from "../components/CandidateDashboardSearch";
import JobCard from "../components/CandidateDashboardJobCard";
import JobDescriptor from "../components/CandidateDashboardJobDescripter";
import { GetJobs } from "../firebase/CandidateDB";
function CandidateDashboardJobFeed() {


  //need to fetch the data  from the database HERE I JUST HARD CODED IT. fetcht the data from the database and putinsid this array with useState hook
  const [jobs,setJobs] = useState([
    // {image: "https://99x.io/images/logo-99x-main.png",companyName: "99x" , rating: "4.2", jobTitle: "Java Developer" , location: "Colombo"},
    // {image: "https://99x.io/images/logo-99x-main.png",companyName: "99x" , rating: "4.2", jobTitle: "Java Developer" , location: "Colombo"},
    // {image: "https://99x.io/images/logo-99x-main.png",companyName: "99x" , rating: "4.2", jobTitle: "Java Developer" , location: "Colombo"},
    // {image: "https://99x.io/images/logo-99x-main.png",companyName: "99x" , rating: "4.2", jobTitle: "Java Developer" , location: "Colombo"},
    // {image: "https://99x.io/images/logo-99x-main.png",companyName: "99x" , rating: "4.2", jobTitle: "Java Developer" , location: "Colombo"},
    // {image: "https://99x.io/images/logo-99x-main.png",companyName: "99x" , rating: "4.2", jobTitle: "Java Developer" , location: "Colombo"},
    // {image: "https://99x.io/images/logo-99x-main.png",companyName: "99x" , rating: "4.2", jobTitle: "Java Developer" , location: "Colombo"},
    // {image: "https://99x.io/images/logo-99x-main.png",companyName: "99x" , rating: "4.2", jobTitle: "Java Developer" , location: "Colombo"},
    // {image: "https://99x.io/images/logo-99x-main.png",companyName: "99x" , rating: "4.2", jobTitle: "Java Developer" , location: "Colombo"},
    // {image: "https://e7.pngegg.com/pngimages/514/56/png-clipart-dialog-axiata-axiata-group-xl-axiata-colombo-dialog-broadband-networks-dialog-axiata-angle-rectangle.png",companyName: "Dialog" , rating: "4.2", jobTitle: "Java Developer" , location: "Galle"},
    // {image: "https://e7.pngegg.com/pngimages/514/56/png-clipart-dialog-axiata-axiata-group-xl-axiata-colombo-dialog-broadband-networks-dialog-axiata-angle-rectangle.png",companyName: "Dialog" , rating: "4.2", jobTitle: "Java Developer" , location: "Galle"},
    // {image: "https://e7.pngegg.com/pngimages/514/56/png-clipart-dialog-axiata-axiata-group-xl-axiata-colombo-dialog-broadband-networks-dialog-axiata-angle-rectangle.png",companyName: "Dialog" , rating: "4.2", jobTitle: "Java Developer" , location: "Galle"},
    // {image: "https://e7.pngegg.com/pngimages/514/56/png-clipart-dialog-axiata-axiata-group-xl-axiata-colombo-dialog-broadband-networks-dialog-axiata-angle-rectangle.png",companyName: "Dialog" , rating: "4.2", jobTitle: "Java Developer" , location: "Galle"},
    // {image: "https://e7.pngegg.com/pngimages/514/56/png-clipart-dialog-axiata-axiata-group-xl-axiata-colombo-dialog-broadband-networks-dialog-axiata-angle-rectangle.png",companyName: "Dialog" , rating: "4.2", jobTitle: "Java Developer" , location: "Galle"},
    // {image: "https://e7.pngegg.com/pngimages/514/56/png-clipart-dialog-axiata-axiata-group-xl-axiata-colombo-dialog-broadband-networks-dialog-axiata-angle-rectangle.png",companyName: "Dialog" , rating: "4.2", jobTitle: "Java Developer" , location: "Galle"},
    // {image: "https://e7.pngegg.com/pngimages/514/56/png-clipart-dialog-axiata-axiata-group-xl-axiata-colombo-dialog-broadband-networks-dialog-axiata-angle-rectangle.png",companyName: "Dialog" , rating: "4.2", jobTitle: "Java Developer" , location: "Galle"},

  ]);
  const [jobDescriptorProps,setJobDescriptorProps] = useState(null);

  useEffect(()=>{
    var ReturnOfjobsPromise = GetJobs();
    console.log(ReturnOfjobsPromise.then((jobs)=>{setJobs(jobs)}));

  },[])

  function handleTap(job){
    setJobDescriptorProps({
          image:"https://99x.io/images/logo-99x-main.png",
          companyName:job.employerName,
          jobTitle:"Java Developer",
          country:job.country,
          location:job.city,
          workingHrs:job.jobTimeType,
          experience:job.experienceLevel,
          description:job.jobDescription,
          responsibilities : job.jobResponsibilites ,
          knowledgeAndExperience :job.knowledgeAndExperience,
          jobId:job.id
    })
  }

  return (
    <div className="p-2 grid grid-cols-1  sm:grid-cols-6  gap-2 ">
      <div className="grid sm:cols-span-2">
        <Filter />
      </div>
      <div className="col-span-1 sm:col-span-3">
        <Search />
        <div className="grid grid-cols-1 sm:grid-cols-2 max-h-[92vh] overflow-y-auto gap-y-2">
          {jobs.map((job)=>
          <button onClick={()=>{handleTap(job)}}>
              <JobCard 
                image = {"https://99x.io/images/logo-99x-main.png"}
                companyName = {job.employerName}
                jobId = {job.id}
                jobTitle = {job.jobTitle}
                location = {job.city}
                employerEmail = {job.employerEmail}
              />
          </button>
          )}
        </div>
      </div>
      <div className=" sm:col-span-2 max-h-[92vh] overflow-y-auto w-full  ">
        {/* <JobDescriptor
          image="https://99x.io/images/logo-99x-main.png"
          companyName="99x"
          jobTitle="Java Developer"
          country="Sri Lanka"
          location="Colombo"
          workingHrs="Full time"
          experience="2 Year"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tempor lectus, at vulputate risus. Integer et interdum turpis. Nunc a nunc neque. Cras fringilla posuere elit vitae tempus. Pellentesque sed sem accumsan, condimentum sapien non, fringilla lorem. "
          responsibilities = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tempor lectus, at vulputate risus. Integer et interdum turpis. Nunc a nunc neque. Cras fringilla posuere elit vitae tempus. Pellentesque sed sem accumsan, condimentum sapien non, fringilla lorem. "
          knowledgeAndExperience = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tempor lectus, at vulputate risus. Integer et interdum turpis. Nunc a nunc neque. Cras fringilla posuere elit vitae tempus. Pellentesque sed sem accumsan, condimentum sapien non, fringilla lorem. "
        /> */}
              {jobDescriptorProps && (
        <JobDescriptor {...jobDescriptorProps} />
      )}
      </div>
    </div>
  );
}

export default CandidateDashboardJobFeed;
