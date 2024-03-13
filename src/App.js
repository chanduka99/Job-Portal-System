import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Landing from './pages/Landing';
import CHome from './pages/CandidateHome';
import EHome from './pages/EmployerHome';
import CSignup from './pages/CandidateSignup';
import CSingin from './pages/CandidateSignIn';
import ESignup from './pages/EmployerSignup';
import ESignin from './pages/EmployerSignIn';
import CAccountSetup from './pages/CandidateAccountSetup';
import EAccountSetup from "./pages/EmployerAccountSetup";
import CEmailConfirm from './pages/CandidateEmailConfirm';
import CDashboardJobsFeed from './pages/CandidateDashboardJobFeed'
import EDashboardJobsFeed from './pages/EmployerDashboardJobFeed'
import EEmailConfirm from "./pages/EmployerEmailConfirm";
import CSideBar from "./components/CandidateSideBar";
import IsCSideBar from "./components/IsCSideBar";
import IsCNavbar from "./components/IsCNavbar";
import IsENavbar from "./components/IsENavbar";
import CNavbar from "./components/CandidateNavbar";
import ENavbar from "./components/EmployerNavbar";
import CDahsboardBookmarks from "./pages/CandidateDashboardBookmarks";
import CDashboardChat from "./pages/CandidateDashboardChat";
import CDashboardProfile from "./pages/CandidateDashboardProfile";
import CDashboardReviews from "./pages/CandidateDashboardReviews";
import CDashboardSettings from "./pages/CandidateDashboardSettings";

function App() {
  return (
    <BrowserRouter >
    <IsCNavbar>
      <CNavbar/>
    </IsCNavbar>
    <IsENavbar>
      <ENavbar/>
    </IsENavbar>
    <div className="flex">
    <IsCSideBar>
      <CSideBar/>
    </IsCSideBar>

    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/find-job" element={<CHome/>}/>
      <Route path="/find-job/get-started" element={<CSignup/>}/>
      <Route path="/find-job/Clogin" element={<CSingin/>}/>
      <Route path="/find-job/get-started/confirm-email" element={<CEmailConfirm/>}/>
      <Route path="/find-job/get-started/confirm-email/c-account-setup" element={<CAccountSetup/>}/>
      <Route path="/find-job/get-started/confirm-email/c-account-setup/c-dashboard-jobs-feed" element={<CDashboardJobsFeed/>}/>
      <Route path="/find-job/c-dashboard-jobs-feed" element={<CDashboardJobsFeed/>}/>
      <Route path="/find-job/c-dashboard-profile" element={<CDashboardProfile/>}/>
      <Route path="/find-job/c-dashboard-bookmarks" element={<CDahsboardBookmarks/>}/>
      <Route path="/find-job/c-dashboard-chat" element={<CDashboardChat/>}/>
      <Route path="/find-job/c-dashboard-reviews" element={<CDashboardReviews/>}/>
      <Route path="/find-job/c-dashboard-settings" element={<CDashboardSettings/>}/>
      <Route path="/post-job" element={<EHome/>}/>
      <Route path="/post-job/Elogin" element={<ESignin/>}/>
      <Route path="/post-job/get-started" element={<ESignup/>}/>
      <Route path="/post-job/get-started/confirm-email" element={<EEmailConfirm/>}/>
      <Route path="/post-job/get-started/confirm-email/e-account-setup" element={<EAccountSetup/>}/>
      <Route path="/post-job/get-started/confirm-email/e-account-setup/e-dashboard-jobs-feed" element={<EDashboardJobsFeed/>}/>
      <Route path="/post-job/e-dashboard-jobs-feed" element={<EDashboardJobsFeed/>}/>
    </Routes>
    </div>
    </BrowserRouter> 

  );
}

export default App;
