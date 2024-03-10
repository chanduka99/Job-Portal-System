import React from 'react';
import {Button} from 'flowbite-react';
import Csignup from '../components/CandidateSignupForm';
import ConfirmEmail from '../components/CEmailConfirmation';
import AuthStatBar from '../components/AuthStatBar';
import CandAccountSetup from '../components/CandidateAccountSetupForm';

function CandidateSignup() {
  return (
    <div>
      <AuthStatBar/>
      <Csignup/>
    </div>
    

  )
}

export default CandidateSignup;