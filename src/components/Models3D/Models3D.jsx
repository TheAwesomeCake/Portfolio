import React, { useState, useRef, useEffect } from 'react';
import './Models3D.css';
import { models } from '../../modelsData';
import ModelCard from '../ModelCard/ModelCard';
import ModelDetails from '../ModelDetails/ModelDetails';
import { FaChevronLeft, FaChevronRight, FaCube } from 'react-icons/fa';

const Models3D = ({ theme = 'theme-orange', title = 'Modelos 3D' }) => {
  const [selectedModel, setSelectedModel] = useState(null);
  const scrollContainerRef = useRef(null);
  const detailsSectionRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [arrowPosition, setArrowPosition] = useState(null);

  const handleCardClick = (model, event) => {
    if (selectedModel && selectedModel.id === model.id) {
      setSelectedModel(null);
      setArrowPosition(null);
    } else {
      setSelectedModel(model);
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
    if (selectedModel && scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector(`.model-card.selected`);
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
  }, [models, selectedModel]);

  useEffect(() => {
    if (selectedModel && detailsSectionRef.current) {
      detailsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedModel]);

  const scroll = (direction) => {
    const element = scrollContainerRef.current;
    if (!element) return;

    const scrollAmount = element.clientWidth * 0.8;
    const distance = direction === 'left' ? -scrollAmount : scrollAmount;
    const start = element.scrollLeft;
    const startTime = performance.now();
    const duration = 400;

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      element.scrollLeft = start + distance * easeOutProgress;
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };
    requestAnimationFrame(animateScroll);
  };

  return (
    <div className={`models-3d-container ${theme}`}>
      <div className="tabs-container">
        <div className="tabs-content">
          <div className="tab-item">
            <FaCube />
            <span>{title}</span>
          </div>
        </div>
      </div>

      <div className="models-carousel-wrapper">
        {showLeftArrow && <button className="scroll-arrow left" onClick={() => scroll('left')}><FaChevronLeft /></button>}
        <div className="models-scroll-container" ref={scrollContainerRef}>
          {models.map((model) => (
            <ModelCard
              key={model.id}
              model={model}
              onClick={(e) => handleCardClick(model, e)}
              isSelected={selectedModel && selectedModel.id === model.id}
            />
          ))}
        </div>
        {showRightArrow && <button className="scroll-arrow right" onClick={() => scroll('right')}><FaChevronRight /></button>}
      </div>

      {selectedModel && (
        <div className="details-section" ref={detailsSectionRef}>
          <ModelDetails model={selectedModel} arrowPosition={arrowPosition} />
        </div>
      )}
    </div>
  );
};

export default Models3D;