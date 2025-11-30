import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FaGithub } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectDetails.css';
import { useTranslation } from 'react-i18next';
import UnityGame from '../UnityGame/UnityGame';
import { isMobile } from 'react-device-detect';

const ImageModal = ({ src, onClose }) => {
  if (!src) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="Imagem do projeto ampliada" />
        <button className="modal-close" onClick={onClose}>X</button>
      </div>
    </div>
  );
};


const ProjectDetails = ({ project, arrowPosition }) => {
  const [modalImage, setModalImage] = useState(null);
  const { t } = useTranslation();

  if (!project) return null;

  const arrowStyle = arrowPosition ? { left: `${arrowPosition}px` } : {};

  const renderHorizontalLayout = () => {
    const hasGame = !!project.unityConfig;

    return (
      <div className="details-layout unity-layout">
        <div className="horizontal-info-wrapper">
          <div className="horizontal-section">
            <h4>{t('proj_about')}</h4>
            <p>{t(project.longDescription)}</p>
          </div>
          {project.technologies && project.technologies.length > 0 && (
            <div className="horizontal-section">
              <h4>{t('proj_tech')}</h4>
              <div className="technologies-list">
                {project.technologies.map((tech, index) => <span key={index} className="tech-tag">{tech}</span>)}
              </div>
            </div>
          )}
          <div className="horizontal-section">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link-horizontal"
              title={t('proj_github_aria')}
            >
              <FaGithub />
            </a>
          </div>
        </div>
        {hasGame && (
          <UnityGame unityConfig={project.unityConfig} />
        )}
      </div>
    );
  };

  const renderDefaultLayout = () => (
    <div className="details-layout">
      <div className="details-main-content">
        <div className="project-info">
          <h4>{t('proj_about')}</h4>
          <p>{t(project.longDescription)}</p>
          {project.technologies && project.technologies.length > 0 && (
            <div className="project-technologies">
              <h4>{t('proj_tech')}</h4>
              <div className="technologies-list">
                {project.technologies.map((tech, index) => <span key={index} className="tech-tag">{tech}</span>)}
              </div>
            </div>
          )}
        </div>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          title={t('proj_github_aria')}
        >
          <FaGithub />
        </a>
      </div>
      <div className="details-sidebar">
        <div className="project-carousel">
        {isMobile && project.id === 6 && (
            <div className="mobile-message">
              {t('proj_mobile_desktop_msg')}
            </div>
          )}
        {isMobile && project.id === 5 && (
            <div className="mobile-message">
              {t('proj_mobile_better_msg')}
            </div>
          )}
          <h4>{t('proj_gallery')}</h4>
          <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
            {project.images.map((image, index) => (
              <div
                key={index}
                className="carousel-image-container"
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => setModalImage(image)}
              >
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="project-details-container">
        <div 
          className="details-arrow-up"
          style={arrowStyle}
        ></div>
        {project.layoutType === 'horizontal' && !project.images ? renderHorizontalLayout() : renderDefaultLayout()}
      </div>
      <ImageModal src={modalImage} onClose={() => setModalImage(null)} />
    </>
  );
};

export default ProjectDetails;