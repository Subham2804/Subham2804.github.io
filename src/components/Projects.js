import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Mars Protocol',
      description: 'A decentralized finance protocol offering leveraged yield strategies, perpetual trading, and cross-collateralized lending. Built fully on-chain with deep liquidity and flexible leverage options.',
      technologies: ['Rust', 'CosmWasm', 'Smart Contracts', 'AWS', 'Kubernetes', 'Docker', 'CI/CD'],
      link: 'https://marsprotocol.io/',
      contributionsLink: 'https://github.com/mars-protocol/core-contracts/blob/4ced67a0ca6eefd7a082b20e8ff39f7fd11c6c6a/Cargo.toml#L53C1-L54C1',
      image: '/mars-banner.png'
    },
    {
      title: 'Amber Finance',
      description: 'A credit protocol enabling borrowing and lending Bitcoin Related Tokens (BRTs) on Neutron. Deposit BRTs to earn yield, swap between tokens, deploy leverage strategies with up to 10x leverage, and track your positions performance with real-time analytics.',
      technologies: ['Rust', 'CosmWasm', 'Smart Contracts', 'DeFi', 'Neutron'],
      link: 'https://app.amberfi.io/',
      contributionsLink: 'https://github.com/Amber-Finance/core-contracts/blob/b508ec06e5b90ed5200fecf4be06a95574c0f1c4/Cargo.toml#L51',
      image: '/amber-finance.png'
    },
    {
      title: 'AISkin Decode',
      description: 'A backend system for AI-powered skincare analysis and recommendations. Built the entire backend infrastructure independently, handling data processing, API endpoints, and integration with AI services.',
      technologies: ['Backend', 'API Development', 'Data Processing', 'AI Integration'],
      link: 'https://aiskindecode.acnestar.com/',
      image: '/aiskin-decode.jpg'
    },
    {
      title: 'Harbor Protocol',
      description: 'A decentralized stablecoin protocol on Comdex chain with governance features. Core contributor to the governance contracts enabling proposal creation, voting, and execution for protocol upgrades and parameter changes.',
      technologies: ['Rust', 'CosmWasm', 'Smart Contracts', 'Governance'],
      link: 'https://medium.com/@Harbor_Protocol',
      contributionsLink: 'https://github.com/comdex-official/gov-contracts',
      image: '/harbor-protocol.jpg'
    }
  ];

  const achievements = [
    {
      title: 'Finalist - Smart India Hackathon 2020',
      description: 'Secured top 3 position in Smart India Hackathon 2020 under Ministry of Aayush.',
      year: '2020',
      image: '/smart_india-hackathon.jpeg'
    },
    {
      title: 'Winner - Ethernals 2022 (Polygon Track)',
      description: 'Secured 1st position in Polygon track for Spoto - A decentralized sports betting platform with Chainlink oracles, peer-to-peer betting, and NFT-based profile system.',
      year: '2022',
      link: 'https://devfolio.co/projects/spoto-70c6',
      image: '/ethernals.jpg'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2 className="section-title">Projects</h2>
        <p className="projects-subtitle">SOME PROJECTS I'VE BEEN PART OF</p>
      </div>
      
      {projects.length > 0 && (
        <div className="projects-container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-preview-image">
                  <img 
                    src={project.image || '/placeholder.png'} 
                    alt={project.title || 'Project'} 
                    className="preview-img"
                    onError={(e) => {
                      e.target.src = '/placeholder.png';
                    }}
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-links">
                    {project.link && project.link !== '#' && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        Visit Website
                      </a>
                    )}
                    {project.contributionsLink && (
                      <a href={project.contributionsLink} target="_blank" rel="noopener noreferrer" className="project-link project-link-secondary">
                        View Contributions
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="achievements-container">
        <h3 className="achievements-title">Achievements</h3>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              {achievement.image && (
                <div className="achievement-image">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title || 'Achievement'} 
                    className="achievement-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className="achievement-year">{achievement.year}</div>
              <h4 className="achievement-title">{achievement.title}</h4>
              <p className="achievement-description">{achievement.description}</p>
              {achievement.link && (
                <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="achievement-link">
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

