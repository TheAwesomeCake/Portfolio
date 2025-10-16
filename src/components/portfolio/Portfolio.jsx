import React, { useState, useRef, useEffect } from 'react';
import { projects } from '../../projectsData';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import './Portfolio.css';
import { FaChevronLeft, FaChevronRight, FaGithub } from 'react-icons/fa';

const Portfolio = ({ theme = 'theme-purple', title = 'Repositórios' }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollContainerRef = useRef(null);
  const detailsSectionRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [arrowPosition, setArrowPosition] = useState(null);

  const handleCardClick = (project, event) => {
    if (selectedProject && selectedProject.id === project.id) {
      setSelectedProject(null);
      setArrowPosition(null);
    } else {
      setSelectedProject(project);
      if (event && event.currentTarget) {
        const cardRect = event.currentTarget.getBoundingClientRect();
        const position = cardRect.left + cardRect.width / 2;
        setArrowPosition(position);
      }
    }
  };

  const checkArrows = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const updateArrowPosition = () => {
    if (selectedProject && scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector(`.project-card.selected`);
      if (card) {
        const cardRect = card.getBoundingClientRect();
        setArrowPosition(cardRect.left + cardRect.width / 2);
      }
    }
  };

  useEffect(() => {
    checkArrows();
    const currentRef = scrollContainerRef.current;

    const handleScroll = () => {
      checkArrows();
      updateArrowPosition();
    };
    currentRef?.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      checkArrows();
      updateArrowPosition();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      currentRef?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [projects, selectedProject]);

  useEffect(() => {
    const smoothScrollTo = (element, duration = 800) => {
      if (!element) return;
  
      const targetPosition = element.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime = null;
  
      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        // Easing function (ease-in-out-quart) para uma aceleração e desaceleração bem suaves
        const easeInOutProgress = progress < 0.5 
          ? 8 * progress * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 4) / 2;
  
        window.scrollTo(0, startPosition + distance * easeInOutProgress);
  
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };
      requestAnimationFrame(animation);
    };

    if (selectedProject && detailsSectionRef.current) {
      smoothScrollTo(detailsSectionRef.current, 800);
    }
  }, [selectedProject]);

  const scroll = (direction) => {
    const element = scrollContainerRef.current;
    if (!element) return;

    const scrollAmount = element.clientWidth * 0.8;
    const distance = direction === 'left' ? -scrollAmount : scrollAmount;
    const duration = 400;

    const start = element.scrollLeft;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);

      element.scrollLeft = start + distance * easeOutProgress;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }
    requestAnimationFrame(animateScroll);
  };

  return (
    <div className={`portfolio-container ${theme}`}>
      <div className="tabs-container">
        <div className="tabs-content">
          <div className="tab-item">
            <FaGithub />
            <span>{title}</span>
          </div>
        </div>
      </div>

      <div className="projects-carousel-wrapper">
        {showLeftArrow && <button className="scroll-arrow left" onClick={() => scroll('left')}><FaChevronLeft /></button>}
        <div className="projects-scroll-container" ref={scrollContainerRef}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={(e) => handleCardClick(project, e)}
              isSelected={selectedProject && selectedProject.id === project.id}
            />
          ))}
        </div>
        {showRightArrow && <button className="scroll-arrow right" onClick={() => scroll('right')}><FaChevronRight /></button>}
      </div>

      {selectedProject && (
        <div className="details-section" ref={detailsSectionRef}>
          <ProjectDetails project={selectedProject} arrowPosition={arrowPosition} />
        </div>
      )}
    </div>
  );
};

export default Portfolio;