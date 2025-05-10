import React from 'react';
import '../styles/numerotvalehtelee.css';

const NumerotValehtelee = () => {
  return (
    <div className="numerot-wrapper">
      <h1 className="main-title">NUMEROT EIVÄT VALEHTELE</h1>
      
      <div className="bubbles-container">
        <div className="bubble">30% suomalaisista on joutunut pulaan huijausten takia vuodesta 2010 lähtien</div>
        <div className="bubble">60% suomalaisista ei tiedä mitä pitää tehdä, jos joutuu huijauksen uhriksi</div>
        <div className="bubble">80% suomalaisista on joskus saanut huijausviestin</div>
        <div className="bubble">Satoja tilejä murretaan organisaatioissa, ja yli 10 000 kalastusviestiä lähetetään joka vuosi</div>
      </div>

      <div className="quote-container">
        <div className="quote">
          “Rikolliset pyrkivät luomaan kiireen tunnun tilanteeseen. Jos puhutaan oikeasta poliisista, verottajasta tai pankista, mitään asiaa ei tarvitse samalla sekunnilla tehdä.”
          <br />– Niko Saxholm, Finanssiala ry:n johtaja, yle.fi (2024)
        </div>
        <div className="quote">
          “Jos vastaanottajapankki on ehtinyt siirtää rahat vastaanottajan tilille ja jos vastaanottaja on ehtinyt käyttää rahat, on käytännössä mahdotonta saada rahoja takaisin.”
          <br />– Sakari Wuolijoki, Nordean yleislakimies, yle.fi (2024)
        </div>
        <div className="quote">
          “Jokaisen tulee muistaa, ettei kenellekään pidä luovuttaa omia verkkopankkitunnuksia tai maksukorttien tietoja.”
          <br />– Juha Leinonen, Itä-Suomen poliisin rikoskomisario, yle.fi (2024)
        </div>
      </div>
    </div>
  );
};

export default NumerotValehtelee;
