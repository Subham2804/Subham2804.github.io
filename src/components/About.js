import React from 'react';
import './About.css';

const About = () => {
  const technologies = [
    { name: 'Rust', icon: '🦀' },
    { name: 'Python', icon: '🐍' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Solidity', icon: '⛓️' },
    { name: 'CosmWasm', icon: '🌌' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '☸️' },
    { name: 'AWS', icon: '☁️' },
    { name: 'CI/CD', icon: '🔄' },
    { name: 'Git', icon: '📦' }
  ];

  const skills = [
    'Develop secure and efficient Smart Contracts and production-grade blockchain infrastructure',
    'With deep expertise in DeFi protocols, cross-chain architecture, and smart contract security',
    'With experience in Rust-based systems, perpetual markets, and cloud-native deployments'
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img src="/profile.jpeg" alt="Subham" className="profile-image" />
          </div>
          <div className="about-text">
            <h1 className="about-intro">
              Hi, I'm <span className="highlight">Subham</span> 👋
            </h1>
            <p className="about-description">
              A passionate Blockchain & Backend Engineer 🚀 with 4+ years of experience building Rust-based smart contracts, 
              indexing pipelines, and cloud-native services. Specialized in DeFi protocols, cross-chain architecture, and high-reliability 
              data systems.
            </p>
            <div className="about-social">
              <a 
                href="https://github.com/Subham2804" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/subhams2804/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
            <h2 className="about-title">What I do</h2>
            <p className="about-subtitle">
              BLOCKCHAIN & BACKEND ENGINEER WHO BUILDS SECURE AND SCALABLE WEB3 INFRASTRUCTURE WITH THESE TOOLS:
            </p>
            <div className="tech-stack">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  <span className="tech-icon">{tech.icon}</span>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
            <ul className="about-skills">
              {skills.map((skill, index) => (
                <li key={index} className="skill-item">
                  <span className="skill-icon">⚡</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

