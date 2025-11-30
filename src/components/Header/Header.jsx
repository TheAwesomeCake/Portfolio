import React from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
