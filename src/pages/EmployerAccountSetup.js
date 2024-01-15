import React from 'react';
import EAccountSetup from '../components/EmployerAccountSetupForm';
import AuthStatBar from '../components/AuthStatBar';

function EmployerAccountSetup() {
  return (
    <div>
        <AuthStatBar/>
        <EAccountSetup/>
    </div>
  )
}

export default EmployerAccountSetup