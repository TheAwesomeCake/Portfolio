import React from 'react';
import { hardSkills, softSkills, extras } from '../../skillsData.js';
import { useTranslation } from 'react-i18next';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as DiIcons from 'react-icons/di';
import * as TbIcons from 'react-icons/tb';
import './Skills.css';

const allIcons = {
  ...FaIcons,
  ...SiIcons,
  ...DiIcons,
  ...TbIcons,
};

const SkillCard = ({ skill }) => {
  const IconComponent = allIcons[skill.icon];
  return (
    <div className="skill-card">
      <div className="skill-icon">
        {IconComponent ? <IconComponent color={skill.color} /> : null}
      </div>
      <span className="skill-name">{skill.name}</span>
    </div>
  );
};

const SoftSkillCard = ({ skill, t }) => {
  const IconComponent = allIcons[skill.icon];
  return (
    <div className="soft-skill-card">
      <div className="soft-skill-header">
        <div className="soft-skill-icon">
          {IconComponent ? <IconComponent /> : null}
        </div>
        <h4 className="soft-skill-name">{t(skill.name)}</h4>
      </div>
      <p className="soft-skill-description">{t(skill.description)}</p>
    </div>
  );
};

const Skills = ({ theme = 'theme-green' }) => {
  const { t } = useTranslation();

  return (
    <div className={`skills-container ${theme}`}>
      <div className="section-content">
        <div className="tabs-container">
          <div className="tab-item">
            <FaIcons.FaStar />
            <span>{t('skillsTitle')}</span>
          </div>
        </div>

        <div className="skills-content">
          <section className="skills-section">
            <h3><FaIcons.FaCog /> {t('hardSkillsTitle')}</h3>
            <div className="skills-grid">
              {hardSkills.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
            </div>
          </section>

          <section className="skills-section">
            <h3><FaIcons.FaUserFriends /> {t('softSkillsTitle')}</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill) => <SoftSkillCard key={skill.name} skill={skill} t={t} />)}
            </div>
          </section>

          <section className="skills-section">
            <h3><FaIcons.FaPlusCircle /> {t('extrasTitle')}</h3>
            <div className="soft-skills-grid">
              {extras.map((skill) => <SoftSkillCard key={skill.name} skill={skill} t={t} />)}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;