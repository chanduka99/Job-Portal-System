import React from 'react';
import Cnavbar from '../components/CandidateNavbar';
import CSidebar from '../components/CandidateSideBar';
import Filter from '../components/CandidateDashboardFilter';
import Search from '../components/CandidateDashboardSearch';
import JobCard from '../components/CandidateDashboardJobCard';
import temperoryCompanyLogo from '../assets/99x.png'
import temperoryCompanyLogo2 from '../assets/dialog.png'
function CandidateDashboardJobFeed() {
  return (
          <div className='p-2 grid grid-cols-1  sm:grid-cols-6  gap-2 '>
            <div className='grid sm:cols-span-2'>
            <Filter/>
            </div>
            <dig className= 'col-span-1 sm:col-span-3'>
              <Search/>
              <div className='grid grid-cols-1 sm:grid-cols-2 max-h-[92vh] overflow-y-auto gap-2'>
                <JobCard image = {temperoryCompanyLogo} companyName="99x" rating ="4.2" jobTitle ="Java Developer" location = "Colombo"/>
                <JobCard image = {temperoryCompanyLogo} companyName="99x" rating ="4.2" jobTitle ="Java Developer" location = "Colombo"/>
                <JobCard image = {temperoryCompanyLogo} companyName="99x" rating ="4.2" jobTitle ="Java Developer" location = "Colombo"/>
                <JobCard image = {temperoryCompanyLogo} companyName="99x" rating ="4.2" jobTitle ="Java Developer" location = "Colombo"/>
                <JobCard image = {temperoryCompanyLogo} companyName="99x" rating ="4.2" jobTitle ="Java Developer" location = "Colombo"/>
                <JobCard image = {temperoryCompanyLogo} companyName="99x" rating ="4.2" jobTitle ="Java Developer" location = "Colombo"/>
                <JobCard image = {temperoryCompanyLogo} companyName="99x" rating ="4.2" jobTitle ="Java Developer" location = "Colombo"/>
                <JobCard image = {temperoryCompanyLogo2} companyName="Dialog" rating ="4.2" jobTitle ="Java Developer" location = "Colombo"/>
                <JobCard image = {temperoryCompanyLogo2} companyName="Dialog" rating ="4.2" jobTitle ="Java Developer" location = "Colombo"/>
                <JobCard image = {temperoryCompanyLogo2} companyName="Dialog" rating ="4.2" jobTitle ="Java Developer" location = "Colombo"/>
                <JobCard image = {temperoryCompanyLogo2} companyName="Dialog" rating ="4.2" jobTitle ="Java Developer" location = "Colombo"/>
                <JobCard image = {temperoryCompanyLogo2} companyName="Dialog" rating ="4.2" jobTitle ="Java Developer" location = "Colombo"/>
                <JobCard image = {temperoryCompanyLogo2} companyName="Dialog" rating ="4.2" jobTitle ="Java Developer" location = "Colombo"/>
                <JobCard image = {temperoryCompanyLogo2} companyName="Dialog" rating ="4.2" jobTitle ="Java Developer" location = "Colombo"/>
                <JobCard image = {temperoryCompanyLogo} companyName="99x" rating ="4.2" jobTitle ="Java Developer" location = "Colombo"/>
                <JobCard image = {temperoryCompanyLogo} companyName="99x" rating ="4.2" jobTitle ="Java Developer" location = "Colombo"/>
              </div>
            </dig>
            <div className='bg-indigo-500  sm:col-span-2 max-h-[92vh] overflow-y-auto '>
              saldfjawjf;aj
            </div>
            
          </div>
  )
}

export default CandidateDashboardJobFeed;