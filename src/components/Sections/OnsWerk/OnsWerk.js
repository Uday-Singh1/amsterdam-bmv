import React from 'react';
import jsonData from '../../../../src/data/data.json';
import "./onsWerk.css";



const Werk = (props) => {
  return (
    <ul className="project-list">
      {jsonData.projecten.map((project) => (
        <li key={project.id} className="project-item">
          <div className="image-with-text">
            {project.image ? (
              <>
                <img src={project.image} alt={`Afbeelding voor project ${project.id}`} />
                <p>{project.text}</p>
              </>
            ) : (
              <div className="black-square"></div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Werk;
