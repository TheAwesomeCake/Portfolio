import React, { useRef, useState, useEffect } from 'react';
import { certifications } from '../../certificationsData';
import CertificationCard from '../CertificationCard/CertificationCard';
import './Certifications.css';
import { FaCertificate, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Certifications = ({ theme = 'theme-purple', title = 'Formação e Cursos' }) => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkArrows = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const currentRef = scrollContainerRef.current;
    if (!currentRef) return;

    checkArrows();

    currentRef.addEventListener('scroll', checkArrows);
    window.addEventListener('resize', checkArrows);

    return () => {
      currentRef.removeEventListener('scroll', checkArrows);
      window.removeEventListener('resize', checkArrows);
    };
  }, []);

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
    <div className={`certifications-container ${theme}`}>
      <div className="tabs-container">
        <div className="tab-item">
          <FaCertificate />
          <span>{title}</span>
        </div>
      </div>

      <div className="cert-carousel-wrapper">
        {showLeftArrow && <button className="scroll-arrow left" onClick={() => scroll('left')}><FaChevronLeft /></button>}
        <div className="cert-scroll-container" ref={scrollContainerRef}>
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
        {showRightArrow && <button className="scroll-arrow right" onClick={() => scroll('right')}><FaChevronRight /></button>}
      </div>
    </div>
  );
};

export default Certifications;