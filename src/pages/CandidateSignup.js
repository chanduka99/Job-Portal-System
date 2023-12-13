import React from 'react';
import {Button} from 'flowbite-react';
import Usignup from '../components/UndergraduateSignupForm';
import Psignup from '../components/PostGraduateSignupForm';
import AuthStatBar from '../components/AuthStatBar';

function CandidateSignup() {
  return (
    <div>
      <AuthStatBar/>
      <Usignup/>
      <Psignup/>
    </div>
    

  )
}

export default CandidateSignup;