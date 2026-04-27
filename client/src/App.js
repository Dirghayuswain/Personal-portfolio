import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>Developer Portfolio</h1>
        <p>Full-Stack Web Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>Passionate developer focused on building efficient, scalable web applications.</p>
      </section>

      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.techStack.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 | Built with React & Node.js</p>
      </footer>
    </div>
  );
}

export default App;
