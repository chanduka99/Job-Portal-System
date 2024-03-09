import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function IsSideBar({children}) {
    const location = useLocation();
    const [show,setshow] = useState(false);
    console.log("show",show);
    useEffect(()=>{      
      if(location.pathname == "/find-job/c-dashboard-jobs-feed" || "/find-job/c-dashboard-profile" || "/find-job/c-dashboard-bookmarks" || "/find-job/c-dashboard-chat" || "/find-job/c-dashboard-reviews" || "/find-job/c-dashboard-settings" ){
        setshow(true);
        console.log(1)
      }else{
        setshow(false);
        console.log(2);
      }
    })
    
  return (
    <div>{show && children}</div>
  )
}

export default IsSideBar;