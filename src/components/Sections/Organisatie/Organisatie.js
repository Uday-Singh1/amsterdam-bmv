import React, { useState, useEffect } from 'react';
import jsonData from '../../../../src/data/data.json';
import "./Organisatie.css";

const Organisatie = () => {
  const [selectedButton, setSelectedButton] = useState('');
  const [articleText, setArticleText] = useState('');

  useEffect(() => {
    // Stel de initiële staat van 'selectedButton' in op de ID van de eerste knop
    setSelectedButton(jsonData.Organisatie[0].id);
    // Voer de handleButtonClick uit om de initiële tekst in te stellen
    handleButtonClick(jsonData.Organisatie[0].id);
  }, []); // De lege array zorgt ervoor dat deze useEffect alleen wordt uitgevoerd bij de initiële render

  const handleButtonClick = (buttonId) => {
    const selectedOrganisatie = jsonData.Organisatie.find(item => item.id === buttonId);
    setArticleText(selectedOrganisatie ? selectedOrganisatie.text : '');
    setSelectedButton(buttonId);
  };

  return (
    <div>
      <div className="button-container">
        {jsonData.Organisatie.map(item => (
          <button
            key={item.id}
            onClick={() => handleButtonClick(item.id)}
            className={selectedButton === item.id ? 'active' : ''}
          >
            {item.title}
          </button>
        ))}
      </div>
      <article className="organ__article">
        {articleText}
      </article>
    </div>
  );
};

export default Organisatie;
