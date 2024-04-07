import React, { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';

function CandidateProtectedRoute({children}) {
    const {currentUser} =useAuth();
    const navigate = useNavigate();

    useEffect(()=>{

      //if the user is not signed in they will be redirected to the candidate sign in page
        if(!currentUser){
          navigate("/find-job/Clogin")
      }
    },[currentUser,navigate])

  return (
    <div>
      {children}
    </div>
  )
}

export default CandidateProtectedRoute;