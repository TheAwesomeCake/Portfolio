import React from 'react';
import './Experience.css';
import { FaBriefcase } from 'react-icons/fa';
import { experiences } from '../../experienceData.js';

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <h3 className="experience-title">{experience.title}</h3>
        <p className="experience-period">{experience.period}</p>
      </div>
      <h4 className="experience-company">{experience.company}</h4>
      <p className="experience-description">{experience.description}</p>
      {experience.technologies && experience.technologies.length > 0 && (
        <div className="experience-technologies">
          {experience.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      )}
    </div>
  );
};

const Experience = ({ theme = 'theme-yellow' }) => {
  return (
    <div className={`experience-container ${theme}`}>
      <div className="tabs-container">
        <div className="tab-item">
          <FaBriefcase />
          <span>Experiência</span>
        </div>
      </div>

      <div className="experience-content">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;