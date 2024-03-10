import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function IsCNavBar({ children }) {
  const [show, setshow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/find-job":
      case "/find-job/c-dashboard-jobs-feed":
      case "/find-job/get-started/confirm-email/c-account-setup/c-dashboard-jobs-feed":
      case "/find-job/c-dashboard-profile":
      case "/find-job/c-dashboard-bookmarks":
      case "/find-job/c-dashboard-chat":
      case "/find-job/c-dashboard-reviews":
      case "/find-job/c-dashboard-settings":
        setshow(true);
        break;
      default:
        setshow(false);
    }
  }, [location.pathname]);

  return (
    <div>{show && children}</div>
  );
}

export default IsCNavBar;