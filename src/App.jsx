import React from 'react';
import Portfolio from './components/portfolio/Portfolio';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <Profile theme="theme-blue" />
      <Skills theme="theme-green" />
      <Experience theme="theme-red" />
      <Portfolio theme="theme-purple" title="Repositórios" />
    </div>
  );
}

export default App;