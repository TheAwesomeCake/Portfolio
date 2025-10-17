import React from 'react';
import Portfolio from './components/portfolio/Portfolio';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Models3D from './components/Models3D/Models3D';

function App() {
  return (
    <div className="App">
      <Profile theme="theme-blue" />
      <Skills theme="theme-green" />
      <Experience theme="theme-red" />
      <Portfolio theme="theme-purple" title="Repositórios" />
      <Models3D theme="theme-orange" title="Modelos 3D" />
    </div>
  );
}

export default App;