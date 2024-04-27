import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

function IsENavbar({children}) {
    const [show,setShow] = useState(false);
    const location = useLocation();
    useEffect(()=>{
        switch (location.pathname){
            case "/post-job" :
            case "/post-job/e-dashboard-jobs-feed":
            case "/post-job/get-started/confirm-email/e-account-setup/e-dashboard-jobs-feed":
            case "/post-job/e-dashboard-profile":
            case "/post-job/post-a-job":
            setShow(true);
            break;
            default:
                setShow(false);
        }

    },[location.pathname])
  return (
    <div>{show && children}</div>
  )
}

export default IsENavbar