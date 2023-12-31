import React, { useState, useEffect } from 'react';
import jsonData from '../../../../src/data/data.json';
import './onsWerk.css';

const Werk = (props) => {
  const [selectedProject, setSelectedProject] = useState(jsonData.projecten[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    startAutomaticChange(); // Start automatic change when a new project is selected
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.selectedimages.length);
  };

  const startAutomaticChange = () => {
    clearInterval(intervalId);
    setIntervalId(setInterval(handleNextImage, 4000));
  };

  useEffect(() => {
    setCurrentImageIndex(0);

    return () => {
      clearInterval(intervalId);
    };
  }, [selectedProject, intervalId]);

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
                  <img src={process.env.PUBLIC_URL + project.image} alt={`Afbeelding voor project ${project.id}`} />
                  <p>{project.title}</p>
                </>
              ) : (
                <div className="black-square"></div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {selectedProject && selectedProject.selectedimages && selectedProject.selectedimages.length > 0 && (
        <>
          <figure className="werk-figure" onMouseEnter={startAutomaticChange}>
            <img
              src={`${process.env.PUBLIC_URL}/${selectedProject.selectedimages[currentImageIndex]}`}
              alt={`Afbeelding voor project ${selectedProject.id}`}
            />
            <div className="slider-buttons">
              {selectedProject.selectedimages.map((image, index) => (
                <button
                  key={index}
                  className={`slider-button ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                ></button>
              ))}
            </div>
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
