import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import CreateAccount from '../src/pages/CreateAccount.jsx';
import LoginAccount from '../src/pages/LoginAccount.jsx';
import HomeForm  from './pages/HomeForm.jsx';
import PreviewPage  from './pages/Preview.jsx';
import DownloadApp from './pages/Download.jsx';
// Home component with navigation
function Home() {
  const navigate = useNavigate();
  
  const handleStart = () => {
    navigate('/create-account/');
  };
  
  return (
    <div className="content">
      <h1 className="title">
        Get your assignments and case studies in few minutes
      </h1>
      <button className="start-button" onClick={handleStart}>
        start
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="phone-frame">
          <div className="phone-screen">
            <Routes>
              <Route path="/" element={<HomeForm />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/login" element={<LoginAccount/>} />
              <Route path="/home" element={<HomeForm/>} />
              <Route path="/preview" element={<PreviewPage/>}/> 
              <Route path="/download" element={<DownloadApp/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;