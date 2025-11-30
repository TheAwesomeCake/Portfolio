import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="language-switcher" ref={wrapperRef}>
      <button className="btn btn-primary" onClick={() => setIsOpen(!isOpen)}>
        <FaGlobe />
        <span>{i18n.language.startsWith('en') ? 'EN' : 'PT'}</span>
        <FaChevronDown className={`chevron ${isOpen ? 'open' : ''}`} />
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <button onClick={() => changeLanguage('pt')} disabled={i18n.language === 'pt'}>
            PT
          </button>
          <button onClick={() => changeLanguage('en')} disabled={i18n.language.startsWith('en')}>
            EN
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

