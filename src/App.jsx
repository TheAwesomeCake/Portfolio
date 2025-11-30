import React from 'react';
import Header from './components/Header/Header';
import Portfolio from './components/portfolio/Portfolio';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Models3D from './components/Models3D/Models3D';

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Profile theme="theme-blue" />
        <Skills theme="theme-green" />
        <Experience theme="theme-red" />
        <Portfolio theme="theme-purple" />
        <Models3D theme="theme-orange" />
      </main>
    </div>
  );
}

export default App;