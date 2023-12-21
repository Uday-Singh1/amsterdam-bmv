import React, { useState } from 'react';
import './kom-bij.css';

class Kombij extends React.Component {
  render() {
    const images = [
      `${process.env.PUBLIC_URL}/img/mens-1.webp`,
      `${process.env.PUBLIC_URL}/img/mens-2.webp`,
    ];

    return (
      <div className="kombij-container">
        <div className="sections__join__container">
          <section className="section__left__article">
            <article className="article__join">
              <img
                src={`${process.env.PUBLIC_URL}/img/amsterdam-xxx.svg`}
                alt="Beschrijvende tekst van de afbeelding"
                className="article__image"
              />
              <div className="article__content">
                <LongText />
              </div>
            </article>
            <div className="button-wrapper">
              <a href="https://www.amsterdam.nl/pmb/expertise/bmv/werken/" className="solliciteer__button">Solliciteer</a>
            </div>
          </section>

          <section className="section__right__images">
            <ul className="image-list">
              {images.map((image, index) => (
                <li key={index} className={`image__frame image__frame-${index + 1}`}>
                  <img
                    src={image}
                    alt={`Afbeelding ${index + 1}`}
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

// Een aparte component voor de lange tekst
const LongText = () => {
  const [showMore, setShowMore] = useState(false);
  const text = `
    BMV is altijd op zoek naar nieuwe collega’s, om aan de slag te gaan als junior-, medior- of senior-bouwmanager of projectmanager maatschappelijk vastgoed.
    Het team zoekt mensen met ervaring en een opleiding in het wetenschappelijk of hoger beroepsonderwijs, bijvoorbeeld op het gebied van bouwkunde, architectuur en vastgoedmanagement.
    Maar ook aan mensen met een ogenschijnlijk minder voor de hand liggende achtergrond, bijvoorbeeld rechten, sociologie of psychologie, heeft BMV behoefte.
    En in alle gevallen zijn een brede blik, flexibiliteit, goede omgevingsgevoeligheid en affiniteit met maatschappelijk vastgoed en het sociaal domein vereisten voor het werken bij BMV.
    Wie nog studeert, is van harte welkom om stage te lopen bij BMV. Werk mee in mooie projecten, krijg inzicht in het project- en bouwmanagement en leer de gemeente Amsterdam kennen.
    Stuur voor meer informatie over werken of stage lopen bij BMV een e-mail (met daarin in elk geval persoonlijke gegevens, een telefoonnummer en een curriculum vitae) naar capaciteit.BMV@amsterdam.nl.
  `;

  return (
    <div>
      <p className="article__join__text">
        {showMore ? text : `${text.slice(0, 703)}...`}
        <span
          className="read-more-link"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Lees minder' : 'Lees meer'}
        </span>
      </p>
    </div>
  );
};

export default Kombij;
