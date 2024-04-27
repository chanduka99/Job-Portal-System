import React from 'react';
import EmployerProfileCard from '../components/EmployerDashboardPofileCard';

function EmployerDashboardProfile() {
  return (
    <div className=' flex justify-center w-full'>
      <div className='  max-h-[92vh] overflow-y-auto '>
        <EmployerProfileCard/>
      </div>
    </div>
  )
}

export default EmployerDashboardProfile