import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick, isSelected }) => {
  return (
    <div
      className={`project-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <img src={project.symbol} alt={`Símbolo do projeto ${project.title}`} className="card-symbol" />
      <h3 className="card-title">{project.title}</h3>
      <p className="card-short-description">{project.shortDescription}</p>
    </div>
  );
};

export default ProjectCard;