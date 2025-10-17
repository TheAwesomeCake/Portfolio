import React from 'react';
import ModelViewer from '../ModelViewer/ModelViewer';
import './ModelDetails.css';
import { FaCube } from 'react-icons/fa';

const ModelDetails = ({ model, arrowPosition }) => {
  if (!model) return null;

  return (
    <div className="model-details-container">
      {arrowPosition !== null && (
        <div className="details-arrow" style={{ left: `${arrowPosition}px` }}></div>
      )}
      <div className="model-details-content">
        <div className="model-details-info">
          <h3>{model.title}</h3>
          <p>{model.longDescription}</p>
          <h4>Tecnologias:</h4>
          <div className="technologies-list">
            {model.technologies.map((tech, index) => (
              <span key={index} className="technology-tag">{tech}</span>
            ))}
          </div>
          <h4>Detalhes:</h4>
          <ul>
            {model.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className="model-details-viewer">
          <ModelViewer modelPath={model.modelPath} />
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;