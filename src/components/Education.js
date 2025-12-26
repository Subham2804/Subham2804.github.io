import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-card">
        <div className="education-logo-container">
          <img 
            src="/iiitkalyani.png" 
            alt="Indian Institute of Information Technology Kalyani" 
            className="education-logo"
          />
        </div>
        <div className="education-content">
          <div className="education-institution">Indian Institute of Information Technology Kalyani</div>
          <div className="education-degree">B.Tech (Computer Science & Engineering)</div>
          <div className="education-period">2017 - 2021</div>
        </div>
      </div>
    </section>
  );
};

export default Education;

