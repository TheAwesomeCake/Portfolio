import React from 'react';
import './CertificationCard.css';

const CertificationCard = ({ certification }) => {
  const hasLink = certification.link;

  const cardContent = (
    <>
      <div className="card-image-wrapper">
        <img src={certification.image} alt={`Logo de ${certification.issuer}`} className="card-image" />
      </div>
      <div className="card-content">
        <div className="card-category">{certification.category}</div>
        <div className="card-cert-title">
          {certification.title}
        </div>
        {certification.details && (
          <div className="card-cert-details">{certification.details}</div>
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