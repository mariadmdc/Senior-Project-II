import React, {useState} from "react";
import "./LogIn.css"; 
import {auth} from './firebase'
import {signInWithEmailAndPassword} from "firebase/auth"

const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log("Logged in successfully")
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" className="input-field" 
                  value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Enter your password" className="input-field" 
                  value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
