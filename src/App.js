import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Toaster, toast } from 'sonner';
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
import ESideBar from "./components/EmployerSideBar";
import IsCSideBar from "./components/IsCSideBar";
import IsESideBar from "./components/IsESideBar";
import IsCNavbar from "./components/IsCNavbar";
import IsENavbar from "./components/IsENavbar";
import CNavbar from "./components/CandidateNavbar";
import ENavbar from "./components/EmployerNavbar";
import CDahsboardBookmarks from "./pages/CandidateDashboardBookmarks";
import CDashboardChat from "./pages/CandidateDashboardChat";
import CDashboardProfile from "./pages/CandidateDashboardProfile";
import CDashboardReviews from "./pages/CandidateDashboardReviews";
import CDashboardSettings from "./pages/CandidateDashboardSettings";
import EDashboardProfile from "./pages/EmployerDashboardProfile";
import EJobPostPage from "./pages/EmployerJobPostPage";
import { AuthProvider } from "./contexts/AuthContext";
import CandidateProtectedRoute from "./components/CandidateProtectedRoute";
import { UserProvider } from "./contexts/UserContext";
import EmployerProtectedRoute from "./components/EmployerProtectedRoute";
import EDashboardJobStatus from "./pages/EmployerDashboardJobStatus";


function App() {
  return (
        <AuthProvider>
          <UserProvider>
          <IsCNavbar>
            <CNavbar/>
          </IsCNavbar>
          <IsENavbar>
            <ENavbar/>
          </IsENavbar>
          <div className="flex overflow-hidden  justify-center sm:justify-start">
            <IsCSideBar>
              <CSideBar/>
            </IsCSideBar>
            <IsESideBar>
              <ESideBar/>
            </IsESideBar>
            <div className="flex justify-center w-full">
              <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/find-job" element={<CHome/>}/>
                <Route path="/find-job/get-started" element={<CSignup/>}/>
                <Route path="/find-job/Clogin" element={<CSingin/>}/>
                <Route path="/find-job/get-started/confirm-email" element={<CandidateProtectedRoute> <CEmailConfirm/> </CandidateProtectedRoute>}/>
                <Route path="/find-job/get-started/confirm-email/c-account-setup" element={<CandidateProtectedRoute> <CAccountSetup/> </CandidateProtectedRoute>}/>
                <Route path="/find-job/get-started/confirm-email/c-account-setup/c-dashboard-jobs-feed" element={<CandidateProtectedRoute> <CDashboardJobsFeed/> </CandidateProtectedRoute>}/>
                <Route path="/find-job/c-dashboard-jobs-feed" element={<CandidateProtectedRoute> <CDashboardJobsFeed/> </CandidateProtectedRoute>}/>
                <Route path="/find-job/c-dashboard-profile" element={<CandidateProtectedRoute> <CDashboardProfile/> </CandidateProtectedRoute>}/>
                <Route path="/find-job/c-dashboard-bookmarks" element={<CandidateProtectedRoute> <CDahsboardBookmarks/> </CandidateProtectedRoute>}/>
                <Route path="/find-job/c-dashboard-chat" element={<CandidateProtectedRoute> <CDashboardChat/> </CandidateProtectedRoute>}/>
                <Route path="/find-job/c-dashboard-reviews" element={<CandidateProtectedRoute> <CDashboardReviews/> </CandidateProtectedRoute> }/>
                <Route path="/find-job/c-dashboard-settings" element={<CandidateProtectedRoute> <CDashboardSettings/> </CandidateProtectedRoute>}/>
                <Route path="/post-job" element={<EHome/>}/>
                <Route path="/post-job/post-a-job" element={<EJobPostPage/>}/>
                <Route path="/post-job/Elogin" element={<ESignin/>}/>
                <Route path="/post-job/get-started" element={<ESignup/>}/>
                <Route path="/post-job/get-started/confirm-email" element={<EmployerProtectedRoute><EEmailConfirm/></EmployerProtectedRoute>}/>
                <Route path="/post-job/get-started/confirm-email/e-account-setup" element={<EmployerProtectedRoute><EAccountSetup/></EmployerProtectedRoute>}/>
                <Route path="/post-job/get-started/confirm-email/e-account-setup/e-dashboard-jobs-feed" element={<EmployerProtectedRoute><EDashboardJobsFeed/></EmployerProtectedRoute>}/>
                <Route path="/post-job/e-dashboard-jobs-feed" element={<EmployerProtectedRoute><EDashboardJobsFeed/></EmployerProtectedRoute>}/>
                <Route path="/post-job/e-dashboard-profile" element={<EmployerProtectedRoute><EDashboardProfile/></EmployerProtectedRoute>}/>
                <Route path="/post-job/e-dashboard-job-status" element={<EmployerProtectedRoute><EDashboardJobStatus/></EmployerProtectedRoute>}/>
              </Routes>
            </div>
            <Toaster/>
          </div>
          </UserProvider>
        </AuthProvider>
  );
}

export default App;
