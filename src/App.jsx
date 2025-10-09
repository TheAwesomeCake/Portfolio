import React from 'react';
import ProjectCard from './components/ProjectCard';
import { projects } from './projectsData'; 

function App() {
  return (
    <div className="container">
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>

      </header>

      <main>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </main>
    </div>
  );
}

export default App;