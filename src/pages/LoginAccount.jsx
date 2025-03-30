import React from 'react';
import './LoginAccount.css'; // Ensure this CSS file exists
import googleIcon from '../assets/google.png'; // Import the Google image
import githubIcon from '../assets/github.png';

const LoginAccount = () => {
  return (
    <div className="login-account-container">

      <div className="form-title">
        <h1>put your creds to dive into home</h1>
      </div>

      <form>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" />
        </div>

        <div className="button-container">
          <button type="submit">let's begin</button>
        </div>
      </form>

      <div className="social-login">
        <a href="#">
          <img src={googleIcon} alt="Google" />
        </a>
        <a href="#">
          <img src={githubIcon}  alt="GitHub" /> {/* Place in public/assets */}
        </a>
      </div>
    </div>
  );
};

export default LoginAccount;
