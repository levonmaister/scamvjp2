



import React from 'react'


import '../styles/numerotvalehtelee.css';


const NumerotValehtelee = () => {

return(


    <div>


        <h1>--------NUMEROT EIVÄT VALEHTELE SIDAN----------</h1>
        <h4>Klicka på ruta för mer info + källa</h4>

        <div className='textbox-container1'>
            <div className='textbox'><div className='info-text'>80% suomalaisista on joskus saanut hujausviestin</div></div>
            <div className='textbox'><div className='info-text'>60% suomalaisista ei tiedä mitä pitää tehdä, jos joutuu hujauksen uhriksi</div></div>
        </div>

        <br></br>   <br></br>   <br></br>   <br></br>   

        <div className='newsbox-container1'>

        <div className='news'><div className='info-text'>“Rikolliset pyrkivät luomaan kiireen tunnun tilanteeseen. Jos puhutaan oikeasta poliisista, verottajasta tai pankista, mitään asiaa ei tarvitse samalla sekunnilla tehdä.”
- Niko Saxholm, Finanssiala ry:n johtaja, yle.fi (2024)</div></div>
            <div className='news'><div className='info-text'>”Jos vastaanottajapankki on ehtinyt siirtää rahat vastaanottajan tilille ja jos vastaanottaja on ehtinyt käyttää rahat, on käytännössä mahdotonta saada rahoja takaisin.”Sakari Wuolijoki, Nordean yleislakimies, yle.fi (2024)</div></div>
        </div>

        <div className='numerot-headline'><h1>NUMEROT EIVÄT VALEHTELE</h1></div>
    
        <div className='textbox-container2'>
            <div className='textbox'><div className='info-text'>30% suomalaisista on joutunut pulaan huijausten takia vuodesta 2010 lähtien.</div></div>
            <div className='textbox'><div className='info-text'>Satoja tilejä murretaan organisaatioissa, ja yli 10 000 kalastusviestiä lähetetään joka vuosi.</div></div>
        </div>

        <br></br>   <br></br>   <br></br>   <br></br>   

        <div className='newsbox-container2'>
            <div className='news'><div className='info-text'>“Jokaisen tulee muistaa, ettei kenellekään pidä luovuttaa omia verkkopankkitunnuksia tai maksukorttien tietoja.”
Juha Leinonen, Itä-Suomen poliisin rikoskomisario, yle.fi (2024)</div></div>

        </div>

    </div>
)

}


export default NumerotValehtelee
