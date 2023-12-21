import React from 'react';
import "./TextCard.css";

const TextCard = (props) => {
    return (
      <section className="section__left">
        <article className="article">
          <img src={`${process.env.PUBLIC_URL}/img/amsterdam-xxx.svg`} alt="Beschrijvende tekst van de afbeelding" className="article__image" />
          <div className="article__content">
            <p className="article__text">
              Voor veel mensen is en blijft Amsterdam een zeer aantrekkelijke plek om te wonen en dus blijven we bouwen aan de groei van de stad. Maar Amsterdam bestaat natuurlijk uit méér dan alleen woningen. Daarom bouwen we aan een sociaal-duurzaam Amsterdam: een stad die het welzijn van haar bewoners belangrijk vindt en verbetert, door niet alleen woningen te bouwen maar ook te zorgen voor maatschappelijke voorzieningen, voor huidige bewoners en toekomstige generaties.
            </p>
            <button className="article__button">Lees Meer</button>
          </div>
        </article>
      </section>
  );
};

export default TextCard;
