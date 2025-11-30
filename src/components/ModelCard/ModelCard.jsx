import React from 'react';
import './ModelCard.css';
import { useTranslation } from 'react-i18next';

const ModelCard = ({ model, onClick, isSelected }) => {
  const { t } = useTranslation();
  return (
    <div className={`model-card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <img src={model.symbol} alt={t(model.title)} className="model-card-symbol" />
      <h3 className="model-card-title">{t(model.title)}</h3>
      <p className="model-card-description">{t(model.shortDescription)}</p>
    </div>
  );
};

export default ModelCard;