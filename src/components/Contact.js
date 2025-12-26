import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <p className="contact-description">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>
        <div className="contact-links">
          <a href="mailto:subhams2804@gmail.com" className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>subhams2804@gmail.com</span>
          </a>
          <a href="tel:+917858977084" className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+91-7858977084</span>
          </a>
          <a 
            href="https://github.com/Subham2804" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaGithub className="contact-icon" />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/subhams2804/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

