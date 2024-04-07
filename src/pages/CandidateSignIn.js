import React from 'react';
import { Link } from 'react-router-dom';
import CSingin from '../components/CandidateSignInForm';
import { Toaster , toast } from 'sonner';

function CandidateSIgnIn() {

  return (
    <div className='w-screen'>
      <CSingin/>
      <Toaster />
    </div>
  )
}

export default CandidateSIgnIn;