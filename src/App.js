import { Routes, Route } from "react-router-dom";
import './App.css';
import Landing from './pages/Landing';
import CHome from './pages/CandidateHome';
import EHome from './pages/EmployerHome';

function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/find-job" element={<CHome/>}/>
      <Route path="/post-job" element={<EHome/>}/>
    </Routes>
  );
}

export default App;
