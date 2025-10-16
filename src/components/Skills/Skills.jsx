import React from 'react';
import { hardSkills, softSkills, extras } from '../../skillsData.js';
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

const SoftSkillCard = ({ skill }) => {
  const IconComponent = allIcons[skill.icon];
  return (
    <div className="soft-skill-card">
      <div className="soft-skill-header">
        <div className="soft-skill-icon">
          {IconComponent ? <IconComponent /> : null}
        </div>
        <h4 className="soft-skill-name">{skill.name}</h4>
      </div>
      <p className="soft-skill-description">{skill.description}</p>
    </div>
  );
};

const Skills = ({ theme = 'theme-green' }) => {
  return (
    <div className={`skills-container ${theme}`}>
      <div className="tabs-container">
        <div className="tab-item">
          <FaIcons.FaStar />
          <span>Habilidades</span>
        </div>
      </div>

      <div className="skills-content">
        <section className="skills-section">
          <h3><FaIcons.FaCog /> Hard Skills</h3>
          <div className="skills-grid">
            {hardSkills.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
          </div>
        </section>

        <section className="skills-section">
          <h3><FaIcons.FaUserFriends /> Soft Skills</h3>
          <div className="soft-skills-grid">
            {softSkills.map((skill) => <SoftSkillCard key={skill.name} skill={skill} />)}
          </div>
        </section>

        <section className="skills-section">
          <h3><FaIcons.FaPlusCircle /> Outros</h3>
          <div className="soft-skills-grid">
            {extras.map((skill) => <SoftSkillCard key={skill.name} skill={skill} />)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;