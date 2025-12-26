import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Rust', 'Python', 'TypeScript', 'Solidity']
    },
    {
      title: 'Blockchain/DeFi',
      skills: [
        'Smart Contracts (Cosmos / CosmWasm, EVM, Solana - basic familiarity)',
        'DeFi Protocols: Perpetuals, Money Markets, Stablecoins, DEX',
        'Cross-chain Architecture & Interoperability',
        'On-chain Data Indexing & Analytics',
        'Smart Contract Security & Audits',
        'Gas Optimization & Protocol Design'
      ]
    },
    {
      title: 'Backend / Infrastructure',
      skills: [
        'Microservices Architecture',
        'Docker & Containerization',
        'Kubernetes',
        'AWS (ECS/EKS, EC2, S3, CloudWatch)',
        'CI/CD Pipelines (GitHub Actions / similar)',
        'Observability & Monitoring (metrics, logging, tracing)',
        'REST APIs & Async Systems'
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{category.title}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

