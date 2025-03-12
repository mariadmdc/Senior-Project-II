import React from "react";
import { useNavigate } from 'react-router-dom';
import "./SignUp.css"; 

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="signup-container">
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>

      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <form>
          <input type="firstName" placeholder="Enter your first name" className="input-field" />
          <input type="lastName" placeholder="Enter your last name" className="input-field" />
          <input type="email" placeholder="Enter your email" className="input-field" />
          <input type="password" placeholder="Enter your password" className="input-field" />
          <button type="submit" className="signup-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
