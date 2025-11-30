import React from 'react';
import './Experience.css';
import { useTranslation } from 'react-i18next';
import { FaBriefcase } from 'react-icons/fa';
import { experiences } from '../../experienceData.js';

const ExperienceCard = ({ experience, t }) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <h3 className="experience-title">{t(experience.title)}</h3>
        <p className="experience-period">{t(experience.period)}</p>
      </div>
      <h4 className="experience-company">{t(experience.company)}</h4>
      <p className="experience-description">{t(experience.description)}</p>
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
  const { t } = useTranslation();
  return (
    <div className={`experience-container ${theme}`}>
      <div className="section-content">
        <div className="tabs-container">
          <div className="tab-item">
            <FaBriefcase />
            <span>{t('experienceTitle')}</span>
          </div>
        </div>

        <div className="experience-content">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;