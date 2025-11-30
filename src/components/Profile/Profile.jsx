import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Profile.css';
import pfp from '../../assets/pfp.png'; 
import { FaUser, FaCertificate, FaChevronLeft, FaChevronRight, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { certifications } from '../../certificationsData.js';
import CertificationCard from '../CertificationCard/CertificationCard';
import curriculoPT from '../../assets/curriculo.pdf';
import curriculoEN from '../../assets/cv.pdf'; 

const Profile = ({ theme = 'theme-purple' }) => {
  const { t, i18n } = useTranslation();
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkArrows = () => {
    console.log("checkArrows called");
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      console.log({ scrollLeft, scrollWidth, clientWidth });
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const currentRef = scrollContainerRef.current;
    if (!currentRef) return;

    checkArrows();

    const handleScroll = () => checkArrows();
    const handleResize = () => checkArrows();

    currentRef.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      currentRef.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
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
      } else {
        element.scrollLeft = start + distance;
        checkArrows(); 
      }
    };
    requestAnimationFrame(animateScroll);
  };

  const isEnglish = i18n.language.startsWith('en');
  const curriculumFile = isEnglish ? curriculoEN : curriculoPT;
  const curriculumFileName = isEnglish ? 'cv-lucas-barbosa.pdf' : 'curriculo-lucas-barbosa.pdf';

  return (
    <div className={`profile-container ${theme}`}>
      <div className="section-content">
        <div className="tabs-container">
          <div className="tab-item">
            <FaUser />
            <span>{t('profileTab')}</span>
          </div>
        </div>
        <div className="profile-card">
          <div className="profile-content">
            <div className="profile-avatar">
              <img src={pfp} alt="Avatar de Lucas" />
            </div>
            <div className="profile-bio">
              <h2 className="profile-intro">
                {t('intro')}<span>{t('name')}</span>
              </h2>
              <p>
                {t('bio1')}
              </p>
              <p>
                {t('bio2')}
              </p>
              <div className="profile-links">
                <a href={curriculumFile} download={curriculumFileName} className="btn btn-primary">
                  <FaDownload /> {t('downloadCV')}
                </a>
                <a href="https://github.com/TheAwesomeCake" target="_blank" rel="noopener noreferrer" className="btn btn-icon" aria-label={t('githubAria')}>
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/lucas-barbosa-dos-santos-dev/" target="_blank" rel="noopener noreferrer" className="btn btn-icon" aria-label={t('linkedinAria')}>
                  <FaLinkedin />
                </a>
              </div>
            </div>
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
    </div>
  );
};

export default Profile;
