import React from 'react';
import frnImage from './frn.jpg';
import groceriesImage from './groceries.jpg'
import './About.css'; 

const About = () => {
  return (
    <div className="about-page">

      <section className="main-section">
        <h1 className="section-title">What is the Food Recovery Network?</h1>
        <div className="content-container">
          <img
            src={frnImage}
            alt="frn logo"
            className="frn-image"
          />
          <div className="info-text">
            <p>
              The Food Recovery Network (FRN) is a student-led nonprofit organization 
              focused on recovering surplus food and ending hunger in the United States. 
              This movement is composed of over 8,000 college students, food suppliers, farmers,
              and business leaders. FRN was founded at the University of Maryland in 2011 by a 
              group of students who noticed perfectly good food being thrown away daily at their
              campus dining halls while community members went hungry. 
            </p>
            <button
              className="support-btn"
              onClick={() => window.open('https://www.foodrecoverynetwork.org/what-we-do', '_blank')}
            >
              Learn More!
            </button>
          </div>
        </div>
      </section>

      <section className="volunteer-section">
        <h1>How does FRN work at LMU?</h1>
        <div className="volunteer-content">
        <div className="info-text">
        <p>
        At LMU, a couple of student volunteers pick up food from the Lair every Sunday 
        morning around 8:00 a.m. Then, they drive to St. Joseph’s Center in Venice, 
        where the recovered food is delivered. St. Joseph’s Center works to provide working poor 
        families and unhoused individuals with the resources and tools to become productive, stable, 
        and self-supporting members of the community.
        </p>
        <button
          className="involvement-btn"
          onClick={() => window.location.href = '/involvement'}
        > Get Involved!</button>
      </div>
      <img
        src={groceriesImage}
        alt="vegetables"
        className="groceries-image"
      />
      </div>
    </section>
    </div>
  );
};

export default About;
