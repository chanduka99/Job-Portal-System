import React from 'react';
import CAccountSetup from '../components/CandidateAccountSetupForm';
import AuthStatBar from '../components/AuthStatBar';

function CandidateAccountSetup() {
  return (
    <div>
        <AuthStatBar/>
        <CAccountSetup/>
    </div>
  )
}

export default CandidateAccountSetup;