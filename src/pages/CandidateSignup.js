import React from 'react';
import {Button} from 'flowbite-react';
import Usignup from '../components/UndergraduateSignupForm';
import Psignup from '../components/PostGraduateSignupForm';
import ConfirmEmail from '../components/EmailConfirmation';
import AuthStatBar from '../components/AuthStatBar';
import CandAccountSetup from '../components/CandidateAccountSetupForm';

function CandidateSignup() {
  return (
    <div>
      <AuthStatBar/>
      <Usignup/>
    </div>
    

  )
}

export default CandidateSignup;