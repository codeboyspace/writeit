import React from 'react';
import './CreateAccount.css'; // Ensure this CSS file exists
import googleIcon from '../assets/google.png'; // Import the Google image
import githubIcon from '../assets/github.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CreateAccount = () => {
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  const handleLogin = () => {
    navigate('/login'); // ✅ This will now work correctly
  };

  return (
    <div className="create-account-container">
      <div className="header-text">
        <p onClick={handleLogin} style={{ cursor: 'pointer'}}>
          I have an account!
        </p>
      </div>

      <div className="form-title">
        <h1>Create your account</h1>
      </div>

      <form>
        <div className="form-group">
          <label>Your sweet name</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" />
        </div>

        <div className="button-container">
          <button type="submit">Create</button>
        </div>
      </form>

      <div className="social-login">
        <a href="#">
          <img src={googleIcon} alt="Google" />
        </a>
        <a href="#">
          <img src={githubIcon} alt="GitHub" style={{ width: '50px', height: '50px' }} /> {/* Increase size */}
        </a>
      </div>
    </div>
  );
};

export default CreateAccount;
