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
        <img src={`${process.env.PUBLIC_URL}/img/amsterdam-logo.png`} alt="Amsterdam" />
      </div>
      <div className={`navigation__buttons ${menuOpen ? 'open' : ''}`}>
        <a href="#projecten" className="navigation__button">Ons werk</a>
        <a href="#organisatie" className="navigation__button">Organisatie</a>
        <a href="#werken" className="navigation__button">Werken bij</a>
        <a href="https://www.amsterdam.nl/pmb/contact/" target='_blank' rel="noreferrer" className="navigation__button">Contact</a>
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
