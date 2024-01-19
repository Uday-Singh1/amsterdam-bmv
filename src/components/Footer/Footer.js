import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <footer className="footer">
      <section className="footer__list-container">
        <ul className="footer__list">
          <li className="footer__item">
            <h6 className="footer__title">Mail</h6>
            <p className="footer__text">PMB is bereikbaar op werkdagen tussen 8.30 - 17.30 uur.</p>
            <a target='_blank' rel="noreferrer" href="https://www.amsterdam.nl/pmb/contact/" className="footer__link">Contact</a>
          </li>
        </ul>
      </section>

      <section className="footer__list-container">
        <ul className="footer__list">
          <li className="footer__item">
            <h6 className="footer__title">Volg het ProjectManagement Bureau</h6>
            <p className="footer__text">PMB is bereikbaar op werkdagen tussen 8.30 - 17.30 uur.</p>
            <a target='_blank' rel="noreferrer" href="http://www.linkedin.com/company/projectmanagement-bureau" className="footer__link">Linkedin</a>
          </li>
        </ul>
      </section>

      <section className="footer__list-container">
        <ul className="footer__list">
          <li className="footer__item">
            <h6 className="footer__title">Over deze site</h6>
            <a target='_blank' rel="noreferrer" href="https://amsterdam.nl/pmb/algemene-onderdelen/colofon/" className="footer__link">Colofon</a>
            <a target='_blank' rel="noreferrer" href="https://www.amsterdam.nl/pmb/algemene-onderdelen/proclaimer-copyright/" className="footer__link">Proclaimer en Copyright </a>
            <a target='_blank' rel="noreferrer" href="https://www.amsterdam.nl/pmb/algemene-onderdelen/sitemap/" className="footer__link"> Sitemap </a>
          </li>
        </ul>
      </section>

      <section className="footer__list-container">
        <ul className="footer__list">
          <li className="footer__item">
            <h6 className="footer__title">Amsterdam.nl</h6>
            <p className="footer__text">Nieuws en publieksinformatie van de gemeente Amsterdam vindt u op amsterdam.nl</p>
            <a target='_blank' rel="noreferrer" href="https://www.amsterdam.nl/" className="footer__link">Naar Amsterdam.nl </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
