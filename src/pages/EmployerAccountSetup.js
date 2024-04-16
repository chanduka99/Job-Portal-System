import React from 'react';
import EAccountSetup from '../components/EmployerAccountSetupForm';
import AuthStatBar from '../components/AuthStatBar';

function EmployerAccountSetup() {
  return (
    <div>
        <AuthStatBar/>
        <div className='max-h-[92vh] overflow-auto'>
          <EAccountSetup/>
        </div>
    </div>
  )
}

export default EmployerAccountSetup