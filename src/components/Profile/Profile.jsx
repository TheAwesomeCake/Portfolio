import React, { useRef, useState, useEffect } from 'react';
import './Profile.css';
import pfp from '../../assets/pfp.png'; 
import { FaUser, FaCertificate, FaChevronLeft, FaChevronRight, FaGithub, FaDownload } from 'react-icons/fa';
import { certifications } from '../../certificationsData.js';
import CertificationCard from '../CertificationCard/CertificationCard';
import curriculo from '../../assets/curriculo.pdf';

const Profile = ({ theme = 'theme-purple' }) => {
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

  return (
    <div className={`profile-container ${theme}`}>
      <div className="tabs-container">
        <div className="tab-item">
          <FaUser />
          <span>Perfil</span>
        </div>
      </div>
      <div className="profile-card">
        <div className="profile-content">
          <div className="profile-avatar">
            <img src={pfp} alt="Avatar de Lucas" />
          </div>
          <div className="profile-bio">
            <h2 className="profile-intro">
                Olá! Sou <span>Lucas Barbosa dos Santos</span>
                </h2>
                <p>
                Desenvolvedor full-stack e estudante de Desenvolvimento de Software 
                Multiplataforma na Fatec Itaquera. Minha jornada na tecnologia é movida 
                pela paixão de criar soluções funcionais e pela ambição de me tornar 
                um Desenvolvedor de Jogos.
                </p>
                <p>
                Com um forte interesse em Design e UX/UI, busco sempre unir o código 
                a uma experiência de usuário intuitiva e visualmente impactante em 
                meus projetos.
                </p>
            <div className="profile-links">
              <a href={curriculo} download="curriculo-lucas-barbosa.pdf" className="btn btn-primary">
                <FaDownload /> Baixar CV
              </a>
              <a href="https://github.com/TheAwesomeCake" target="_blank" rel="noopener noreferrer" className="btn btn-icon" aria-label="GitHub">
                <FaGithub />
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
  );
};

export default Profile;
