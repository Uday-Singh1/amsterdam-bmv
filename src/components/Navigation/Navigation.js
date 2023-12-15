import React, { useState } from 'react';
import "./Navigation.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
      <div className="navigation__image">
        <img src="./img/amsterdam-logo.png" alt="Amsterdam" />
      </div>
      <div className={`navigation__buttons ${menuOpen ? 'open' : ''}`}>
        <button className="navigation__button">Projecten</button>
        <button className="navigation__button">Expertise</button>
        <button className="navigation__button">Mensen</button>
        <button className="navigation__button">Publicaties</button>
        <button className="navigation__button">Contact</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navigation;
