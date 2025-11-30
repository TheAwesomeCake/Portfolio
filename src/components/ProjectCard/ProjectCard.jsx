import React from 'react';
import './ProjectCard.css';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project, onClick, isSelected }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`project-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <img src={project.symbol} alt={`Símbolo do projeto ${t(project.title)}`} className="card-symbol" />
      <h3 className="card-title">{t(project.title)}</h3>
      <p className="card-short-description">{t(project.shortDescription)}</p>
    </div>
  );
};

export default ProjectCard;