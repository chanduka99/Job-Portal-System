import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function IsESideBar({ children }) {
  const [showESidbar, setshowESidbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/post-job/e-dashboard-jobs-feed":
      case "/post-job/get-started/confirm-email/e-account-setup/e-dashboard-jobs-feed":
      case "/post-job/e-dashboard-profile":
      case "/post-job/post-a-job":
    //   case "/post-job/e-dashboard-bookmarks":
    //   case "/post-job/e-dashboard-chat":
    //   case "/post-job/e-dashboard-reviews":
    //   case "/post-job/e-dashboard-settings":
        setshowESidbar(true);
        break;
      default:
        setshowESidbar(false);
    }
  }, [location.pathname]);

  return (
    <div>{showESidbar && children}</div>
  );
}

export default IsESideBar;
