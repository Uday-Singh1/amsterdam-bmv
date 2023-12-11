import React, { useState } from 'react';
import jsonData from '../../../../src/data/data.json';
import "./onsWerk.css";

const Werk = (props) => {
  const [selectedProject, setSelectedProject] = useState(jsonData.projecten[0]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section className="werk-section">
      <ul className="project-list">
        {jsonData.projecten.map((project) => (
          <li
            key={project.id}
            className="project-item"
            onClick={() => handleProjectClick(project)}
          >
            <div className="image-with-text">
              {project.image ? (
                <>
                  <img src={project.image} alt={`Afbeelding voor project ${project.id}`} />
                  <p>{project.title}</p>
                </>
              ) : (
                <div className="black-square"></div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {selectedProject && (
        <>
          <figure className="werk-figure">
            <img src={selectedProject.image} alt={`Afbeelding voor project ${selectedProject.id}`} />
          </figure>

          <article className="werk-article">
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.text}</p>
          </article>
        </>
      )}
    </section>
  );
};

export default Werk;
