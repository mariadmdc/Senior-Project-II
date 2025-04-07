import React, {useState} from "react";
import "./SignUp.css"; 
import {auth} from './firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      console.log("Account Created")
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="firstName" placeholder="Enter your first name" className="input-field"/>
          <input type="lastName" placeholder="Enter your last name" className="input-field" />
          <input type="email" placeholder="Enter your email" className="input-field"
                  value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="phoneNumber" placeholder="Enter your phone number" className="input-field" />
          <input type="password" placeholder="Enter your password" className="input-field" 
                  value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" className="signup-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
