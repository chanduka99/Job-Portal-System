import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

function CandidateProtectedRoute({children}) {
    const {currentUser} = useAuth();
    const {currentUserDetail} = useUser();
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        setLoading(true);
      //if the user is not signed in they will be redirected to the candidate sign in page
        if(!currentUser){
            navigate("/find-job/Clogin");
      }else{
        //to come to the else part means user is signed in.Therefore check if the user is a employee/candidate
        if(currentUserDetail.type === "employer"){
          //if the signed use is a employer.then redirect to  home page
          navigate('/post-job/e-dashboard-jobs-feed');
        }
      }
        setLoading(false);
    },[currentUser,navigate,currentUserDetail])

  return (
    <div>
      {!loading && children}
    </div>
  )
}

export default CandidateProtectedRoute;