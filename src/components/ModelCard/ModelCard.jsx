import React from 'react';
import './ModelCard.css';

const ModelCard = ({ model, onClick, isSelected }) => {
  return (
    <div className={`model-card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <img src={model.symbol} alt={model.title} className="model-card-symbol" />
      <h3 className="model-card-title">{model.title}</h3>
      <p className="model-card-description">{model.shortDescription}</p>
    </div>
  );
};

export default ModelCard;