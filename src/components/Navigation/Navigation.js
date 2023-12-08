import React from 'react';
import "./Navigation.css";

const Navigation = () => {
  return (

  
    <nav className="navigation">
      <div className="navigation__buttons">
        <button className="navigation__button">Projecten</button>
        <button className="navigation__button">Expertise</button>
        <button className="navigation__button">Mensen</button>
        <button className="navigation__button">Publicaties</button>
        <button className="navigation__button">Contact</button>
      </div>
      <div className="navigation__image">
        <img src="./img/amsterdam-xxx.svg" alt="Amsterdam" />
      </div>
    </nav>
  );
};

export default Navigation;

