import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import LogIn from "./LogIn.js";
import SignUp from "./SignUp.js";
import Tracker from "./Tracker.js";
import GetInvolved from "./GetInvolved.js";
import About from "./About.js";
import Schedule from "./Schedule.js";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Home({ user }) {
  return (
    <>
      <div className="App">
        <div className="overlay"></div>
        <div className="content-box">
          <Header user={user} />
        </div>
      </div>
      <div className="home-banner">
        <p>
          22.9 million pounds recovered. 19 million meals donated. 7419.5 metric tons of CO2e prevented. 
        </p>
      </div>
    </>
  );
}

function ScheduleMap() {
  return (
    <>
      <Schedule />
    </>
  );
}

function FoodTracker() {
  return (
    <>
      <Tracker />
    </>
  );
}

function Involvement() {
  return (
    <>
      <GetInvolved />
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
        <li><Link to="/involvement">Get Involved</Link></li>
      </ul>
    </nav>
  );
}

function Header({ user }) {
  const navigate = useNavigate(); 

  return (
    <header className="App-header">
      <h1>Food Recovery Network</h1>
      <h2>LMU Chapter</h2>
      <div className="button-container">
        {!user ? (
          <>
            <button className="auth-button" onClick={() => navigate("/login")}>Log In</button>
            <button className="auth-button" onClick={() => navigate("/signup")}>Sign Up</button>
          </>
        ) : (
          <button className="auth-button" onClick={() => signOut(auth)}>Log Out</button>
        )}
      </div>
    </header>
  );
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule-map" element={<ScheduleMap />} />
        <Route path="/food-tracker" element={<FoodTracker />} />
        <Route path="/involvement" element={<Involvement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
