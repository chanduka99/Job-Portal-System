import React from 'react';
import CAccountSetup from '../components/CandidateAccountSetupForm';
import AuthStatBar from '../components/AuthStatBar';

function CandidateAccountSetup() {
  return (
    <div>
        <AuthStatBar/>
        <div className='max-h-[92vh] overflow-auto'>
          <CAccountSetup/>
        </div>
    </div>
  )
}

export default CandidateAccountSetup;