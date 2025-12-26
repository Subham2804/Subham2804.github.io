import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Mars Protocol Foundation',
      role: 'Backend Engineer',
      period: '2024 - Present',
      logo: '/mars-protocol-logo.jpg',
      headerColor: '#EF4136',
      summary: 'Backend engineer focused on blockchain infrastructure and smart contract development',
      description: [
        'Built Rust-based blockchain indexing pipeline and production-grade smart contract modules for perpetual futures markets',
        'Developed containerized microservices on AWS & Kubernetes with robust CI/CD pipelines',
        'Technologies: Rust, CosmWasm, Smart Contracts, AWS, Kubernetes, Docker, CI/CD'
      ]
    },
    {
      company: 'Comdex',
      role: 'Smart Contract Developer',
      period: '2021 - 2024',
      logo: '/comdex-logo.jpg',
      headerColor: '#6366f1',
      summary: 'Core contributor to Harbor Protocol, building Rust/CosmWasm smart contracts for stablecoin infrastructure',
      description: [
        'Core contributor to Harbor Protocol, authoring and optimizing Rust/CosmWasm smart contracts for stablecoin infrastructure',
        'Developed governance contracts and cross-chain integration components with focus on security and gas efficiency',
        'Technologies: Rust, CosmWasm, Smart Contracts, Governance, Cross-chain Architecture'
      ]
    },
    {
      company: 'MAQ Software',
      role: 'Software Engineer 1',
      period: '2020 - 2021',
      logo: '/maq-software-logo.jpg',
      headerColor: '#f59e0b',
      summary: 'Delivered ETL pipelines and real-time dashboards for enterprise data processing',
      description: [
        'Delivered ETL pipelines using SSIS and Azure Data Factory, and developed real-time Power BI dashboards',
        'Introduced automated testing and deployment workflows, mentored junior engineers',
        'Technologies: TypeScript, SSIS, Azure Data Factory, Power BI, SQL Server'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div 
              className="experience-header-bar" 
              style={{ backgroundColor: exp.headerColor }}
            >
              {exp.company.toUpperCase()}
            </div>
            <div className="experience-logo-container">
              <img 
                src={exp.logo || '/placeholder.png'} 
                alt={exp.company || 'Company logo'} 
                className="experience-logo"
                onError={(e) => {
                  e.target.src = '/placeholder.png';
                }}
              />
            </div>
            <div className="experience-content">
              <h3 className="experience-role">{exp.role}</h3>
              <div className="experience-period">{exp.period}</div>
              {exp.summary && (
                <p className="experience-summary">{exp.summary}</p>
              )}
              <ul className="experience-description">
                {exp.description && exp.description.map((item, idx) => (
                  <li key={idx}>{String(item)}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

