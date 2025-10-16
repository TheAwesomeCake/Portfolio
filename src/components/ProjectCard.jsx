import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FaGithub } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectCard.css';

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

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  return (
    <>
      <div className="card">
        <div className="card-header" onClick={() => setIsExpanded(!isExpanded)}>
          <div>
            <h3>{project.title}</h3>
            <p>{project.shortDescription}</p>
          </div>
          <span className={`arrow ${isExpanded ? 'expanded' : ''}`}>▼</span>
        </div>

        {isExpanded && (
          <div className="card-expanded-content">
            <div className="expanded-layout">
              <div className="expanded-main-content">
                <div className="project-details">
                  <h4>Sobre o Projeto</h4>
                  <p>{project.longDescription}</p>
                </div>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="github-link"
                  title="Abrir o projeto no GitHub"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="expanded-sidebar">
                <div className="project-carousel">
                  <h4>Galeria</h4>
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
          </div>
        )}
      </div>
      <ImageModal src={modalImage} onClose={() => setModalImage(null)} />
    </>
  );
};

export default ProjectCard;