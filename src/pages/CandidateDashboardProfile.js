import React from 'react';
import CandidateProfileCard from '../components/CandidateDashboardProfileCard';

function CandidateDashboardProfile() {
  return (
    <div className=' flex-row justify-center w-full'>
      <div className='  max-h-[92vh] overflow-y-auto '>
        <CandidateProfileCard/>
      </div>
    </div>
  )
}

export default CandidateDashboardProfile