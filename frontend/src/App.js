import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="overlay"></div> 
      <div className="content-box">
        <header className="App-header">
          <h1>Food Recovery Network</h1>
          <h2>LMU Chapter</h2>
          <div className="button-container">
            <button className="auth-button">Sign Up</button>
            <button className="auth-button">Log In</button>
          </div>
        </header>
      </div>
    </div>
  );
}


export default App;
