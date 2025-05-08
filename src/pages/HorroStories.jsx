import "../styles/stories.css";

import story1img from "../pictures/tvåkvinnor_liten.png";
import story2img from "../pictures/gubbe_liten.png";
import story3img from "../pictures/ensamkvinna_liten.png";

const HorrorStories = () => {
  return (
    <div className="stories-container">
      <h1 className="storyheadline">
        Marjatta 71-v. ja Anni 72-v. jäi arvontahujauksen uhreiksi
      </h1>
      return(
      <div className="stories-container">
        <div className="descriptionandstory">
          <div className="story1-image-container">
            <img className="storykuva" src={story1img} />
          </div>
          <div className="story-description">
            <p>
              Marjatta ja Anni ovat kotoisin Porvoosta ja ovat olleet ystäviä jo
              pitkään. <br></br>
              <br></br>
              Anni kertoo, kuinka hän eräänä päivänä sai tavallisen
              Facebook-viestin Marjattalta. Yleensä he juttelevat
              tekstiviestitse, mutta koska molemmat käyttävät Facebookia
              aktiivisesti, ei Anni pitänyt sitä mitenkään outona. <br></br>{" "}
              <br></br>
              Facebook-viestissä Marjatta kysyi Annin puhelinnumeroa ja kertoi,
              että he olivat osallistuneet yhdessä arvontaan ja voittaneet.
              <br></br> <br></br>– Minusta oli outoa, että hän kysyi
              puhelinnumeroani, koska sen pitäisi olla hänellä tallessa
              puhelimessaan, mutta en ajatellut asiaa sen enempää, ja
              lottovoitto kuulosti tietenkin upealta, Anni kertoo.
              <br></br> <br></br>– Seuraavaksi Marjatta kysyi joitakin
              kuusinumeroisia koodeja, joita olin saanut puhelimeeni ja annoin
              ne hänelle.
              <br></br> <br></br>
              Seuraavana päivänä Anni soitti Marjattalle selvittääkseen, mistä
              arvonnasta oli oikein kyse.
              <br></br> <br></br>– “Se ei ollut minä!” huudahdin, kun Anni
              soitti, Marjatta kertoo.
              <br></br> <br></br>
              Lopulta he yhdessä ymmärsivät ikävän totuuden, Marjattan
              Facebook-tili oli kaapattu. Kuusinumeroisten koodien kautta myös
              useat Anniin liittyvät tilit oli saatu haltuun.
              <br></br> <br></br>
              Anni ja Marjatta ilmoittivat asiasta poliisille ja pankille. He
              neuvoivat Annia vaihtamaan salasanansa ja tekemään niistä
              turvallisemmat. Pankki huolehti siitä, ettei Annin tililtä
              katoaisi rahaa siltä varalta, että huijarit olisivat saaneet
              haltuunsa hänen pankkitietonsa.
            </p>
          </div>
        </div>
      </div>
      <div className="story2">
        <h1 className="storyheadline">
          Onni 84 -v. menetti kymmeniä tuhansia euroja puhelinhuijauksessa.
        </h1>

        <div className="descriptionandstory">
          <div className="story2-image-container">
            <img className="storykuva" src={story2img} />
          </div>
          <div className="story-description">
            <p>
              Helmikuussa Onni Kivivuorelle soitti henkilö, joka kertoi olevansa
              Norwegian Bankista ja väitti, että Onnin tilillä oli havaittu
              huolestuttavaa toimintaa. Onni vastasi, ettei käytä Norwegian
              Bankia, vaan hänen pankkinsa on Nordea. Puhelimessa ollut henkilö
              sanoi: "Selvä, saat pian soiton Nordeasta." <br></br> <br></br>
              Ja niinhän siinä kävi, hetken kuluttua soi puhelin, ja soittaja
              esittäytyi Nordean edustajaksi. Hän kertoi, että Onnin täytyi
              toimia nopeasti, jotta hänen rahansa eivät katoaisi – ne täytyi
              siirtää toiselle tilille pelastamiseksi.
              <br></br> <br></br>– Minun olisi pitänyt pitää kiireellistä
              tilannetta varoitusmerkkinä, mutta mies puhelimessa oli hyvin
              vakuuttava ja puhui sujuvaa suomea. Menin paniikkiin, koska luulin
              säästöjeni olevan vaarassa, Onni kertoo.
              <br></br> <br></br>Onni toimi puhelimessa olleen “Nordea-henkilön”
              ohjeiden mukaan ja antoi pankkitunnuksensa. Kun hän lopetti
              puhelun, oikea Nordea oli yrittänyt soittaa hänelle. Silloin Onni
              ymmärsi, mitä oli tapahtunut. Kun Onni soitti pankkiin takaisin,
              he vahvistivat hänen epäilynsä: rahat hänen tililtään olivat
              kadonneet.
              <br></br> <br></br>
              Kun Onni pyysi pankkia keskeyttämään siirron, hän sai järkytyksen,
              se ei ollut enää mahdollista, sillä rahat oli jo nostettu ja
              siirretty puolalaiselle pankkitilille. Kyseessä oli kymmeniä
              tuhansia euroja.
              <br></br> <br></br>Onni teki asiasta rikosilmoituksen, ja poliisi
              alkoi heti tutkia tapausta.
              <br></br> <br></br>
              Puoli vuotta myöhemmin, kun Onni tarkisti verkkopankkinsa, hän
              yllättyi suuresti – tilille oli ilmestynyt lähes sama summa, jonka
              hän oli menettänyt puoli vuotta aiemmin. Rahat oli palauttanut
              Puolan syyttäjänvirasto. Onni oli jo ajatellut, että rahat olivat
              lopullisesti mennyttä, mutta Puolan ja Suomen poliisin sekä
              syyttäjän yhteistyön ansiosta Onni sai lähes kaikki rahansa
              takaisin.
            </p>
          </div>
        </div>
      </div>
      <div className="story3">
        <h1 className="storyheadline">
          Tiina Mäkelä, 65-v. menetti säästönsä huijausviestin takia.
        </h1>
        <div className="descriptionandstory">
          <div className="story2-image-container">
            <img className="storykuva" src={story3img} />
          </div>
          <div className="story-description">
            <p>
              Tiina Mäkelä oli juuri jäänyt eläkkeelle vuoden alussa ja
              säästänyt rahaa ensimmäistä eläkeläismatkaansa varten, kun hän
              lankesi kalasteluviestiin, eli viestiin, jonka tarkoituksena on
              houkutella klikkaamaan linkkiä saadakseen pääsyn henkilökohtaisiin
              tietoihin tai pankkitunnuksiin.
              <br></br> <br></br>
              Hän sai tekstiviestin, joka näytti olevan Verohallinnolta.
              Viestissä kerrottiin, että Tiinan tulee käyttää viestissä olevaa
              linkkiä päästäkseen tärkeään viestiin, joka koskee hänen
              veroasioitaan. Viestissä väitettiin asian olevan kiireellinen.
              Tiina klikkasi linkkiä ja päätyi sivulle, joka pyysi hänen
              pankkitunnuksiaan.
              <br></br> <br></br>– Ajattelin, että viesti oli luotettava, koska
              se näytti tulevan osoitteesta vero.fi:sta ja asia vaikutti
              kiireelliseltä, joten annoin pankkitunnukseni, Tiina kertoo.
              <br></br> <br></br>Tiina ei koskaan päässyt linkin kautta
              mihinkään varsinaiseen viestiin, vaan unohti koko asian, kunnes
              sai puhelun pankiltaan, joka oli huomannut, että hänen
              säästötilinsä oli tyhjennetty.
              <br></br> <br></br>
              Koska hän oli itse syöttänyt pankkitunnuksensa vastoin pankin
              sääntöjä, joiden mukaan tunnuksia ei koskaan saa antaa linkkien
              kautta, hän ei saanut rahojaan takaisin.
              <br></br> <br></br>Jos viesti olisi ollut aito, siinä ei olisi
              väitetty asian olevan kiireellinen. Viesti ei myöskään olisi
              sisältänyt linkkiä, vaan Tiinaa olisi pyydetty siirtymään
              Verohallinnon verkkosivuille itse.
            </p>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default HorrorStories;
