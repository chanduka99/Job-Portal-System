import { Routes, Route } from "react-router-dom";
import './App.css';
import Landing from './pages/Landing';
import CHome from './pages/CandidateHome';
import EHome from './pages/EmployerHome';
import CSignup from './pages/CandidateSignup';
import ESignup from './pages/EmployerSignup';
import CAccountSetup from './pages/CandidateAccountSetup';
import CEmailConfirm from './pages/CandidateEmailConfirm';
import CDashboardJobsFeed from './pages/DashboardJobFeed'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/find-job" element={<CHome/>}/>
      <Route path="/find-job/get-started" element={<CSignup/>}/>
      <Route path="/find-job/get-started/confirm-email" element={<CEmailConfirm/>}/>
      <Route path="/find-job/get-started/confirm-email/c-account-setup" element={<CAccountSetup/>}/>
      <Route path="/find-job/get-started/confirm-email/c-account-setup/c-dashboard-jobs-feed" element={<CDashboardJobsFeed/>}/>
      <Route path="/post-job" element={<EHome/>}/>
      <Route path="/post-job/get-started" element={<ESignup/>}/>
    </Routes>
  );
}

export default App;
