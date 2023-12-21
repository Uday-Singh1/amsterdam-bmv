import React from 'react';
import "./afbeeldingen.css";
import jsonData from '../../../../src/data/data.json'; // Vervang met het juiste pad naar je JSON-bestand

const RightSectionFirst = (props) => {
  const { images } = jsonData;

  return (
    <section className="section__right">
      {images.map((image) => (
        <figure key={image.id} className={`square__${image.id}`}>
          <img src={process.env.PUBLIC_URL+image.src} alt={image.alt} />
        </figure>
      ))}
    </section>
  );
};

export default RightSectionFirst;