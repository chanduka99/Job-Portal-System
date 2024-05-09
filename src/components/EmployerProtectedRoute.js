import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

function EmployerProtectedRoute({children}) {
    const {currentUser} = useAuth();
    const {currentUserDetail} = useUser();
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        setLoading(true);
      //if the user is not signed in they will be redirected to the Employer sign in page
        if(!currentUser){
            navigate("/post-job/Elogin");
      }else{
        //to come to the else part means user is signed in.Therefore check if the user is a employee/Employer
        if(currentUser && currentUserDetail){   // this if is used to avoid race conditions       
          if(currentUserDetail.type === "employee"){
            //if the signed use is a employer.then redirect to  home page
            navigate('/find-job/c-dashboard-jobs-feed');
          }
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

export default EmployerProtectedRoute;