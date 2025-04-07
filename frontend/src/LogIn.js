import React from "react";
import { useNavigate } from 'react-router-dom';
import "./LogIn.css"; 

const LoginPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="login-container">
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>

      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form>
          <input type="email" placeholder="Enter your email" className="input-field" />
          <input type="password" placeholder="Enter your password" className="input-field" />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
