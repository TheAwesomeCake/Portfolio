import React from 'react';
import './CertificationCard.css';
import { useTranslation } from 'react-i18next';

const CertificationCard = ({ certification }) => {
  const { t } = useTranslation();
  const hasLink = certification.link;

  const cardContent = (
    <>
      <div className="card-image-wrapper">
        <img src={certification.image} alt={`Logo de ${t(certification.issuer)}`} className="card-image" />
      </div>
      <div className="card-content">
        <div className="card-category">{t(certification.category)}</div>
        <div className="card-cert-title">
          {t(certification.title)}
        </div>
        {certification.details && (
          <div className="card-cert-details">{t(certification.details)}</div>
        )}
      </div>
    </>
  );

  if (hasLink) {
    return (
      <a href={certification.link} target="_blank" rel="noopener noreferrer" className="certification-card clickable">
        {cardContent}
      </a>
    );
  }


  return (
    <div className="certification-card">{cardContent}</div>
  );
};

export default CertificationCard;