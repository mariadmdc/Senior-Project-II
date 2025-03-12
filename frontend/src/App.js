import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import "./App.css";
import LogIn from "./LogIn.js";
import SignUp from "./SignUp.js";
import Tracker from "./Tracker.js";

function Home() {
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="overlay"></div>
        <div className="content-box">
          <Header />
        </div>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <Navbar />
      <div className="page-content"><h2>About the Food Recovery Network</h2></div>
    </>
  );
}

function ScheduleMap() {
  return (
    <>
      <Navbar />
      <div className="page-content"><h2>Schedule and Map</h2></div>
    </>
  );
}

function FoodTracker() {
  return (
    <>
      <Navbar />
      <Tracker />
    </>
  );
}

function GetInvolved() {
  return (
    <>
      <Navbar />
      <div className="page-content"><h2>How to Get Involved</h2></div>
    </>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/schedule-map">Schedule/Map</Link></li>
        <li><Link to="/food-tracker">Food Tracker</Link></li>
        <li><Link to="/get-involved">Get Involved</Link></li>
      </ul>
    </nav>
  );
}

function Header() {
  const navigate = useNavigate(); 

  return (
    <header className="App-header">
      <h1>Food Recovery Network</h1>
      <h2>LMU Chapter</h2>
      <div className="button-container">
        <button className="auth-button" onClick={() => navigate("/login")}>Log In</button>
        <button className="auth-button" onClick={() => navigate("/signup")}>Sign Up</button>
      </div>
    </header>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule-map" element={<ScheduleMap />} />
        <Route path="/food-tracker" element={<FoodTracker />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
