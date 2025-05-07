

import "../styles/stories.css"


import story1img from "../pictures/tvåkvinnor_liten.png"


const HorrorStories = () => {


    return(

        <div className="stories-container">
            <h1>Hujaus esimerkit</h1>
<br></br>
<br></br>
<br></br> <br></br><br></br> <br></br>

            <div className="story1">

            <h1 className='story1headline'>Marjatta 71-v. ja Anni 72-v. jäi arvontahujauksen uhreiksi</h1>

            <div className='descriptionandstory'>

                <div className='story1-image-container'>
                
                <img className='storykuva' src={story1img} />
                </div>

                <div className='story1-description'>
                    <p>
                    Marjatta ja Anni ovat kotoisin Porvoosta ja ovat olleet ystäviä jo pitkään. <br></br><br></br>

Anni kertoo, kuinka hän eräänä päivänä sai tavallisen Facebook-viestin Marjattalta. Yleensä he juttelevat tekstiviestitse, mutta koska molemmat käyttävät Facebookia aktiivisesti, ei Anni pitänyt sitä mitenkään outona. <br></br> <br></br>

Facebook-viestissä Marjatta kysyi Annin puhelinnumeroa ja kertoi, että he olivat osallistuneet yhdessä arvontaan ja voittaneet. 
<br></br> <br></br>

– Minusta oli outoa, että hän kysyi puhelinnumeroani, koska sen pitäisi olla hänellä tallessa puhelimessaan, mutta en ajatellut asiaa sen enempää, ja lottovoitto kuulosti tietenkin upealta, Anni kertoo. 
<br></br> <br></br>
– Seuraavaksi Marjatta kysyi joitakin kuusinumeroisia koodeja, joita olin saanut puhelimeeni ja annoin ne hänelle. 
<br></br> <br></br>
Seuraavana päivänä Anni soitti Marjattalle selvittääkseen, mistä arvonnasta oli oikein kyse.
<br></br> <br></br>
– “Se ei ollut minä!” huudahdin, kun Anni soitti, Marjatta kertoo.
<br></br> <br></br>
Lopulta he yhdessä ymmärsivät ikävän totuuden, Marjattan Facebook-tili oli kaapattu. Kuusinumeroisten koodien kautta myös useat Anniin liittyvät tilit oli saatu haltuun.
<br></br> <br></br>
Anni ja Marjatta ilmoittivat asiasta poliisille ja pankille. He neuvoivat Annia vaihtamaan salasanansa ja tekemään niistä turvallisemmat. Pankki huolehti siitä, ettei Annin tililtä katoaisi rahaa siltä varalta, että huijarit olisivat saaneet haltuunsa hänen pankkitietonsa.
                    </p>
                </div>

                </div>


            </div>




            <div className="story2">
                <p>Moi olen Greta ja nigerian prinssi vei kaikki mun rahat</p>
            </div>

            <div className="story3">
                <p>Moi olen Greta ja nigerian prinssi vei kaikki mun rahat</p>
            </div>

        </div>

    )
}


export default HorrorStories;