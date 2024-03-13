import React from "react";
import Cnavbar from "../components/CandidateNavbar";
import CSidebar from "../components/CandidateSideBar";
import Filter from "../components/CandidateDashboardFilter";
import Search from "../components/CandidateDashboardSearch";
import JobCard from "../components/CandidateDashboardJobCard";
import BookmarkCard  from "../components/CandidateDashboardBookmarkCard";
import JobDescriptor from "../components/CandidateDashboardJobDescripter";
import temperoryCompanyLogo from "../assets/99x.png";
import temperoryCompanyLogo2 from "../assets/dialog.png";
function CandidateDashboardBookmarks() {
  return (
    <div className="p-2 grid grid-cols-2  sm:grid-cols-3  gap-2 ">
      {/* <div className="grid sm:cols-span-2"> */}
        {/* <Filter /> */}
      {/* </div> */}
      <dig className="col-span-1 sm:col-span-2">
        let the bookmark icon be glowing when added as a bookmark and to remove a bookmark make it such that when clicked on the bookmark icon it removes
        {/* <Search /> */}
        <div className="grid grid-cols-1 sm:grid-cols-3 max-h-[92vh] overflow-y-auto gap-2">
          <BookmarkCard
            image={temperoryCompanyLogo}
            companyName="99x"
            rating="4.2"
            jobTitle="Java Developer"
            location="Colombo"
          />
          <BookmarkCard
            image={temperoryCompanyLogo}
            companyName="99x"
            rating="4.2"
            jobTitle="Java Developer"
            location="Colombo"
          />
          <BookmarkCard
            image={temperoryCompanyLogo}
            companyName="99x"
            rating="4.2"
            jobTitle="Java Developer"
            location="Colombo"
          />
          <BookmarkCard
            image={temperoryCompanyLogo}
            companyName="99x"
            rating="4.2"
            jobTitle="Java Developer"
            location="Colombo"
          />



          
        </div>
      </dig>
      <div className=" col-span-1 max-h-[92vh] overflow-y-auto w-full  ">
        <JobDescriptor
          image={temperoryCompanyLogo}
          companyName="99x"
          jobTitle="Java Developer"
          country="Sri Lanka"
          location="Colombo"
          workingHrs="Full time"
          experience="2 Year"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tempor lectus, at vulputate risus. Integer et interdum turpis. Nunc a nunc neque. Cras fringilla posuere elit vitae tempus. Pellentesque sed sem accumsan, condimentum sapien non, fringilla lorem. "
          responsibilities = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tempor lectus, at vulputate risus. Integer et interdum turpis. Nunc a nunc neque. Cras fringilla posuere elit vitae tempus. Pellentesque sed sem accumsan, condimentum sapien non, fringilla lorem. "
          knowledgeAndExperience = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tempor lectus, at vulputate risus. Integer et interdum turpis. Nunc a nunc neque. Cras fringilla posuere elit vitae tempus. Pellentesque sed sem accumsan, condimentum sapien non, fringilla lorem. "
        />
      </div>
    </div>
  );
}

export default CandidateDashboardBookmarks;
